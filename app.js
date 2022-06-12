//In the app.js require the calculator module. Using ES6 Object destructuring, declare add, subtract, multiply, divide and assign them the properties of the calculator module.

const {add, subtract, multiply, divide} = require('./modules/calculator');

console.log('Add: ' + add(2,3));

console.log('Subtract: ' + subtract(6,3));

console.log('Multiply: ' + multiply(4,3));

console.log('Divide: ' + divide(10,2));

//QED