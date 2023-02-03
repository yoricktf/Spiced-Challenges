console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// const darkButton = document.querySelector('[data-js="dark-mode-button"]')
// const lightButton = document.querySelector('[data-js="light-mode-button"]')
// const toggleButton = document.querySelector('[data-js="toggle-button"]')


// darkButton.addEventListener('click', () => {
//   bodyElement.classList.add('dark')
// })

// lightButton.addEventListener('click', () => {
//   bodyElement.classList.remove('dark')
// })

// toggleButton.addEventListener('click', () => {
//   bodyElement.classList.toggle('dark')
// })

// ----------------------
//tried to put all functionality into one function but needed to edit the HTML to do so.
// ----------------------

const allButtons = document.querySelectorAll('.button')
darkMode = () => {
  if (event.target.classList.value == 'button button--dark') {
    bodyElement.classList.add('dark')
  } else if (event.target.classList.value == 'button button--light') {
    bodyElement.classList.remove('dark')
  } else {
    bodyElement.classList.toggle('dark')
  }
}
