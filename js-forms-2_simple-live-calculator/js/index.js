console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');




let firstNumber = Number.parseInt(firstInput.value)
let secondNumber = Number.parseInt(secondInput.value)

const multiply = (a, b) => {
  return a * b
}

firstInput.addEventListener('input', event => {
  firstNumber = Number.parseInt(firstInput.value)
  result.textContent = multiply(firstNumber, secondNumber)
})

secondInput.addEventListener('input', event => {
  secondNumber = Number.parseInt(secondInput.value)
  result.textContent = multiply(firstNumber, secondNumber)
})
