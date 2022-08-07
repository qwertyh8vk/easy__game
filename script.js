
let arrayOfButtons = document.querySelectorAll(".rpsButton")

let rock = document.getElementById("Rock")
let paper = document.getElementById("Paper")
let scissors = document.getElementById("Scissors")


let endButton = document.getElementById("endGameButton")

let rockValue = rock.value
let paperValue = paper.value
let scissorsValue = scissors.value
let choiceArray = ["Rock", "Paper", "Scissors"]
let score = 0 

let resultContainer = document.getElementById("resultContainer")
let player_score = document.getElementById("player-score")
let hands = document.getElementById("hands")
let result = document.getElementById("result")


function getComputerChoice() {
  let computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
}


function getResult(playerChoice, computerChoice) {
    if (computerChoice == "Rock"){
        if (playerChoice = "Rock"){
            score += 0
            result.innerText = "It's a draw!"
            showResult(score, "Rock", "Rock")
        }
        
        else if (playerChoice = "Paper"){
            score -= 1
            result.innerText = "You lose!"
            showResult(score, "Paper", "Rock")
        }

        else if (playerChoice = "Scissors"){
            score += 1
            result.innerText = "You win!"
            showResult(score, "Scissors", "Rock")
        }
    }

    else if (computerChoice == "Paper"){
        if (playerChoice = "Rock"){
            score += 1
            result.innerText = "You win!"
            showResult(score, "Rock", "Paper")
        }
        
        else if (playerChoice = "Paper"){
            score += 0
            result.innerText = "It's a draw!"
            showResult(score, "Paper", "Paper")
        }

        else if (playerChoice = "Scissors"){
            score -= 1
            result.innerText = "You lose!"
            showResult(score, "Scissors", "Paper")
        }
    }

    else if (computerChoice == "Scissors"){
        if (playerChoice = "Rock"){
            score -= 1
            result.innerText = "You lose!"
            showResult(score, "Rock", "Scissors")
        }
        
        else if (playerChoice = "Paper"){
            score += 1
            result.innerText = "You win!"
            showResult(score, "Paper", "Scissors")
        }

        else if (playerChoice = "Scissors"){
            score += 0
            result.innerText = "It's a draw!"
            showResult(score, "Scissors", "Scissors")
        }
    }
}
  

function showResult(score, playerChoice, computerChoice) {
    player_score.innerText = score
    hands.innerText =  `you: ${playerChoice}\ncomputerChoice: ${computerChoice}`
}

function onClickRPS() {
    for(let i = 0; i < arrayOfButtons.length; i++){
        let button = arrayOfButtons[i]
        button.addEventListener("click", function(){
            let playerChoice = button.value
            let computerChoice = getComputerChoice()
            getResult(playerChoice, computerChoice)
    })
}



function playGame(){
   if (score < 0){
        endGame()
   }

   onClickRPS()

  endButton.addEventListener("click", function(){
    endGame()
  })
}

function endGame() {
  player_score.innerHTML = ""
  hands.innerHTML = ""
  result.innerHTML = ""
  score = 0
}

playGame()