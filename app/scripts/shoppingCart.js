'use strict';

function ShoppingCart(name) {
   this.name = name;
   this.items = [];
   this.total = 0;
}

ShoppingCart.prototype.addItem = function(sku, name, price) {
   var item = new cartItem(sku, name, price, 1);
   var found = false;
   this.items.some(function(it){
     if(it.sku === sku) {
       it.quantity += 1;
       console.log('Incremented quantity to ' + item.quantity + ' for item: ' + item.sku);
       found = true;
       return;
     }
   });
   if (!found) {
     this.items.push(item);
   }

}

ShoppingCart.prototype.getTotalCount = function() {
   return this.items.length;
}

ShoppingCart.prototype.getTotalAmount = function() {
   var amount = 0;
   for(var i = 0; i < this.items.length; i++) {
      amount += this.items[i].price;
   }
   return amount;
}


function cartItem(sku, name, price, quantity) {
   this.sku = sku;
   this.name = name;
   this.price = price;
   this.quantity = quantity;
}
