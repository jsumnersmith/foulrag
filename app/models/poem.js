// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var lineSchema = require('./line').schema;


// define our nerd model
// module.exports allows us to pass this to other files when it is called

var poemSchema = new Schema({
  title : {type : String, default: ''},
  author : {type : String, default: ''},
  lines : [lineSchema]
})

module.exports = mongoose.model('Poem', poemSchema);
