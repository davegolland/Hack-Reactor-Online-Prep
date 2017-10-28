/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    var wordLengths = [];
    for (var i = 0; i < arr.length; i++) {
      wordLengths.push(arr[i].length);
    }
    return wordLengths.sort()[0];
  }
}
