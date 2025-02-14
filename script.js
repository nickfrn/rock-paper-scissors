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

// Get Player choice
function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?");

    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
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

const container = document.createElement('div');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';

let roundResult = document.createElement('div');

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(roundResult);

let humanScore = 0;
let computerScore = 0;

let score = document.createElement('div');
score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

container.appendChild(score);

document.body.appendChild(container);

rockBtn.addEventListener('click', () => {
    let result = playRound('Rock', getComputerChoice());
    
    // Clean roundResult to avoid round results stacking
    roundResult.textContent = '';
    roundResult.textContent = result;

    if (result.includes('win')) humanScore++;
    if (result.includes('lose')) computerScore++;

    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
});

paperBtn.addEventListener('click', () => {
    let result = playRound('Paper', getComputerChoice());
    
    // Clean roundResult to avoid round results stacking
    roundResult.textContent = '';
    roundResult.textContent = result;

    if (result.includes('win')) humanScore++;
    if (result.includes('lose')) computerScore++;

    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
});

scissorsBtn.addEventListener('click', () => {
    let result = playRound('Scissors', getComputerChoice());
    
    // Clean roundResult to avoid round results stacking
    roundResult.textContent = '';
    roundResult.textContent = result;

    if (result.includes('win')) humanScore++;
    if (result.includes('lose')) computerScore++;

    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
});