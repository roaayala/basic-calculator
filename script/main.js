// math operator
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// operation
const operate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return add(numberOne, numberTwo);
    case '-':
      return subtract(numberOne, numberTwo);
    case '*':
      return multiply(numberOne, numberTwo);
    case '/':
      return divide(numberOne, numberTwo);
  }
};

let firstNumber = 4;
let secondNumber = 2;
let operator = '/';

console.log(operate(firstNumber, secondNumber, operator));
