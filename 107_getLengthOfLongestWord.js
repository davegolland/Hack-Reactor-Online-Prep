function getLengthOfLongestElement(arr) {
  var wordLengths = arr.map(function (item) {
    return item.length;
  });
  if (arr.length === 0) {
    return 0;
  } else {
  return wordLengths.sort()[wordLengths.length-1];  
  }
}
