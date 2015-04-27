'use strict';

angular.module('balticjagtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shoppingcart', {
        url: '/shoppingcart',
        templateUrl: 'app/shoppingcart/shoppingcart.html',
        controller: 'ShoppingcartCtrl'
      });
  });