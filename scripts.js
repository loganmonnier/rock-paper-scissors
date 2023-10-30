
//the computer makes a random choice

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
console.log(computerChoice)
//the choices are between rock, paper, and scissors

//rock beats scissors
//paper beats rock
//scissors beats paper

//real player types a selection into the console (rock, paper, or scissors)
//compare the value of the computer choice and the value of the player input
//if the two values are equal, print "It's a tie!"
//if the player's value is rock and the computers is scissors, print "You won! Rock beats scissors."
//if the player's value is rock and the computers is paper, print "You lose! Paper beats rock."
//if the player's value is scissors and the computer's is paper, print "You won! Scissors beats paper."
//if the player's value is scissors and the computer's is rock, print "You lose! Rock beats scissors."
//if the player's value is paper and the computer's is rock, print "You win! Paper beats rock."
//if the player's value is paper and the computer's is scissors, print "You lose! Scissors beats paper. "
