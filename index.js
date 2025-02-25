const rps = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?")
    return choice.toLowerCase()
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function printScore() {
        console.log(`You: ${humanScore} - Computer: ${computerScore}`)
    }
    
    function evaluateWinner() {
        if (humanScore < computerScore) {
            return "Game Over. You lose!";
        } else if (humanScore === computerScore) {
            return "Game over. WOW a TIE???";
        } else if (humanScore > computerScore) {
            return "Game over. You won!"
        }
    }

    function playRound(humanChoice, computerChoice) {
        let message = '';
        if (humanChoice === "rock") {
            if (computerChoice === "rock"){
                message = "Tie!";
            } else if (computerChoice === "paper"){
                message = "You lose! Paper beats rock.";
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                message = "You win! Rock beats scissors.";
                humanScore += 1;
            }
    
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock"){
                message = "You Win! Paper beats rock.";
                humanScore += 1;
            } else if (computerChoice === "paper"){
                message = "Tie!"
            } else if (computerChoice === "scissors"){
                message = "You lose! Scissors beats paper.";
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock"){
                message = "You lose! Rock beats scissors.";
                computerScore += 1;
            } else if (computerChoice === "paper"){
                message = "You win! Scissors beats paper.";
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                message = "Tie!"
            }
        }
        console.log(message)
    }
    

    printScore()
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        printScore();
    }
    console.log(evaluateWinner())
}

