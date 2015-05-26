'use strict';

angular.module('balticjagtApp')
  .controller('ShoppingcartCtrl', function ($scope, cartService) {
   $scope.items = cartService.list;
	
	$scope.removeItem = function (index) {
			cartService.removeItem(index);
			//$scope.items.splice(index, 1);
		};
	
$scope.totalPrice = cartService.totalAmount;
  });
