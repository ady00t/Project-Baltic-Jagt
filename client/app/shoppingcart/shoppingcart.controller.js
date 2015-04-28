'use strict';

angular.module('balticjagtApp')
  .controller('ShoppingcartCtrl', function ($scope, cartService) {
   $scope.items = cartService.list;
	
	$scope.removeItem = function (index) {
			cartService.removeItem(index);
			//$scope.items.splice(index, 1);
		};
	
$scope.totalPrice = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.qty * item.price;
        })

        return total;
    }
  });
