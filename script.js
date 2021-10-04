const computerBtn = document.querySelector('.computer-btn');
const computerOutput = document.querySelector('.game-result')

const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    //computer throws randomly rock paper or scissors
    let randomNumber = Math.floor(Math.random() * options.length)
    let randomOption = options[randomNumber]
    // console.log(randomOption)
    return randomOption
}

function playRound(playerSelection, computerSelection){
    let playerPoints = 0
    let compPoints = 0
    if (playerSelection == "scissors" && computerSelection == "paper" || 
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "rock" && computerSelection == "scissors") {
        playerPoints = 1
    }else if (playerSelection == "scissors" && computerSelection == "rock" ||
                playerSelection == "rock" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "scissors") {
        compPoints = 1
    }
    console.log(`player has ${playerPoints} and computer has ${compPoints}`)
}

const computerSelection = computerPlay();
console.log(playRound("rock", computerSelection))

// function game(num) {
//     for (let i = 0; i<=num; i++) {
//         const playerChoice = prompt();
//         let computerChoice = computerPlay()
//         gameRound(computerChoice, playerChoice);
//         console.log(playerChoice, computerChoice);
//         console.log(`User: ${userPoints}, computer: ${compPoints}`);
//     }
// }

// game(5)
