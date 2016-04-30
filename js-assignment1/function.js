
------------ addition formula ---------------

function addition(number1, number2, number3){
  var result;
  console.log("number1", number1);
  console.log("number2", number2);
  console.log("number3", number3);
  console.log("result before addition is", result);
  result = number1 + number2;
  console.log("result after addition is", result);
  return result;
}

-------------------- Area of rectangle ----------------

function areaOfreatangle(length, weight) {
  var result;
  console.log("length", length);
  console.log("weight", weight);
  result = length * weight;
  console.log("areaOfreatangle", result);
}

---------------- subtration -------------

function subtration(number1, number2) {
  var result;
  console.log("number1", number1);
  console.log("number2", number2);
  result = number1 - number2;
  console.log("result after subtration", result);
  return result;
}

---------------- using array show pecentage -------------

function percentage(array) {
  var result, sum, lengthofarray, totalsubject;
  lengthofarray = array.length;
  sum = 0;
  total=100;
  for(i=0; i<lengthofarray; i++) {
    sum = sum + array[i];
    console.log("sum", sum);
    totalsubject = lengthofarray*total;
    console.log("totalsubject", totalsubject);

    result = (sum/totalsubject)*100;

  }
  console.log("result", result);
}


-------------------- find largest number ------

function findLaregest(number1, number2) {
  if (number1 > number2) {
    console.log("number1 is largest number, number1");
  }
  else {
    console.log("number2 is largest number", number2);
  }
}