'use strict';

storeApp.factory("DataService", function() {
   var myStore = new store();
   var cart = new ShoppingCart("myCart");
   return {store: myStore,
           cart: cart};
});
