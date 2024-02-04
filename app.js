const computerChioceDisplay = document.getElementById("Computer-choice");
const userChioceDisplay = document.getElementById("User-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChioce
let computerChioce
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
    userChioce = e.target.id
    userChioceDisplay.innerHTML = userChioce
    generateComputerChioce()
    getResult()
}))

function generateComputerChioce(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChioce = "Rock"
    }
    if (randomNumber === 2) {
        computerChioce = "Scissors"
    }
    if (randomNumber === 1) {
        computerChioce = "Paper"
    }
    computerChioceDisplay.innerHTML = computerChioce
  } 
 function getResult() {
    if (computerChioce === userChioce) {
        result = "its a draw"
    }
    if (computerChioce === "Rock" && userChioce === "Paper"){
        result = "You win!"
    }
    if (computerChioce === "Rock" && userChioce === "Scissors"){
        result = "You lose!"
    }
    if (computerChioce === "Paper" && userChioce === "Scissors"){
        result = "You win!"
    }
    if (computerChioce === "Paper" && userChioce === "Rock"){
        result = "You lose!"
    }
    if (computerChioce === "Scissors" && userChioce === "Rock"){
        result = "You win!"
    }
    if (computerChioce === "Scissors" && userChioce === "Paper"){
        result = "You lose!"
    }
    resultDisplay.innerHTML = result
 }