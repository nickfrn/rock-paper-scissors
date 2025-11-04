// Get a random int to use as computer choice
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    // return an int value between "min" and "max" inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

// Generate random computer choice
function getComputerChoice() {
    let choiceNum = getRandomInt(1, 3);

    if (choiceNum === 1) {
        return 'Rock';
    } else if (choiceNum === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Define a single round
function playRound(humanChoice, computerChoice) {
    // Get user and computer's choices and declare results
    if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
        humanChoice === 'Scissors' && computerChoice === 'Paper' ||
        humanChoice === 'Paper' && computerChoice === 'Rock'
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        return 'It\'s a draw!';
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Announce full game winner
function getWinner(playerScore, cpuScore) {
    roundResult.textContent  = '';
    score.textContent = '';

    const winner = document.createElement('div');
    winner.classList.add('gameResult');

    if (playerScore > cpuScore) {
        winner.textContent = 'Player wins!';
    } else {
        winner.textContent = 'Computer wins!';
    }

    container.appendChild(winner);
}

// Single game function to use inside event listener
function playGame(event) {
    let userSelection = event.target.textContent;

    let result = playRound(userSelection, getComputerChoice());
    
    // Clean roundResult to avoid round results stacking
    roundResult.textContent = '';
    roundResult.textContent = result;

    if (result.includes('win')) humanScore++;
    if (result.includes('lose')) computerScore++;

    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        rockBtn.removeEventListener('click', playGame);
        paperBtn.removeEventListener('click', playGame);
        scissorsBtn.removeEventListener('click', playGame);
    
        getWinner(humanScore, computerScore);
    }
}

const container = document.createElement('main');
container.classList.add('container');
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.classList.add('btn');
const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.classList.add('btn');
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.classList.add('btn');

let roundResult = document.createElement('div');
roundResult.classList.add('roundResult');

buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);
container.appendChild(buttonsContainer);

let humanScore = 0;
let computerScore = 0;

let score = document.createElement('p');
score.classList.add('score');
score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

container.appendChild(score);
container.appendChild(roundResult);

document.body.appendChild(container);

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);