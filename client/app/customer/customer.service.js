'use strict';

angular.module('balticjagtApp')
  .factory('customerService',function($http){
			var service = {};
	
			service.list = function(callback){
				$http.get('/api/customers').success(callback);
			};
	
			service.addCust= function(customer, callback){
			$http.post('/api/customers', {name: customer.name, address: customer.address, phone: customer.phone, email: customer.email }).
			success(callback)};
				
	return service;
  });
