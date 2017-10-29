/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  var string = num.toString();
  if (num === 0) {
    return 0} else if (num > 0) {
      var sum = 0;
      for (var i = 0; i < string.length; i++) {
        sum = sum + parseInt(string[i]);
      }
      return sum;
    } else if (num < 0) {
      var sum = parseInt(string[1]) * -1;
      for (var j = 2; j < string.length; j++) {
        sum = sum + parseInt(string[j]);
      }
      return sum;
    }
}
