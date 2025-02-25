const rps = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?")
    return choice.toLowerCase()
}