function getComputerChoice(choice) {
    let token = Math.random();
    if (token <= 0.33)
        return "rock"; 
    else if (token > 0.33 && token <= 0.66)
        return "paper";
    else return "scissors";
}

const button = document.querySelectorAll('button')
button.forEach((button) => {
    button.addEventListener('click', () => {
        if (humanScore == 5 || computerScore == 5) return false;
        playRound(button.id);
    })
})

let humanScore = 0
let computerScore = 0
let round = 0

const gamefeed = document.querySelector('h3');
const humScore = document.querySelector("#humanScore");
const compScore = document.querySelector("#computerScore");

function playRound(HC) {
    let CC = getComputerChoice();
    if (CC == HC) {
        gamefeed.innerText = "It's a tie! Try again!";
    }
    else if (CC == "rock") {
        if (HC == "scissors") {
        gamefeed.innerText = "Rock smashes scissors! You lose!";
        computerScore++;
        round++;
        }
        else if (HC == "paper") {
            gamefeed.innerText = "Paper wraps rock! You win!";
            humanScore++;
            round++;
        }
    }
    else if (CC == "paper") {
        if (HC == "rock") {
            gamefeed.innerText = "Paper wraps rock! You lose!";
            computerScore++;
            round++;
        }
        else if (HC == "scissors") {
            gamefeed.innerText = "Scissors cut paper! You win!";
            humanScore++;
            round++;
        }
    }
    else if (CC == "scissors") {
        if (HC == "rock") {
            gamefeed.innerText = "Rock smashes scissors! You win!";
            humanScore++;
            round++;
        }
        else if (HC == "paper") {
            gamefeed.innerText = "Scissors cut paper! You lose!";
            computerScore++;
            round++;
        }
    }
    humScore.innerText = humanScore;
    compScore.innerText = computerScore;
    if (humanScore == 5) gamefeed.innerText = "You won!!! Congratulations!";
    if (computerScore == 5) gamefeed.innerText = "You lost! :( Reload the page and try again!";
}


