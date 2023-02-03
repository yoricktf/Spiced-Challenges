console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)
  console.log(data);

  const age = Number.parseInt(data.age)
  const badness = Number.parseInt(data.badness)
  const ageBadnessSum = age + badness

  console.log(ageBadnessSum);

})
