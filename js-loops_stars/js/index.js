console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(number) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";



  //--v-- your code here --v--
  for (let index = 0; index < number; index++) {
    const image = document.createElement('img')
    image.setAttribute('src', './assets/star-filled.svg')
    image.setAttribute('data-number', index + 1)
    starContainer.append(image)
  }

  for (let index = number; index < 5; index++) {
    const image = document.createElement('img')
    image.setAttribute('src', './assets/star-empty.svg')
    image.setAttribute('data-number', index + 1)
    starContainer.append(image)
  }



  //--^-- your code here --^--
}

starContainer.addEventListener('click', event => {
  console.log(+event.target.dataset.number);
  renderStars(+event.target.dataset.number);
})

renderStars(0);
