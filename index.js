// Define the currentUser variable
const currentUser = 'John';

// Define the welcomeMessage function
function welcomeMessage(currentUser) {
  return `Welcome to Flatbook, ${currentUser}!`;
}

// Define the excitedWelcomeMessage function
function excitedWelcomeMessage(currentUser) {
  return `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
}

// Define the shortGreeting function
function shortGreeting(currentUser) {
  return `Welcome, ${currentUser.charAt(0)}!`;
}

module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };
