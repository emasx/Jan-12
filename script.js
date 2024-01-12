// Rock, Paper, Scissors

//console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

// console.log(getUserChoice('Paper')); // should print 'paper'
// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`


const getComputerChoice = () => {

  const randomNumber = Math.floor(Math.random() * 3);

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
  }
}

// console.log(getComputerChoice());

const determinerWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Congratulations, you won!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'I won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'I won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'I won!';
    }
  }

}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();

  console.log('I threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determinerWinner(userChoice, computerChoice));
}

playGame();


// console.log(determinerWinner('paper', 'scissors'));
// console.log(determinerWinner('paper', 'paper'));
// console.log(determinerWinner('paper','rock'));
