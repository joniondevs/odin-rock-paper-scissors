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

for(let i = 0; i < 5; i++){
    console.log(getComputerChoice());
}

let playerPick = getPlayerChoice();
console.log(`player's choice: ${playerPick}`);
