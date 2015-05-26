
'use strict';

angular.module('balticjagtApp')
  .factory('orderService',function($http, cartService){
			var service = {};
			service.list = function(callback){
				$http.get('/api/orders').success(callback);
			};
	
	var listCartItems = cartService.list;
	var user = "5511447d0bec8b2f6219da7b";
	var totalPrice1 = cartService.totalAmount() * 1.25;
	var orderLine = [];
	
	angular.forEach(listCartItems, function (obj, key) {

		orderLine.push({
			product: obj.id,
			quantity: obj.quantity,
			price: obj.price
		});
	});

	service.createOrder = function (callback) {
		$http.post('/api/orders', {
			user: user,
			totalPrice: totalPrice1,
			orderLine: orderLine
		}).success(callback);
	};
	service.find = function(_id, callback){ 	
				$http.get('/api/orders/'+_id).success(callback);
			};
	return service;
  });