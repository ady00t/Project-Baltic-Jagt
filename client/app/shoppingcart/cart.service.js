'use strict';

angular.module('balticjagtApp')
  .factory('cartService',function($http, $cookieStore){
			var service = {};
			service.list = $cookieStore.get('shoppingCart');
			if(service.list === undefined){
				service.list = [];
			}
			service.addItem = function(item){
				service.list.push(item);
			 // Put cookie
			  $cookieStore.put('shoppingCart',service.list);		
			};
	
	service.removeItem = function(index){
				service.list.splice(index,1);
			 // Put cookie
			  $cookieStore.put('shoppingCart', service.list);		
			};
	return service;
  });
