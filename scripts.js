
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const displayResults = document.createElement('p');

const div = document.querySelector(div)

div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);
div.appendChild(displayResults);


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
    return "It is a tie!";
  } else if (playerSelection === "rock" && computerChoice === "scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    return "You win! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerChoice === "rock") {
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    return "You lose! Scissors beats paper.";
  }
  
}

let playerSelection = '';

rockButton.addEventListener('click', () => {
  playerSelection = 'rock';
  const computerChoice = getComputerChoice();

  playRound(computerChoice, playerSelection);
})

paperButton.addEventListener('click', () => {
  playerSelection = 'paper';
  const computerChoice = getComputerChoice();
  
  playRound(computerChoice, playerSelection);
})

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerChoice = getComputerChoice();
  
    playRound(computerChoice, playerSelection);
})



console.log(game())


