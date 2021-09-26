function computerPlay() {
    let [throwRock, throwPaper] = [0, 1];
    let randomPick = Math.floor(Math.random() * 3);

    if (randomPick === throwRock) {
        return "Rock";
    } else if (randomPick === throwPaper) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win! Paper beats Rock!";
        } else if (playerSelection === "rock") {
            return "It's a tie, try again.";
        } else {
            return "You lose. Rock beats Scissors.";
        }
    }

    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "You win! Scissors beats Paper.";
        } else if (playerSelection === "paper") {
            return "It's a tie, try again.";
        } else {
            return "You lose. Paper beats Rock.";
        }
    }

    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "You win! Rock beats Scissors.";
        } else if (playerSelection === "scissors") {
            return "It's a tie, try again.";
        } else {
            return "You lose. Scissors beats Paper.";
        }
    }
};

const playerSelection = "rock";
const computerSelection = computerPlay();