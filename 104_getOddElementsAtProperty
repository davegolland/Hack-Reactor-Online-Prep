function getOddElementsAtProperty(obj, key) {
  var arr = obj[key];
  var arrayOfOdds = [];
  if (!Object.keys(obj).includes(key) || !Array.isArray(arr) || arr.length === 0) {
    return [];
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i]/2)) {
        arrayOfOdds.push(arr[i])
      }
    }
  return arrayOfOdds;
  }  
}
