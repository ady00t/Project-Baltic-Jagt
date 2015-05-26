'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: String,
  address: String,
  phone: String,
	email: String
});

module.exports = mongoose.model('Customer', CustomerSchema);