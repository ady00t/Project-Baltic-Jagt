'use strict';

angular.module('balticjagtApp')
	.controller('OrderCtrl', function ($scope, $http, $cookieStore, socket, cartService, customerService, orderService) {

	
	$scope.customer = {name:'', address:'', phone:'', email:'' };

	$scope.save = function () {
	
	orderService.createOrder($scope.customer,function(order){
		
         $cookieStore.put('teste', order);
		
	});
		
};
	$scope.returnedOrder = $cookieStore.get('teste');

	$scope.deleteCart = function(){
		
		cartService.emptyCart();
		 $cookieStore.remove($scope.returnedOrder);
	//	$window.location.reload(true);
	};
	
	
	});