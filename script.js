// Function representing the Computer's turn - output is either 'Rock', 'Paper', 'Sissors'
function computerPlay() {
    let rockNum = 0;
    let paperNum = 1;
    let returnNum = Math.floor(Math.random() * 3);

    //change this to terciary form later
    if (returnNum === rockNum) {
        return "Rock";
    } else if (returnNum === paperNum) {
        return "Paper";
    } else {
        return "Sissors";
    }
}

// Function representing a complete round of Rock, Paper, Sissors
let playRound = (playerSelection, computerPlay) => {
	// Player plays "Rock"
    if (playerSelection === "rock") {
        if (computerPlay === "paper") {
            return "You lose! Paper beats Rock!";
        } else if (computerPlay === "rock") {
            return "It's a tie, try again!";
        } else {
            return "You win! Rock beats Sissors!";
        }
    }

    // Player plays "Paper"
    if (playerSelection === "paper") {
        if (computerPlay === "sissors") {
            return "You lose! Sissors beats Paper!";
        } else if (computerPlay === "paper") {
            return "It's a tie, try again!";
        } else {
            return "You win! Paper beats Rock!";
        }
    }

    // Player plays "Sissors"
    if (playerSelection === "sissors") {
        if (computerPlay === "rock") {
            return "You lose! Rock beats Sissors!";
        } else if (computerPlay === "sissors") {
            return "It's a tie, try again!";
        } else {
            return "You win! Sissors beats Paper!";
        }
    }
}

// Function to play game 5 times and keep score
// DOES NOT WORK YET
let game = () => {
    let computerSelection = computerPlay();

    // playing the game five times
    return playRound(playerSelection, computerSelection);
}
