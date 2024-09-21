let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 

let player = {
    name : "Abhishek",
    chips : 145,
}

let playerL = document.getElementById("player-el")
playerL.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1) 
    if (randomNumber === 1) return 11
    else if (randomNumber > 10) return 10
    else return randomNumber 
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum += firstCard + secondCard
    cards.push(firstCard, secondCard)
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
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
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