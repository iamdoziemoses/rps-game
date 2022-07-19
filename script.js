function getComputerChoice() {
  let choice = ['Rock', 'Scissors', 'Scissors'];

  const computerChoice = choice[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {  
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;
  } else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    score = 1
  } else {
    score = -1
  }

  return score;
  
}


function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result');

  switch(score){
    case -1:
      result.innerText = `You lose`;
      break;
    case 0:
    result.innerText = `It's a draw`;
    break;
    case 1:
      result.innerText = `You Win`;
      break;
  }

  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');

  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton');

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  rpsButtons.forEach(rpsbtn => {
    rpsbtn.onclick = () => onClickRPS(rpsbtn);
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGame = document.getElementById('endGameButton');
  endGame.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const result = document.getElementById('result');

  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}

playGame();