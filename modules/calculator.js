
function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }


  //In the modules/calculator.js, export an object whose properties are the functions add, subtract, multiply, divide using ES6 Object initialize shorthand.

  module.exports = {add, subtract, multiply, divide};
  