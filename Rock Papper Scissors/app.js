const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)
    let arr = ['rock', 'papper', 'scissors']
    computerChoice = arr[randomNumber]

    // if (randomNumber === 1) {
    //     computerChoice = 'rock'
    // } else if (randomNumber === 2) {
    //     computerChoice = 'papper'
    // } else {
    //     computerChoice = 'scissors'
    // }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost!'
    } else if (computerChoice === 'scissors' && userChoice === 'papper') {
        result = 'you lost!'
    } else if (computerChoice === 'papper' && userChoice === 'rock') {
        result = 'you lost!'
    } else {
        result = 'you won!'
    }
    resultDisplay.innerHTML = result
}