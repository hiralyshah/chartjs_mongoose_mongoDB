var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var PostModelSchema = new Schema({
    month: String,
    number_of_posts: Number
});


// Compile model from schema
var PostModel = mongoose.model('blogmodels', PostModelSchema );

module.exports = PostModel;

