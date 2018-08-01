var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Chart Examples' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'My About Page' });
});

/*
router.get('/barchart', function(req, res) {
  data = [12,8,18,9,7,15];
  console.log('barchart data',data);
  res.render('barchart', { 
    title: 'My First Bar Chart',
    datai: JSON.stringify(data)
   });
});
router.get('/linechart', function(req, res) {
  data = [12,8,18,9,7,15];
  console.log('linechart data',data);
  res.render('linechart', { 
    title: 'My First Line Chart',
    datai: JSON.stringify(data)
   });
});

router.get('/piechart', function(req, res) {
  data = [12,8,18,9,7,15];
  console.log('piechart data',data);
  res.render('piechart', { 
    title: 'My First Pie Chart',
    datai: JSON.stringify(data)
   });
});*/
module.exports = router;
