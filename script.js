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
        return 'rock';
    } else if (choiceNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get Player choice
function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?");

    return userChoice.toLowerCase();
}

console.log(getHumanChoice());
// Points and rounds