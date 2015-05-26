'use strict';

angular.module('balticjagtApp')
  .factory('storeService',function($http){
			var service = {};
			service.list = function(callback){
				$http.get('/api/products').success(callback);
			};
	return service;
  });

