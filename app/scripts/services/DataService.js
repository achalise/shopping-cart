'use strict';

storeApp.factory("DataService", function() {
   var myStore = new store();
   return {store: myStore};
});
