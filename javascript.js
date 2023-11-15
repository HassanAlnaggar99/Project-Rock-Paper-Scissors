let playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");

const handleButton = (e) => {
  let roundResult;
  switch(e.srcElement.id) {
    case "btn-rock":
      roundResult = playRound("Rock", getComputerChoice());
      break;
    case "btn-paper":
      roundResult = playRound("Paper", getComputerChoice());
      break;
    case "btn-scissors":
      roundResult = playRound("Scissors", getComputerChoice());
  }

  if (roundResult.startsWith("You Lose")) {
    computerScore++;
  } else if (roundResult.startsWith("Tie")) {

  } else if (roundResult.startsWith("You Win")) {
    playerScore++;
  }

  const results = document.querySelector("#results");
  results.innerHTML = `${roundResult}<br>
  Player score: ${playerScore}<br>
  Computer score: ${computerScore}<br>`;

  if (playerScore === 5 || computerScore === 5) {
    const container = document.querySelector("#container");
    const h = document.createElement("h1");

    if (playerScore > computerScore) {
      h.textContent = "Congratulations! you won.";
    } else {  // if playerScore < computerScore
      h.textContent = "GAME OVER! you lost.";
    }

    container.appendChild(h);

    buttons.forEach((button) => {
      button.removeEventListener('click', handleButton);
    });
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', handleButton);
});

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "Rock";
  } else if (num === 1) {
    return "Paper";
  } else if (num === 2) {
    return "Scissors";
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  let playerWon = 0;

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      playerWon = -1;
    } else if (computerSelection === 'Rock') {
      playerWon = 0;
    } else if (computerSelection === 'Scissors') {
      playerWon = 1;
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      playerWon = 1;
    } else if (computerSelection === 'Paper') {
      playerWon = 0;
    } else if (computerSelection === 'Scissors') {
      playerWon = -1;
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      playerWon = -1;
    } else if (computerSelection === 'Paper') {
      playerWon = 1;
    } else if (computerSelection === 'Scissors') {
      playerWon = 0;
    }
  }

  // console.log(playerWon);
  // console.log(playerSelection);
  // console.log(computerSelection);

  if (playerWon === -1) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerWon === 0) {
    return `Tie!`;
  } else if (playerWon === 1) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  let playerScore = 0, computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    let playerInput = prompt("Choose Rock, Paper or Scissors: ");
    let roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    alert(roundResult);
    if (roundResult.startsWith("You Lose")) {
      computerScore++;
    } else if (roundResult.startsWith("Tie")) {

    } else if (roundResult.startsWith("You Win")) {
      playerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! you won.");
    alert("Congratulations! you won.");
  } else if (playerScore === computerScore) {
    console.log("Tie! you got the same score as the computer.");
    alert("Tie! you got the same score as the computer.");
  } else {  // if playerScore < computerScore
    console.log("GAME OVER! you lost.");
    alert("GAME OVER! you lost.");
  }
}

// game();
