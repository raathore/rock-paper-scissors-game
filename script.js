
let computer = 0,
    player = 0,
    round = 0,
    tie = 0;

function computerPlay() {
  let computerResult = ["rock", "paper", "scissors"];
  return computerResult[Math.floor(Math.random()*3)];
}

function resetButton() {
  document.getElementById("results").reset();
}

const showResult = function(elementID) {
  let x = document.getElementById(elementID);
  x.classList.remove("hide");
};

const hidePlay = function(elementID) {
  let x = document.getElementById(elementID);
  x.classList.add("hide");
};

function playRound(playerSelection) {
  const roundCount = document.querySelector("#roundCount");
  const playerWins = document.querySelector("#playerWins");
  const computerWins = document.querySelector("#computerWins");
  const tied = document.querySelector("#tied");
  const text = document.querySelector("#text");

  let computerSelection = computerPlay();
  round++;
  roundCount.textContent = round;

  if(playerSelection == computerSelection) {
    tie++;
    text.textContent = "It's a tie!"
    tied.textContent = tie;
  }
  else if((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")) {
    computer++;
    text.textContent = "Oh no! "+computerSelection+" beats "+playerSelection+"!";
    computerWins.textContent = computer;
  }
  else {
    player++;
    text.textContent = "Horray! "+playerSelection+" beats "+computerSelection+"!";
    playerWins.textContent = player;
  }

  gamecheck();
}

function gamecheck() {
    if (player == 5) {
      text.textContent = "Horray! You win 5 rounds!";
      showResult("winView");
      hidePlay("start");

    }
    if (computer == 5) {
      text.textContent = "Oh no! Computer wins 5 rounds!";
      showResult("loseView");
      hidePlay("start");
    }
}
