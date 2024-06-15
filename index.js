let card = []
let sum = 0
let hasBlackJack = false 
let isAlive = false  
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

console.log(playerEl)


function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "do you want to draw a new card ?"
    }
    else if(sum === 21) {
        message="Wohouu! you've got Blackjack!"
        let hasBlackJack = true 
    }

    else  {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum+= card
    // to Push the card to the cards array
    renderGame()    // renderGame() est appelée pour mettre à jour l'affichage du jeu.
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


// if (sum <= 20 ){
//     console.log("D o")
// }

//------------------------------------------------------------------

// key value pairs 

let course = {
    title: "learn CSS grid for free",
    lessons: 16,
    creator: "per garoui chaima",
    lenght: 63,
    isFree: true,
    tags: ["html","css"]
}

console.log( course.creator)

//-------------------------------------------------------

let player = {
    name : "chaima",
    chips : 200
}