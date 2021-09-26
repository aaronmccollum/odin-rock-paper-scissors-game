//Function that returns the value of the Computer's choice
function computerPlay() {
    let [throwRock, throwPaper] = [0, 1];
    let randomPick = Math.floor(Math.random() * 3);

    if (randomPick === throwRock) {
        return "rock";
    } else if (randomPick === throwPaper) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Function that runs one iteration of the game
function playRound(playerSelection, computerSelection) {
	// Computer throws "rock"
	if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "YOU WIN! The computer threw ROCK and you threw PAPER.";
        } else if (playerSelection === "rock") {
            return "It's a tie, both you and the computer threw ROCK.";
        } else {
            return "You lose, the computer threw ROCK and you threw SCISSORS.";
        }
    }
    // Computer throws "paper"
    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "YOU WIN! The computer threw PAPER and you threw SCISSORS.";
        } else if (playerSelection === "paper") {
            return "It's a tie, both you and the computer threw PAPER.";
        } else {
            return "You lose, the computer threw PAPER and you threw ROCK.";
        }
    }
    // Computer throws "scissors"
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "YOU WIN! The computer threw SCISSORS and you threw ROCK.";
        } else if (playerSelection === "scissors") {
            return "It's a tie, both you and the computer threw SCISSORS.";
        } else {
            return "You lose. the computer threw SCISSORS and you threw PAPER.";
        }
    }
};

const playerSelection = prompt("What do you want to throw?").toLowerCase();
const computerSelection = computerPlay();

function game() {
    let resultArr = [];

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result.includes('WIN')) {
            resultArr.push("user");
        }
	if (result.includes('tie')) {
	    resultArr.push(" ");
	}
        if (result.includes("lose")) {
            resultArr.push("comp");
        }
    }
	
    return resultArr;
}
