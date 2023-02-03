console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener('input', event => {
  input.value = input.value.toUpperCase()
})
