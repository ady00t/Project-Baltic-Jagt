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
			
		}
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
