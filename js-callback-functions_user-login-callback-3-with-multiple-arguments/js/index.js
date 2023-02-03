console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
// 1.
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now ${userName}!You are logged in now as ${userRole}.`)
}

handleUserLogin(showWelcomeMessage)

// 2.
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now ${userName}!You are logged in now as ${userRole}.`)
})
