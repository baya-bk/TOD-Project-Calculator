function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return num1 / num2;
}

// Variables to hold the parts of the operation
let firstNumber = ""; // This will hold the first number as a string
let operator = null; // This will hold the operator (+, -, *, /)
let secondNumber = ""; // This will hold the second number as a string

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error: Invalid operator";
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      display.innerText = "0";
      firstNumber = "";
      operator = null;
      secondNumber = "";
    } else if (value === "=") {
      if (firstNumber !== "" && operator !== null && secondNumber !== "") {
        const result = operate(
          parseFloat(firstNumber),
          operator,
          parseFloat(secondNumber)
        );
        display.innerText = result; // Show result on display
        firstNumber = result; // Reset for new calculation
        operator = null;
        secondNumber = "";
      }
    } else {
      if (value >= "0" && value <= "9") {
        // Check if value is a number
        if (operator === null) {
          firstNumber += value; // Append digit to first number
          display.innerText = firstNumber; // Update display with full number
        } else {
          secondNumber += value; // Append digit to second number
          display.innerText = secondNumber; // Update display with full number
        }
      } else {
        // If value is an operator
        if (firstNumber !== "") {
          // Only set operator if first number is entered
          operator = value; // Store operator
          display.innerText = operator; // Optionally show operator or keep showing first number
        }
      }
    }
  });
});
