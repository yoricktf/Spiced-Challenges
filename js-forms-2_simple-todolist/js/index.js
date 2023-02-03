console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');



form.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)
  console.log(data);
  showEntries(data)
  form.reset()
  headline.focus()
})

const showEntries = DataFromForm => {

  const listItem = document.createElement('li')

  const headline = document.createElement('h2')
  headline.textContent = DataFromForm.headline

  const paragraph = document.createElement('p')
  paragraph.textContent = DataFromForm.task

  todoList.append(listItem)
  listItem.append(headline)
  listItem.append(paragraph)
}
