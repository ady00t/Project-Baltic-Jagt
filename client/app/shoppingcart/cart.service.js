'use strict';

angular.module('balticjagtApp')
  .factory('cartService',function($http, $cookieStore) {
			var service = {};
			service.list = $cookieStore.get('shoppingCart');
			if(service.list === undefined){
				service.list = [];
			}
			service.addItem = function(item){
				var exists = -1;

angular.forEach(service.list, function(obj, key) {

            if (obj._id === item._id )   {
                exists = key;
				console.log(exists);
            }
        });

        // Because array index 0 will be defined as false
        if (exists > -1 ) {
            service.list[exists].qty += 1; }
        else {
            service.list.push({
                _id :   item._id,
                name :   item.name,
                price :   item.price,
                picture :   item.picture,
                qty   :   1
            });
        }

        $cookieStore.put('shoppingCart', service.list);
		
			};
	
	//Remove from cart
	service.removeItem = function(index){
				service.list.splice(index,1);
			 // Put cookie
			  $cookieStore.put('shoppingCart', service.list);		
			};
	service.totalAmount = function() {
        var total = 0;
        angular.forEach(service.list, function(item) {
            total += item.qty * item.price;
        });

        return total;
    };
			
	service.emptyCart = function(){
		
		$cookieStore.remove('shoppingCart')};
	return service;
  });
