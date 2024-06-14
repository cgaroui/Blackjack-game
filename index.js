let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard + 4
let hasBlackJack = false 
let isAlive = true 
let message =""

if (sum < 21) {
    message = "do you want to draw a new card ?"
}
else if(sum === 21) {
    message="Wohouu! you've got Blackjack!"
    let hasBlackJack = true 
}

else  {
    console.log("tou're out of the game!")
    isAlive = false
}

//-----------------------------------------

//check if the person is elegible dor a birthday card from the King! (100)

let age = 100

if (age < 100) {
        console.log("Not elegible")
}else if ( age === 100){
    console.log("here is your birthday card from the King!")
}else {
    console.log("Not elegible! you have already gotten one ")
}


if (sum <= 20 ){
    console.log("D o")
}

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

