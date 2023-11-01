
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

const computerChoice = getComputerChoice()

const playerSelection = prompt("What is your selection?").toLowerCase()

function playRound(playerSelection, computerChoice) { 
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

console.log(playRound(playerSelection, computerChoice))


//if the two values are equal, print "It's a tie!"
//if the player's value is rock and the computers is scissors, print "You won! Rock beats scissors."
//if the player's value is rock and the computers is paper, print "You lose! Paper beats rock."
//if the player's value is scissors and the computer's is paper, print "You won! Scissors beats paper."
//if the player's value is scissors and the computer's is rock, print "You lose! Rock beats scissors."
//if the player's value is paper and the computer's is rock, print "You win! Paper beats rock."
//if the player's value is paper and the computer's is scissors, print "You lose! Scissors beats paper. "
