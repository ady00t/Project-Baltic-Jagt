'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
 	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	date : { type: Date, default: new Date()},
	totalPrice: Number,
	orderLine: [{
		product: {
			type: Schema.Types.ObjectId,
			ref: 'product'
		},
		quantity: Number,
		price : Number
	}]
});

module.exports = mongoose.model('Order', OrderSchema);