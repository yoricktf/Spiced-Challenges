console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');


// function hideTosError() {
//   tosError.setAttribute("hidden", "");
// }

// function showTosError() {
//   tosError.removeAttribute("hidden");
// }

// function hideTosSuccess() {
//   tosSuccess.setAttribute("hidden", "");
// }

// function showTosSuccess() {
//   tosSuccess.removeAttribute("hidden");
// }

hideMessage = (messageType) => {
  messageType.setAttribute("hidden", "");
}

showMessage = (messageType) => {
  messageType.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (!data.tos) {
    // showTosError()
    showMessage(tosError)
    return
  }
  // hideTosError()
  // showTosSuccess()
  hideMessage(tosError)
  showMessage(tosSuccess)

  alert("Form submitted");
  // --^-- write your code here --^--
  // eslint-disable-next-line no-alert
});

hideMessage(tosError)
hideMessage(tosSuccess)
// hideTosError()
// hideTosSuccess()
