'use strict';

angular.module('balticjagtApp')
  .controller('MainCtrl', function ($scope, $http, socket, storeService, cartService) {
   
	
	$scope.cotois = [];
		storeService.list(function(cotois) {
       $scope.cotois = cotois;
    });
$scope.addItem = function (item) {
			cartService.addItem(item);
			$scope.item = {};
			
		};
		

  });
