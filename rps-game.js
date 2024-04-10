console.log("==== Welcome to Rock, Paper and Scissors Game! ====");

let choices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
     return choices[getRandomInt(3)];
}

for(let i = 0; i < 5; i++){
    console.log(getComputerChoice());
}
