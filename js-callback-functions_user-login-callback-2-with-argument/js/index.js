console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
// 1.
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}
handleUserLogin(showWelcomeMessage)

// 2.
handleUserLogin(userName => {
  console.log(`Welcome ${userName}! You are logged in now.`)
})
