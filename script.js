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
    case "+":
      return add(num1, num2);
    case "-":
      return subract(num1, num2);
    case "/":
      return divide(num1, num2);
    case "x":
      return multiply(num1, num2);
  }
}

// results display
let results = document.querySelector(".results");

// clear results
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("mousedown", () => {
  results.textContent = "";
  containsOperation = false;
});

// display numbers
let num = document.querySelectorAll("#number");
num.forEach((number) => {
  number.addEventListener("mousedown", () => {
    results.textContent = results.textContent + number.textContent;
  });
});

// CALCULATIONS

let containsOperation = false;
let currentOperation;

let oper = document.querySelectorAll(".operator");
oper.forEach((operator) =>
  operator.addEventListener("mousedown", () => {
    if (!containsOperation) {
      // set operation global variables
      containsOperation = true;
      currentOperation = operator;

      operator.style.opacity = 0.3;

      console.log(operator.id);
      console.log(currentOperation);
    } else {
      // undo prev operation button style when another is clicked
      currentOperation.style.opacity = 1;

      // set new operation
      currentOperation = operator;
      operator.style.opacity = 0.5;
      console.log(operator.id);
    }
    clear();
  })
);

function clear() {
  results.textContent = "";
}

function calculate(currentResults) {}

// equals button
let equals = document.querySelector(".equals");
equals.addEventListener("mousedown", () => {});
