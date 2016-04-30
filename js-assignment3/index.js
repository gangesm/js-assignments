
------------- average of integer array-----------

function averageOfarray(array) {
  var sum, lengthofarray, result;
  sum = 0;
  lengthofarray = array.length;
  for (var i = 0; i < lengthofarray; i++) {
    sum = sum+array[i];
    result = parseInt(sum/lengthofarray);
  }
  console.log("result", result);
}