//global variables
const choices = ["rock", "paper", "scissors"];

//get computer input-choice
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//Play round function

function playRound(playerSelection, computerSelection) {
  playerSelection = "rock";
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    console.log("It is a Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    console.log("You Win");
  } else {
    console.log("Computer won!");
  }
}

//Play 5 rounds of the game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
