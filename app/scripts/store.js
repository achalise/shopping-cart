'use strict';

function store() {
   var pdt2 = new product(456, 'Banana2', 'Popular fruit', 5);
   this.products = [new product(123, 'Apple', 'Popular fruit', 10), pdt2];
}

store.prototype.getProduct = function(sku) {
   for(var i = 0; i < this.products.length; i++) {
      if(this.products[i].sku === sku) {
         return this.products[i];
      }
   }
   return null;
}
