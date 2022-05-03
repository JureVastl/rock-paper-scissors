//global variables
const choices = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const computerSelection = computerPlay();

//get computer input-choice
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];