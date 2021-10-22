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
let playerInput;
let whoWon;

function playRound () {

    computerPlay();

    alert(message);

    return whoWon;

}

function game () {

    let userScore = 0;
    let computerScore = 0;

    function points () {
        if (whoWon === "User") {
            userScore = userScore + 1;
        }
        else if (whoWon === "Computer") {
            computerScore = computerScore + 1;
        }

        return [userScore, computerScore];
    }

    function finalResult () {
        if (userScore > computerScore) {
            alert("YOU WON!");
        }
        else if (computerScore > userScore) {
            alert("You lost :(");
        }
        else {
            alert("Wow, you tied! That's unlikely.");
        }
    }

}

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

    console.log(message);
    console.log(whoWon);
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

    console.log(message);
    console.log(whoWon);
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

    console.log(message);
    console.log(whoWon);
}