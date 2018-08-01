
/*
//connect to mongodb
mongoose.connect('mongodb://localhost/postdata',function(err){
  if(err){
    return console.log(err);
  }
  return console.log("Successfully connected to MongoDB!");
});
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  
var postObj = [
    {month: 'January', number_of_posts: 65},
    {month: 'February', number_of_posts: 59},
    {month: 'March', number_of_posts: 20},
    {month: 'April', number_of_posts: 81},
    {month: 'May', number_of_posts: 56},
    {month: 'June', number_of_posts: 55},
    {month: 'July', number_of_posts: 40},
    {month: 'August', number_of_posts: 62},
    {month: 'September', number_of_posts: 85},
    {month: 'October', number_of_posts: 76},
    {month: 'November', number_of_posts: 65},
    {month: 'December', number_of_posts: 81}
  ];
  
  //save multiple documents to the collection referenced by Book Model
  dbo.collection("postdata").insertMany(postObj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});