const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
      } else {
        console.log('Error, incorrect input');
      }
};
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log("The program encountered an error when attempting to retrieve the computer's choice.")
    }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You won!'
  } else if (userChoice === computerChoice) {
     return 'The game is a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The Computer won!";
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer won!'
    }
  } else {
    console.log("The program encountered an error when attempting to determine a winner.");
  }
};
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`The users choice was ${userChoice} and the Computer's choice was ${computerChoice}.`);
  return determineWinner(userChoice, computerChoice);
};
console.log(playGame());
