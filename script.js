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

// Play an entire game consisting of 5 rounds
function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Loop over each round and update score
    for (i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());

        console.log(result);

        if (result.includes('win')) {
            humanScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        } else {
            continue;
        }

    }

    if (humanScore > computerScore) {
        console.log(`You won! The final score is:\nPlayer:${humanScore} Computer:${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! The final score is:\nPlayer:${humanScore} Computer:${computerScore}`)
    } else {
        console.log(`It's a draw! The final score is:\nPlayer:${humanScore} Computer:${computerScore}`);
    }
}

playGame();