let player = {
    name: "Per",
    chips: 200
}


let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false  
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


// function rollDice(){
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log(rollDice())


//make this function return a random number between 1 and 13 
function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13) + 1
    if( randomNumber >10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}





function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
//-----------------------------------------

//check if the person is elegible dor a birthday card from the King! (100)

// let age = 100

// if (age < 100) {
//         console.log("Not elegible")
// }else if ( age === 100){
//     console.log("here is your birthday card from the King!")
// }else {
//     console.log("Not elegible! you have already gotten one ")
// }

