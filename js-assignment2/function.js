Calculator to Add, Subtract, Multiply or Divide    Usingswitch...case

function calculator(number1, number2, action) {
  var result;
  switch (action){
    case 'addition':
    result = number1 + number2;
    break;

    case 'subtract':
    result = number1 - number2;
    break;

    case 'multiply':
    result = number1 * number2;
    break;

    case 'divide':
    result = number1 / number2;
    break;

    default:
      console.log("invalid value");
  }
  console.log("result", result);
}

------------------ table multiplication ----------------

function multiplication(number) {
  for (var i = 1; i <= 10; i++) {
    result = number*i;
      console.log("result", result);
  }
}
