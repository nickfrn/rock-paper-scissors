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

// Score
let humanScore = 0;
let computerScore = 0;

// Define a single round
function playRound(humanChoice, computerChoice) {
    // Get user and computer's choices and declare results
    if (humanChoice === 'Rock' && computerChoice === 'Scissors' ||
        humanChoice === 'Scissors' && computerChoice === 'Paper' ||
        humanChoice === 'Paper' && computerChoice === 'Rock'
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore, computerScore);
// Entire game