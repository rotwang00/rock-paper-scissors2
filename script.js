let playerChoice = "";
let computerChoice = "";
let choices = ["Rock", "Paper", "Scissors"];
let result = "";
let playerWins = 0;
let computerWins = 0;
let ties = 0;

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");

let playerChoiceDisplay = document.getElementById("player-choice-display");
let computerChoiceDisplay = document.getElementById("computer-choice-display");
let resultDisplay = document.getElementById("result-display");

let playerWinsDisplay = document.getElementById("player-wins-display");
let computerWinsDisplay = document.getElementById("computer-wins-display");
let tiesDisplay = document.getElementById("ties-display");

rockButton.addEventListener("click", () => {
  //console.log("rock");
  playerChoice = "Rock";
  processTurn(playerChoice);
});
paperButton.addEventListener("click", () => {
  playerChoice = "Paper";
  processTurn(playerChoice);
});
scissorsButton.addEventListener("click", () => {
  playerChoice = "Scissors";
  processTurn(playerChoice);
});

function computerTurn() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function processTurn(playerChoce) {
  computerChoir = computerTurn();
  playerChoiceDisplay.innerHTML = `Player choice: ${playerChoce}`;
  computerChoiceDisplay.innerHTML = `Computer choice: ${computerChoice}`;
  determineWinner(playerChoce, computerChoice);
  resultDisplay.innerHTML = result;
}

function determineWinner(playerChoice, computerChoice) {
  let p = playerChoice;
  let c = computerChoice;
  if (
    (p == "Rock" && c == "Scissors") ||
    (p == "Scissors" && c == "Paper") ||
    (p == "Paper" && c == "Rock")
  ) {
    result = "Player wins!";
    playerWins++;
    playerWinsDisplay.innerHTML = `Player wins: ${playerWins}`;
  } else if (p == c) {
    result = "It's a tie!";
    ties++;
    tiesDisplay.innerHTML = `Ties: ${ties}`;
  } else {
    result = "Computer wins!";
    computerWins++;
    computerWinsDisplay.innerHTML = `Computer wins: ${computerWins}`;
  }
}
