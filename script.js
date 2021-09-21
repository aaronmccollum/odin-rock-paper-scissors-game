// Function representing the Computer's turn - output is either 'Rock', 'Paper', 'Sissors'
let computerPlay = () => {
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