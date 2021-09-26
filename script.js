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
    // computer throws Rock
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        return "It's a tie, try again.";
    } else {
        return "You win! Paper beats Rock!";
    }

    // computer throws Paper

    // computer throws Scissors
}

const playerSelection = "rock";
const computerSelection = computerPlay();