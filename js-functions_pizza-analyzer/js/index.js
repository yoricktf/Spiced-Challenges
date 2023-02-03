console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value
  let pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza1, pizzaSize1)
  updateOutputColor(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value
  let pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza2, pizzaSize2)
  updateOutputColor(pizzaSize1, pizzaSize2)
});

// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  piArea = (diameter) => {
    let radius = diameter / 2
    return area = Math.PI * radius * radius
  }
  let pizza1 = piArea(diameter1)
  let pizza2 = piArea(diameter2)

  const pizzaGain = (pizza2 - pizza1) / pizza1 * 100

  output.textContent = Math.round(pizzaGain)
}



// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  pizzaElement.style.width = (newSize / 24 * 100) + 'px'
}

// Task 3
// console.log(outputSection.children[1].textContent);

function updateOutputColor(size1, size2) {
  // write your code here
  size1 > size2 ? outputSection.style.backgroundColor = 'var(--red)' : outputSection.style.backgroundColor = 'var(--green)'

}
