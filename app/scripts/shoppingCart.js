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
