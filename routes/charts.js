var express = require('express');
var router = express.Router();
const PostModel = require('../models/blog');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//Import the mongoose module
var mongoose = require('mongoose');

/* GET BarChart. */
router.get('/barchart', function(req, res, callback) {

  blogPostData(function(result){
    var month_data = result.month_data;
    var number_of_posts_data = result.number_of_posts_data;

    console.log(month_data, number_of_posts_data);
    res.render('dashboard/barchart', { 
      title: 'My First Bar Chart',
      datai: JSON.stringify(number_of_posts_data),
      labeli: JSON.stringify(month_data)
     });
  });
});

/* GET LineChart. */
router.get('/linechart', function(req, res) {

  blogPostData(function(result){
    var month_data = result.month_data;
    var number_of_posts_data = result.number_of_posts_data;

    console.log(month_data, number_of_posts_data);
    res.render('dashboard/linechart', { 
      title: 'My First Line Chart',
      datai: JSON.stringify(number_of_posts_data),
      labeli: JSON.stringify(month_data)
     });
  })
});

/* GET PieChart. */
router.get('/piechart', function(req, res) {

   MongoClient.connect(url, function(err, db, callback) {
    if (err) throw err;

    var dbo = db.db("mydb");
    dbo.collection("postdata").find({}).toArray(function(err, result) {
      if (err) throw err;
     
      console.log('result', result);
      var postData = getPostData(result, ['month', 'number_of_posts']);
      console.log('postData', postData);
      var number_of_posts = getNumber_Of_Posts(postData);
      var post_in_month = getMonth_Of_Posts(postData);
     
      console.log('piechart data',number_of_posts);
      res.render('dashboard/piechart', { 
        title: 'My First Pie Chart',
        datai: JSON.stringify(number_of_posts),
        labeli: JSON.stringify(post_in_month)
       });
     
      db.close();
    });
  });
});

/* GET Doughnut. */
router.get('/doughnut', function(req, res) {
  data = [65, 59, 20, 81, 56, 55, 40, 62, 85, 76, 65, 81];
  console.log('doughnut data',data);
  res.render('dashboard/doughnut', {
    title:'My First Doughnut Chart', 
    datai: JSON.stringify(data)
  });
});



function getPostData(obj1, obj2) {
  return obj1.map(function(row) {
    var result = {};
    obj2.forEach(function(key) {
      result[key] = row[key];
    });
    return result;
  });
}

function getNumber_Of_Posts(postData){
  data =[];
  var i = 0;
  postData.forEach(function(content, callback){
    for(var key in content){
      //console.log('key: '+key, ', value: '+ content[key]);
      if(key == 'number_of_posts'){
        data[i] = content[key];
      }
    }
    i++;
  });
  return data;
}

function getMonth_Of_Posts(postData){
  data = [];
  var i = 0;
  postData.forEach(function(content, callback){
    for(var key in content){
      //console.log('key: '+key, ', value: '+ content[key]);
      if(key == 'month'){
        data[i] = content[key];
      }
    }
    i++;
  });
  return data;
}





function blogPostData(callback) {
  // after some calculation 
  PostModel.find({}, function(err, postData){
    if(err){
      console.log(err);
    }else{
      getSomeData(postData, callback);
    }
  });
}

function getSomeData(postData, callback){

  month_data = [];
  number_of_posts_data =[];
  var i = 0;
  postData.forEach(function(content, callback){

    for(var key in content){
      //console.log('key: '+key, ', value: '+ content[key]);
      if(key == 'month'){
        month_data[i] = content[key];
      }
      if(key == 'number_of_posts'){
        number_of_posts_data[i] = content[key];
      }
    }
    i++;
    });
    var callBackString = {};
    callBackString.month_data = month_data;
    callBackString.number_of_posts_data = number_of_posts_data
      //return data;
    callback(callBackString);    
}


module.exports = router;