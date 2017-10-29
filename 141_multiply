/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  var product = 0;
  for (var i = 1; i <= Math.abs(num2); i++) {
    product = product + Math.abs(num1);
  }
  if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 <0)) {
    return product;
  } else {return -product;}
}
