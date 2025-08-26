function startGame() {
  // اختيار رقم عشوائي بين 1 و 50
  let secretNumber = Math.floor(Math.random() * 50) + 1;
  let attempts = 0;
  let guess;

  while (true) {
    guess = parseInt(prompt("Enter a number between 1 and 50:"));
    attempts++;

    if (guess === secretNumber) {
      alert("Correct! You found the number " + secretNumber + " in " + attempts + " attempts!");
      break;
    } else if (guess > secretNumber) {
      alert("Too high! Try again.");
    } else if (guess < secretNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Please enter a valid number.");
    }
  }
}