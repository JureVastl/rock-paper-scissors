//global variables
const choices = ["rock", "paper", "scissors"];

//get computer input-choice
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//get player input-choice
function playerPlay() {
  let input = prompt("Type in Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type in Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Error! Please type only one of the following: Rock, Paper or Scissors"
    );
    while (input == null) {
      input = prompt("Type in Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

//validate the input of the player
function validateInput(choice) {
  return choices.includes(choice);
}

//Play round function
function playRound(playerSelection, computerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    console.log("Both chose " + playerSelection + "\nIt is a Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    console.log(
      "Player chose " +
        playerSelection +
        "\nComputer chose " +
        computerSelection +
        "\nYou Win!"
    );
  } else {
    console.log(
      "Player chose " +
        playerSelection +
        "\nComputer chose " +
        computerSelection +
        "\nComputer Wins!"
    );
  }
}

//Play 5 rounds of the game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
