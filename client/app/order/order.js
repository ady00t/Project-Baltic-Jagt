'use strict';

angular.module('balticjagtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      })
	.state('confirmation', {
        url: '/confirmation',
        templateUrl: 'app/order/confirmation.html',
        controller: 'OrderCtrl'
      });
	
  });