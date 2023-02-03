console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  const firstNumber = parseInt(data.numberA)
  const secondNumber = parseInt(data.numberB)

  console.log(data);

  if (data.operator === 'addition') {
    result = add(firstNumber, secondNumber)
  } else if (data.operator === 'subtraction') {
    result = subtract(firstNumber, secondNumber)
  } else if (data.operator === 'multiplication') {
    result = multiply(firstNumber, secondNumber)
  } else {
    result = divide(firstNumber, secondNumber)
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
