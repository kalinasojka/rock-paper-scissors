const computerBtn = document.querySelector('.computer-btn');
const computerOutput = document.querySelector('.game-result')
let playerPoints = 0;
let compPoints = 0;


function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    //computer throws randomly rock paper or scissors
    let randomNumber = Math.floor(Math.random() * options.length)
    let randomOption = options[randomNumber]
    // console.log(randomOption)
    return randomOption
}

function game(num){
    let playerSelection, computerSelection
    for (let i = 0; i < num; i++){
        playerSelection = prompt("enter rock, paper or scissors")
        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerPlay();
        console.log(`Round ${i+1}! Player's choice is ${playerSelection} and computer chose ${computerSelection}.`)
        playRound(playerSelection, computerSelection)
        console.log(`After this round the score is player: ${playerPoints}, computer ${compPoints}.`)
    }
    console.log(`player has ${playerPoints} points and computer has ${compPoints} points.`)
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == "scissors" && computerSelection == "paper" || 
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "rock" && computerSelection == "scissors") {
        console.log("player wins!")
        playerPoints +=1
    }else if (playerSelection == "scissors" && computerSelection == "rock" ||
                playerSelection == "rock" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "scissors") {
        console.log("computer wins")
        compPoints += 1
    }   
}

game(5)