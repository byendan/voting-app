'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    
  title: { type : String, default : '', trim : true },
  responses: [{
      response: String,
      votes: Number
  }],
  user: { type : Schema.ObjectId, ref : 'User' }

});

module.exports = mongoose.model('Poll', Poll);