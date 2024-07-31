let num1;
let num2;
let operator;

function add(num1, num2) {
  return num1 + num2;
}

function subract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subract(num1, num2);
    case "/":
      return divide(num1, num2);
    case "*":
      return multiply(num1, num2);
  }
}
