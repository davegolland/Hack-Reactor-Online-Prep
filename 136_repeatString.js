/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  var base = '';
  for (var i = 0; i < num; i++) {
    base = base.concat(string)
  }
  return base;
}
