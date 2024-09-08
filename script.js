const choice = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const score = document.querySelector("#score");
const displayUser = document.querySelector("#userDisplay");
const displayComp = document.querySelector("#compDisplay");
const resetButton = document.querySelector("#reset-button");

let scoreboard = {
    wins: 0, 
    loses: 0, 
    draws: 0
}

let userChoice;
choice.forEach((element) => {
    element.addEventListener('click', () =>{
        userChoice = element.getAttribute("id");
        console.log("user choice: ", userChoice);
        generateComputerChoice();
    })
})


let compChoice;
function generateComputerChoice(){
    let num = Math.random();
    if(num<=0.333){
        compChoice = "rock";
    } else if(num<=0.666) {
        compChoice = "paper";
    } else{
        compChoice = "scissors";
    }
    console.log("computer choice: ",compChoice);
    calculateResult(userChoice, compChoice);
}

function calculateResult(userChoice, compChoice){
    if(userChoice === "rock") {
        if(compChoice === "rock") {
            result.innerText = "Draw";
            scoreboard.draws++;
        } else if(compChoice === "paper") {
            result.innerText = "You Lose!";
            scoreboard.loses++;
        } else {
            result.innerText = "You Win!";
            scoreboard.wins++;
        }
    } else if (userChoice === "paper") {
        if(compChoice === "paper") {
            result.innerText = "Draw";
            scoreboard.draws++;
        } else if(compChoice === "scissors") {
            result.innerText = "You Lose!";
            scoreboard.loses++;
        } else {
            result.innerText = "You Win!";
            scoreboard.wins++;
        }
    }  else {
        if(compChoice === "scissors") {
            result.innerText = "Draw";
            scoreboard.draws++;
        } else if(compChoice === "rock") {
            result.innerText = "You Lose!";
            scoreboard.loses++;
        } else {
            result.innerText = "You Win!";
            scoreboard.wins++;
        }
    }
    updateScore();
    updateChoice();
}

function updateScore() {
    score.innerHTML = `<p>Wins: ${scoreboard.wins}</p>
                        <p>Losses: ${scoreboard.loses}</p>
                        <p>Draws: ${scoreboard.draws}</p>`
}


function updateChoice() {
    displayUser.innerHTML = `You: <img src="images/${userChoice}.png"></img>`
    displayComp.innerHTML = `Computer: <img src="images/${compChoice}.png"></img>`
}

function resetScore() {
    scoreboard.wins = 0;
    scoreboard.loses = 0;
    scoreboard.draws = 0;
    updateScore();
    displayUser.innerHTML = `You: </img>`;
    displayComp.innerHTML = `Computer: </img>`;
    result.innerText = "";
}

resetButton.addEventListener('click', resetScore);