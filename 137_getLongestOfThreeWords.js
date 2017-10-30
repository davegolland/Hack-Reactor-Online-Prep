/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  var currentLongest = word1;
  if (word2.length > currentLongest.length) {
    currentLongest = word2;
  }
  if (word3.length > currentLongest.length) {
    currentLongest = word3;
  }
  return currentLongest;
}
