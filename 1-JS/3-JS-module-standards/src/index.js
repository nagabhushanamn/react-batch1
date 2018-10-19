

console.log('-index.js-');

//-----------------------------------------------------------

// var myApp = myApp || {};
// // pack1/mod1.js
// myApp.mod1.doWork();

//-----------------------------------------------------------


var greet = require('cts-oct-greet')  // common-js-module-standard
greet.greet('en')
greet.greet('tn')
greet.greet()

//-----------------------------------------------------------

import primaryItem, { item1, item2 } from './hotel/menu'   // es module

console.log(primaryItem);
console.log(item1.name);
console.log(item1.price);

console.log(item2.name);
console.log(item2.price);

import * as items from './hotel/menu'   // es module
console.log(items.item1.name);
console.log(items.item1.price);

console.log(items.item2.name);
console.log(items.item2.price);


import { item1 as favItem } from './hotel/menu'   // es module
console.log(favItem.name);
console.log(favItem.price);


