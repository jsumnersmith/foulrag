// grab the mongoose module
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called

module.exports.schema = new Schema({
  text : {type : String, default: ''},
  lineNumber : {type : Number, default: ''},
  meta: {
    author: {type : String, default: ''},
    title: {type : String, default: ''},
    language: {type : String, default: ''}
  },
  layout: {
    indentation: {type : Number, default: ''},
    alignment: {type : String, default: ''},
    indentOverflow: {type:Boolean, default:''}
  }
})
