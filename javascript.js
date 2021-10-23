let computerSelection;

function computerPlay () {

    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        computerSelection = "Rock";
    }

    else if (num === 1) {
        computerSelection = "Paper";
    }

    else {
        computerSelection = "Scissors";
    }

    return computerSelection;
}

let message;
let whoWon;
let userScore = 0;
let computerScore = 0;

document.getElementById("rockbtn").addEventListener("click", rock);

function rock () {
    computerPlay();

    if (computerSelection === "Rock") {
        message = "You've tied! Rock and Rock tie.";
        whoWon = "Tie";
    }
    else if (computerSelection === "Paper") {
        message = "You lose! Paper beats rock.";
        whoWon = "Computer";
    }
    else {
        message = "You win! Rock beats scissors.";
        whoWon = "User";
    }

    if (whoWon === "User") {
        userScore = userScore + 1;
        document.getElementById("userscoredisplay").innerHTML = userScore;
    } 
    else if (whoWon === "Computer") {
        computerScore = computerScore + 1;
        document.getElementById("computerscoredisplay").innerHTML = computerScore;
    }

    if (userScore === 5) {
        message = "You've won the whole round!";
    }
    else if (computerScore === 5) {
        message = "The computer has won this round!";
    }

    document.getElementById("results").innerHTML = message;
}

document.getElementById("paperbtn").addEventListener("click", paper);

function paper () {
    computerPlay();

    if (computerSelection === "Rock") {
        message = "You win! Paper beats rock.";
        whoWon = "User";
    }
    else if (computerSelection === "Paper") {
        message = "You've tied! Paper and Paper tie.";
        whoWon = "Tie";
    }
    else {
        message = "You lose! Scissors beats paper.";
        whoWon = "Computer";
    }

    if (whoWon === "User") {
        userScore = userScore + 1;
        document.getElementById("userscoredisplay").innerHTML = userScore;
    } 
    else if (whoWon === "Computer") {
        computerScore = computerScore + 1;
        document.getElementById("computerscoredisplay").innerHTML = computerScore;
    }

    if (userScore === 5) {
        message = "You've won the whole round!";
    }
    else if (computerScore === 5) {
        message = "The computer has won this round!";
    }

    document.getElementById("results").innerHTML = message;
}

document.getElementById("scissorsbtn").addEventListener("click", scissors)

function scissors () {
    computerPlay();

    if (computerSelection === "Rock") {
        message = "You lose! Rock beats Scissors.";
        whoWon = "Computer";
    }
    else if (computerSelection === "Paper") {
    message = "You win! Scissors beats Paper.";
    whoWon = "User";
    }
    else {
    message = "You've tied! Scissors and Scissors tie."
    whoWon = "Tie";
    }

    if (whoWon === "User") {
        userScore = userScore + 1;
        document.getElementById("userscoredisplay").innerHTML = userScore;
    } 
    else if (whoWon === "Computer") {
        computerScore = computerScore + 1;
        document.getElementById("computerscoredisplay").innerHTML = computerScore;
    }

    if (userScore === 5) {
        message = "You've won the whole round!";
    }
    else if (computerScore === 5) {
        message = "The computer has won this round!";
    }

    document.getElementById("results").innerHTML = message;
}