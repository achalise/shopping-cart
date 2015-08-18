'use strict';

function ShoppingCart(name) {
   this.name = name;
   this.items = [];
   this.total = 0;
}

ShoppingCart.prototype.addItem = function(sku, name, price, quantity) {
   var item = new cartItem(sku, name, price, quantity);
   this.items.push(item);
}

ShoppingCart.prototype.getTotalCount = function() {
   return 10;
}

ShoppingCart.prototype.getTotalAmount = function() {
   return 100;
}


function cartItem(sku, name, price, quantity) {
   this.sku = sku;
   this.name = name;
   this.price = price;
   this.quantity = quantity;
}
