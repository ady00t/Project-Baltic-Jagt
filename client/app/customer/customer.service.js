'use strict';

angular.module('balticjagtApp')
  .factory('customerService',function($http){
			var service = {};
			service.list = function(callback){
				$http.get('/api/customers').success(callback);
			};
	
			service.addCust= function(nameC, addressC, phoneC, emailC ){
			$http.post('/api/customers', {name: nameC, address: addressC, phone: phoneC, email: emailC}).
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('success');		
		});
				};
	return service;
  });
