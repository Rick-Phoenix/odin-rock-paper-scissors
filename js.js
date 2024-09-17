function getComputerChoice(choice) {
    let token = Math.random();
    if (token <= 0.33)
        return "rock"; 
    else if (token > 0.33 && token <= 0.66)
        return "paper";
    else return "scissors";
}

function getHumanChoice(choice) {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

let humanScore = 0
let computerScore = 0
let round = 0

function playRound() {
    let CC = getComputerChoice();
    let HC = getHumanChoice();
    if (CC == HC) {
        console.log("It's a tie!");
    }
    else if (CC == "rock") {
        if (HC == "scissors") {
        console.log("Rock smashes scissors! You lose!");
        computerScore++;
        round++;
        }
        else if (HC == "paper") {
            console.log("Paper wraps rock! You win!");
            humanScore++;
            round++;
        }
    }
    else if (CC == "paper") {
        if (HC == "rock") {
            console.log("Paper wraps rock! You lose!");
            computerScore++;
            round++;
        }
        else if (HC == "scissors") {
            console.log("Scissors cut paper! You win!");
            humanScore++;
            round++;
        }
    }
    else if (CC == "scissors") {
        if (HC == "rock") {
            console.log("Rock smashes scissors! You win!");
            humanScore++;
            round++;
        }
        else if (HC == "paper") {
            console.log("Scissors cut paper! You lose!");
            computerScore++;
            round++;
        }
    }
    
    console.log(`The current score is: Computer has ${computerScore} points and Human has ${humanScore} points.`);
}

function playGame() {
    for (; round <= 6;) {
        playRound();
        if (round == 5 && computerScore > humanScore) {
            console.log("Game's over! Computer won!");
            break;
        }
        else if (round == 5 && humanScore > computerScore) {
            console.log("Game's over! Human won!");
            break;
        }
    }
}
