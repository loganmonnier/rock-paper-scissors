
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
  const playerSelection = prompt("What is your selection?").toLowerCase()
  
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

function game(playerSelection, computerChoice) {
    let wins = 0;
    let losses = 0;

    let result1 = playRound(playerSelection,computerChoice);
    console.log(result1);
      if (result1.includes("win")){
      wins++;
    } else if (result1.includes("lose")) {
      losses++;
    };

    let result2 = playRound(playerSelection,computerChoice);
    console.log(result2);
    if (result2.includes("win")){
      wins++;
    } else if (result2.includes("lose")) {
      losses++;
    };

    let result3 = playRound(playerSelection,computerChoice);
    console.log(result3);
    if (result3.includes("win")){
      wins++;
    } else if (result3.includes("lose")) {
      losses++;
    };

    let result4 = playRound(playerSelection,computerChoice);
    console.log(result4);
    if (result4.includes("win")){
      wins++;
    } else if (result4.includes("lose")) {
      losses++;
    };

    let result5 = playRound(playerSelection,computerChoice);
    console.log(result5);
    if (result5.includes("win")){
      wins++;
    } else if (result5.includes("lose")) {
      losses++;
    };
    
    function determineWinner() {
      if (wins >= 3){
      return "You win! You won a majority of the rounds played.";
    } else if (losses >= 3){
      return "You lose! You lost a majority of the rounds played."
    }
    } 

    return determineWinner()
    
}


console.log(game())


