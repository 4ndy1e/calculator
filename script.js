// basic math functions
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

let containsOperation = false;

let oper = document.querySelectorAll(".operator");
oper.forEach((operator) =>
  operator.addEventListener("mousedown", () => {
    if (!containsOperation) {
      results.textContent = results.textContent + operator.textContent;
      containsOperation = true;
    } else {
      console.log("calcuate it");
      let prevCalc = calculate(results.textContent);
      results.textContent = prevCalc + operator.textContent;
    }
  })
);

function calculate(currentResults) {
  let currentMath = currentResults.split(/([+\-x/])/);
  currentMath = currentMath.map((value) => {
    return isNaN(value) ? value : Number(value);
    // Only convert if it's a number
  });
  console.log(currentMath);

  console.log(operate(currentMath[0], currentMath[2], currentMath[1]));
  return operate(currentMath[0], currentMath[2], currentMath[1]);
}
