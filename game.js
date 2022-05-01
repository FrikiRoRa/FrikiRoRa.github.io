// NUMBER GUESSING GAME
// The computer will think of a random number between 1 and 100
// The player will have some number of tries to guess it
// If the guess is wrong, the computer will tell you if the number is higher or lower

/** Things we need to code:
  1. DONE Check if the guess is higher or lower, or correct
  2. DONE Generate a random number
  3. DONE Let the player guess numbers (accept user input)
  4. DONE Enforce the maximum number of guesses
  5. DONE Print messages to the console (it's higher, it's lower, YOU WIN)
*/
var numOfGuesses;
var guessNum = 0;
var specialNumber;
var startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", function () {
  numOfGuesses = document.getElementById("numGuesses").value;
  console.log(numOfGuesses);

  // start the game
  document.getElementById("gameArea").style.display = "block";
  guessNum = 0;
  console.log("I'm thinking of a number between 0 and 100");
  displayAlertInRandomColor("I'm thinking of a number between 0 and 100");
  //We are enabling the guess button when the player restarts the game
  guessButton.disabled = false;
  // show guess number

  document.getElementById("guessNumber").innerText = guessNum + 1;
  var randomDecimalBetweenZeroAndOne = Math.random();
  var randomDecimalBetweenZeroAndMax = randomDecimalBetweenZeroAndOne * 100;
  var randomIntegerBetweenZeroAndMax = Math.floor(
    randomDecimalBetweenZeroAndMax
  );
  specialNumber = randomIntegerBetweenZeroAndMax;
});

guessButton.addEventListener("click", function () {
  const guess = document.getElementById("guess").value;
  console.log("guess:", guess);

  if (specialNumber < guess) {
    console.log("it is lower than that!");
    displayAlertInRandomColor("it is lower than that!");
  }
  if (specialNumber > guess) {
    console.log("it is higher than that!");
    displayAlertInRandomColor("it is higher than that!");
  }
  if (specialNumber == guess) {
    console.log("you win!!!");
    displayAlertInRandomColor("you win!!!");
    guessButton.disabled = true;
  }

  guessNum++;
  // show guess number
  document.getElementById("guessNumber").innerText = guessNum + 1;
  if (guessNum >= numOfGuesses) {
    guessButton.disabled = true;
    displayAlertInRandomColor("YOU LOSE");
  }
});

function displayAlertInRandomColor(msg) {
  const colorOptions = ["red", "orange", "green", "blue", "indigo", "violet"];
  var randomDecimalBetweenZeroAndOne = Math.random();
  var randomDecimalBetweenZeroAndMax =
    randomDecimalBetweenZeroAndOne * colorOptions.length;
  var randomIntegerBetweenZeroAndMax = Math.floor(
    randomDecimalBetweenZeroAndMax
  );

  var color = colorOptions[randomIntegerBetweenZeroAndMax];
  var alertArea = document.getElementById("alertArea");
  alertArea.style.color = color;
  alertArea.innerText = msg;
}
