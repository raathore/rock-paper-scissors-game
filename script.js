let computerWins = 0,
    playerWins = 0;
    round=5;

function computerPlay() {
  let computerResult = ["rock", "paper", "scissors"];
  return computerResult[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  do {
    playerSelection = window.prompt("Enter one of the following: rock, paper, scissors.").toLowerCase();
  }
  while (playerSelection != "paper" && playerSelection != "rock" && playerSelection != "scissors" || playerSelection == "");

  if(playerSelection == computerSelection) {
    console.log("You : " + playerSelection + "\nComputer : " + computerSelection + "\nResult : Tie!");
  }
  else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
    console.log("You : " + playerSelection + "\nComputer : " + computerSelection + "\nResult : Lose!");
    computerWins++;
  }
  else {
    console.log("You : " + playerSelection + "\nComputer : " + computerSelection + "\nResult : Win!");
    playerWins++;
  }
}

function game() {
  for(let i = 0; i < 5; ++i) {
    console.log("\nRound : "+(i+1));
    playRound();
  }
    if (playerWins > computerWins) {
      console.log("\nYOU WIN THIS GAME!");
    }
    else if (playerWins < computerWins) {
      console.log("\nYOU LOSE THIS GAME!");
    }
    else {
      console.log("\nGAME IS TIED!");
    }
  console.log("Player: " + playerWins + "\n" + "Computer: " + computerWins + "\nTied: " + (5-playerWins-computerWins));
  alert("Player: " + playerWins + "\n" + "Computer: " + computerWins + "\nTied: " + (5-playerWins-computerWins));
}
