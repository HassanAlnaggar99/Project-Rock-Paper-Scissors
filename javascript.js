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

  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    playerWon = -1;
  } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    playerWon = 0;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWon = 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWon = 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    playerWon = 0;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    playerWon = -1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    playerWon = -1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWon = 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
    playerWon = 0;
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

  for (let i = 0; i < 5; i++) {
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

game();
