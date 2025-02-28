const rps = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)]
}

// function getHumanChoice() {
//     let choice = prompt("Rock, paper, or scissors?")
//     return choice.toLowerCase()
// }



let humanScore = 0;
let computerScore = 0;
const dialog = document.querySelector("#dialog");
dialog.textContent = "";

const humanScoreDisp = document.querySelector("#human-score")
humanScoreDisp.textContent = "";

const computerScoreDisp = document.querySelector("#computer-score")
computerScoreDisp.textContent = "";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        playRound(button.id, getComputerChoice());
        displayScore()
    }

    )
})


function displayScore() {
    // console.log(`You: ${humanScore} - Computer: ${computerScore}`)
    humanScoreDisp.textContent = `YOU: ${humanScore}`;
    computerScoreDisp.textContent = `COMPUTER: ${computerScore}`;

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
    console.log(typeof humanChoice)
    console.log(humanChoice);
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
    dialog.textContent = message;
}


// displayScore()
// for (i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//     displayScore();
// }
// console.log(evaluateWinner())


