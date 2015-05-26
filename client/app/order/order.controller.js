'use strict';

angular.module('balticjagtApp')
	.controller('OrderCtrl', function ($scope,$window, $http, $cookieStore, socket, cartService, customerService, orderService) {
	

	$scope.save = function () {
	orderService.createOrder(function(order){
		
         $cookieStore.put('teste', order);
		
	});
		
};
	$scope.returnedOrder = $cookieStore.get('teste');

	$scope.deleteCart = function(){
		
		cartService.emptyCart();
		 $cookieStore.remove($scope.returnedOrder);
	//	$window.location.reload(true);
	};
	
	$scope.savep = function(){
			$http.post('/api/customers', {name: $scope.nameC, address: $scope.addressC, phone: $scope.phoneC, email:$scope.emailC }).
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('success');				
			});
		};
	});