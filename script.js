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
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "div":
      return Math.round((num1 / num2) * 100000) / 100000;
    case "mult":
      return multiply(num1, num2);
  }
}

// results display
let results = document.querySelector(".results");

// clear results
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("mousedown", () => {
  clearDisplay();
  num1 = undefined;
  num2 = undefined;
  answer = undefined;
  containsOperation = false;
  containsNum = false;
  operElement.style.opacity = 1;
});

// display numbers
let num = document.querySelectorAll("#number");
num.forEach((number) => {
  number.addEventListener("mousedown", () => {
    results.textContent = results.textContent + number.textContent;
    containsNum = true;

    if (containsOperation && containsNum) {
      num2 = results.textContent;
      answer = true;
      containsOperation = false;
      operElement.style.opacity = 1;
    }
  });
});

// CALCULATIONS
let num1, num2, operElement, currentOper;
let answer = false;
let containsOperation = false;
let containsNum = false;

let oper = document.querySelectorAll(".operator");
oper.forEach((operator) =>
  operator.addEventListener("mousedown", () => {
    if (!containsOperation) {
      if (answer) {
        solve();
        num1 = getNum();
        containsOperation = true;
        operElement = operator;
        currentOper = operator.id;
        operator.style.opacity = 0.3;
        clearDisplay();
      } else {
        operator.style.opacity = 0.3;

        // set operation global variables
        num1 = getNum();
        clearDisplay();
        containsOperation = true;
        containsNum = false;
        operElement = operator;
        currentOper = operator.id;
      }
    } else {
      // change prev operation
      operElement.style.opacity = 1;

      // set new operation
      operator.style.opacity = 0.3;
      operElement = operator;
      currentOper = operator.id;
    }
  })
);

function newOperation(operator) {
  // undo prev operation button style when another is clicked
  operElement.style.opacity = 1;

  // set new operation
  operElement = operator;
  operator.style.opacity = 0.5;
}

function clearDisplay() {
  results.textContent = "";
}

function getNum() {
  return results.textContent;
}

function calculate() {}

function solve() {
  containsOperation = false;
  answer = false;
  operElement.style.opacity = 1;
  results.textContent = operate(num1, num2, currentOper);
}

// equals button
let equals = document.querySelector(".equals");
equals.addEventListener("mousedown", () => {
  solve();
});

// delete button
let del = document.querySelector("#del");
del.addEventListener("mousedown", () => {
  let length = results.textContent.length;
  results.textContent = results.textContent.substring(0, length - 1);
});

// ngeation button
let negate = document.querySelector("#negate");
negate.addEventListener("mousedown", () => {
  results.textContent = multiply(Number(results.textContent), -1);
});
