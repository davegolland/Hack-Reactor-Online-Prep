function getSquaredElementsAtProperty(obj, key) {
  var arr = obj[key];
  var arrayOfSquares = [];
  if (!Object.keys(obj).includes(key) || !Array.isArray(arr) || arr.length === 0) {
    return [];
  } else {
    for (var i = 0; i < arr.length; i++) {
      arrayOfSquares.push(arr[i] * arr[i])
    }
  return arrayOfSquares;
  }  
}
