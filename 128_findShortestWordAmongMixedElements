/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  var arrOfStrings = arr.filter(function (element) {
    if (typeof element === 'string') {
      return element;
    }
  });
  if (arrOfStrings.length === 0) {
    return '';
  } else {
    var currentShortest = arrOfStrings[0];
    for (var i = 0; i < arrOfStrings.length; i++) {
      if (arrOfStrings[i].length < currentShortest.length) {
        currentShortest = arrOfStrings[i];
      }
    }
    return currentShortest;
  }
}
