'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
  price: Number,
	picture: String
	
});

module.exports = mongoose.model('Product', ProductSchema);