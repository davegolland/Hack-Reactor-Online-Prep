/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {
  var currentSmallest = 0 || arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < currentSmallest) {
      currentSmallest = arr[i];
    }
  }
  return currentSmallest;
}