console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);



// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector('body')

const parentArticle = document.createElement('article')
parentArticle.classList.add('post')
body.append(parentArticle)

const p = document.createElement('p')
p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
p.classList.add('post__content')
parentArticle.append(p)

const footer = document.createElement('footer')
footer.classList.add('post__footer')
parentArticle.append(footer)

const span = document.createElement('span')
span.textContent = '@username'
span.classList.add('post__username')
footer.append(span)

const button = document.createElement('button')
button.classList.add('post__button')
button.textContent = "♥ Like"
button.setAttribute('data-js', 'like-button')
button.addEventListener('click', handleLikeButtonClick)
footer.append(button)


// const body = document.querySelector('body')
// const parentArticle = document.createElement('article')
// const postHTML = `
// <p class="post__content">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//       </p >
//   <footer class="post__footer">
//     <span class="post__username">@username</span>
//     <button type="button" class="post__button" data-js="like-button">
//       ♥ Like
//     </button>
//   </footer>`
// parentArticle.innerHTML = postHTML
// parentArticle.classList.add('post')
// body.append(parentArticle)

// const likeButton = document.querySelectorAll('[data-js="like-button"]');

// likeButton.forEach(button => {
//   console.log('first')
//   button.addEventListener("click", handleLikeButtonClick);
// });
