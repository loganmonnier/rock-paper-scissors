
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const displayResults = document.createElement('p');

const div = document.querySelector('div')

let playerSelection = '';
let wins = 0
let losses = 0

div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);
div.appendChild(displayResults);
displayResults.textContent = 'Wins:' + wins + '  ' + 'Losses:' + losses;

function getComputerChoice() {
  const randomNumber = (Math.random() * 100)

  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber <=66) {
    return "paper";
  } else {
    return "scissors";
  }
  
}

function playRound() { 

  const computerChoice = getComputerChoice()
  
  if (playerSelection === computerChoice) {
    console.log('It\'s a tie');
  } else if (playerSelection === "rock" && computerChoice === "scissors") {
    wins++;
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    losses++;
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    wins++;
  } else if (playerSelection === "scissors" && computerChoice === "rock") {
    losses++;
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    wins++;
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    losses++;
  }
  
}


rockButton.addEventListener('click', () => {
  playerSelection = 'rock';
  const computerChoice = getComputerChoice();

  playRound(computerChoice, playerSelection);
  displayResults.textContent = 'Wins:' + wins;
  displayResults.textContent += '\nLosses: ' + losses;
})

paperButton.addEventListener('click', () => {
  playerSelection = 'paper';
  const computerChoice = getComputerChoice();
  
  playRound(computerChoice, playerSelection);
  displayResults.textContent = 'Wins:' + wins;
  displayResults.textContent += '\nLosses: ' + losses;
})

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerChoice = getComputerChoice();
  
    playRound(computerChoice, playerSelection);
    displayResults.textContent = 'Wins:' + wins;
    displayResults.textContent += '\nLosses: ' + losses;
})

