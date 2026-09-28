console.log("Hello World");

//take in user input of a number
//output random number from 1 to that number
function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}
function getComputerChoice() {
  let compChoice = getRandomNumber(3);
  switch (compChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Scissor";
    case 3:
      return "Paper";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choices for rock paper scissor");
  if (choice.toLowerCase() === "scissor") {
    return "Scissor";
  } else if (choice.toLowerCase() === "rock") {
    return "Rock";
  } else if (choice.toLowerCase() === "paper") {
    return "Paper";
  }
}
function playGame() {
  let humanScore = 0;
  var computerScore = 0;
  let humanSelection = getHumanChoice();
  let compSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    console.log(`Computer Chose: ${computerChoice}`);
    console.log(`You chose ${humanChoice}`);
    let humanWon = false;
    let tie = false;
    if (humanChoice === "Scissor") {
      switch (computerChoice) {
        case "Rock":
          humanWon = false;
          break;
        case "Scissor":
          humanWon = false;
          tie = true;
          break;
        case "Paper":
          humanWon = true;
          break;
      }
    } else if (humanChoice === "Paper") {
      switch (computerChoice) {
        case "Rock":
          humanWon = true;
          break;
        case "Scissor":
          humanWon = false;
          break;
        case "Paper":
          tie = true;
          break;
      }
    } else if (humanChoice === "Rock") {
      switch (computerChoice) {
        case "Rock":
          tie = true;
          break;
        case "Scissor":
          humanWon = true;
          break;
        case "Paper":
          humanWon = false;
          break;
      }
    }
    if (humanWon && !tie) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (tie) {
      console.log(`Tie! ${humanChoice} is same as ${computerChoice}`);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  playRound(humanSelection, compSelection);
  const oneGame = () => {
    humanSelection = getHumanChoice();
    compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);
  };

  oneGame();
  oneGame();
  oneGame();
  oneGame();
  if (humanScore > computerScore) {
    console.log(
      "You win! You won more than time the computer at rock paper scissor",
    );
  } else if (humanScore < computerScore) {
    console.log(
      "You lose! The computer won more time than you at rock paper scissor",
    );
  } else {
    console.log("Tie! You and the computer won same amount of time");
  }
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

playGame();
