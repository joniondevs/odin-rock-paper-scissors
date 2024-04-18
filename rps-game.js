console.log("==== Welcome to Rock, Paper and Scissors Game! ====");

let choices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function clamp (value, min, max) {
    return Math.max(min, Math.min(max, value))
}  

function getComputerChoice(){
     return choices[getRandomInt(3)];
}

function getPlayerChoice(){
    let input = prompt("pick either rock (1), paper (2) or scissors (3)");
    let inputNumber = parseInt(input);
    
    if(!isNaN(inputNumber)){
        let index = clamp((inputNumber - 1), 0, 2);
        return choices[index];
    }else{
        console.log("not a number 1,2 or 3!");
        getPlayerChoice();
    }
}

function compareHand(pickA, pickB)
{
    if(pickA === pickB)
    {
        return 0; // a tie
    }else
    {
        let result = 0;

        switch(pickA)
        {
            case "rock":
                result = pickB ==="paper" ? 0 : 1;
                result = pickB ==="scissors" ? 1 : 0;
                break;

            case "paper":
                result = pickB ==="rock" ? 1 : 0;
                result = pickB ==="scissors" ? 0 : 1;
                break;

            case "scissors":
                result = pickB ==="rock" ? 0 : 1;
                result = pickB ==="paper" ? 1 : 0;
                break;
        }
        
        return result;
    }
}

function playRound(playerChoice){
    let playerPick = playerChoice;
    let cpuPick = getComputerChoice();

    roundLog.textContent = `cpu picks ${cpuPick} and player picks ${playerPick}`;

    cpuScore += compareHand(cpuPick, playerPick);
    playerScore += compareHand(playerPick, cpuPick);

    currentRound += 1;
    resultPara.textContent = `scores after round ${currentRound}: cpu:${cpuScore} player:${playerScore}`;

    if(currentRound >= rounds || playerScore > rounds / 2 || cpuScore > rounds / 2)
    {
        printWinner();
    }
}

function printWinner(playerScore, cpuScore)
{
    if(playerScore === cpuScore)
    {
        console.log("It's a Draw! How exciting!");
    }
    else if(playerScore > cpuScore)
    {
        console.log("Player Wins!");
    }else{
        console.log("CPU Wins!");
    }
}

// ui event handlers
const buttons = document.querySelector("#player-options");
buttons.addEventListener("click", (event) => { playRound(event.target.id); });

const roundLog = document.querySelector("#round-log");

const resultPara = document.querySelector("#round-result");
resultPara.textContent = "Start game by picking either rock, paper or scissors";

// game
let playerScore = 0;
let cpuScore = 0;
let rounds = 5;
let currentRound = 0;




