// basic math functions
function add(num1, num2) {
  return num1 + num2;
}

function subract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return Math.round((num1 / num2) * 100000) / 100000;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "sub":
      return subract(num1, num2);
    case "div":
      return divide(num1, num2);
    case "mult":
      return multiply(num1, num2);
  }
}

// results display
let results = document.querySelector(".results");

// clear results
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("mousedown", () => {
  containsOperation = false;
  containsNum = false;
  operElement.style.opacity = 1;
  clearDisplay();
});

// display numbers
let num = document.querySelectorAll("#number");
num.forEach((number) => {
  number.addEventListener("mousedown", () => {
    results.textContent = results.textContent + number.textContent;
    containsNum = true;

    if (containsOperation && containsNum) {
      num2 = results.textContent;
      console.log(num1 + "operate" + num2);
    }
  });
});

// CALCULATIONS
let num1, num2;
let containsOperation = false;
let containsNum = false;
let operElement, currentOper;

let oper = document.querySelectorAll(".operator");
oper.forEach((operator) =>
  operator.addEventListener("mousedown", () => {
    if (!containsOperation || containsNum) {
      operator.style.opacity = 0.3;

      // set operation global variables
      num1 = getNum();
      clearDisplay();
      containsOperation = true;
      operElement = operator;
      currentOper = operator.id;

      // console.log(operator.id);
      console.log(operElement);
      console.log(currentOper);
      // console.log("Num1 = " + num1);
    } else {
      newOperation(operator);
    }
  })
);

function newOperation(operator) {
  // undo prev operation button style when another is clicked
  operElement.style.opacity = 1;

  // set new operation
  operElement = operator;
  operator.style.opacity = 0.5;
  console.log("Current Operation = " + operator.id);
}

function clearDisplay() {
  results.textContent = "";
}

function getNum() {
  return results.textContent;
}

function calculate() {}

// equals button
let equals = document.querySelector(".equals");
equals.addEventListener("mousedown", () => {
  console.log(num1 + currentOper + num2);
  containsOperation = false;
  operElement.style.opacity = 1;
  results.textContent = operate(num1, num2, currentOper);
});
