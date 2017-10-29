/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  var arrOfNumbers = arr.filter(function (element) {
    if (typeof element === 'number') {
      return element;
    }
  });
  if (arrOfNumbers.length === 0) {
    return 0;
  } else {
    var currentSmallest = arrOfNumbers[0];
    for (var i = 0; i < arrOfNumbers.length; i++) {
      if (arrOfNumbers[i] < currentSmallest) {
        currentSmallest = arrOfNumbers[i];
      }
    }
    return currentSmallest;
  }
}
