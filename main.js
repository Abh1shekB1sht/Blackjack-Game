let hands = ["rock", "paper", "scissor"]

function randomHand() {
    return hands[Math.floor(Math.random() * 3)]
}

console.log(randomHand())
