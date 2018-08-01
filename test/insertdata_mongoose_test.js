const PostModel = require('../models/blog');
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('connected to MongoDB');
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
  //var potatoBag = [{name:'potato1'}, {name:'potato2'}];

  //var Potato = mongoose.model('Potato', PotatoSchema);
  PostModel.collection.insert(postObj, function (err, docs){
      if (err) {
          // TODO: handle error
          console.log('insert data error');
      } else {
          console.info('data were successfully stored.', docs.length);
      }
  });
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

