/* 
name = prompt("Welcome to 21 Blackjack. To play, enter you name.")
document.querySelector("h2").innerText = `Welcome ${name}. You are Player 1. Have Fun and Good luck!` 
*/

let playersCards = []
let playersTotal = 0
let dealersCards = []
let dealersTotal = 0


const hitButton = (event) => {
    const $hit = $("#hit")
    let index = Math.floor(Math.random() * 52)
    playersCards.push(deck[index])
    renderCards()
} 

const newGameButton = (event) => {
    playersCards = []
    dealersCards = []
    let index = Math.floor(Math.random() * 52)
    playersCards.push(deck[index])
    index = Math.floor(Math.random() * 52)
    playersCards.push(deck[index])

    index = Math.floor(Math.random() * 52)
    dealersCards.push(deck[index])
    index = Math.floor(Math.random() * 52)
    dealersCards.push(deck[index])
    renderCards()
}

const standButton = (event) => {
    const $stand = $("#stand")
    calDealersTotal()
}

const renderCards = () => {
    let str = ""
    for (let i =0; i <playersCards.length; i++) {
       str+= playersCards[i].name + " "
    }
    $("#playersCards").text(str)

    str = ""
    for (let i =0; i <dealersCards.length; i++) {
       str+= dealersCards[i].name + " "
    }
    $("#dealersCards").text(str)

    calPlayersTotal()
}

const calPlayersTotal = () => {
    playersTotal = 0
    for (let i =0; i <playersCards.length; i++) {
        playersTotal+= playersCards[i].value 
    }
    console.log(playersTotal)
    // checkScore()
}

const calDealersTotal = () => {
    dealersTotal = 0
    for (let i =0; i <dealersCards.length; i++) {
        dealersTotal+= dealersCards[i].value 
    }
    console.log(dealersTotal)
//     checkScore()
}

// const checkScore = () => {
//     if (playersTotal > 21){
//         console.log("Bust: You lose!")
//     else if (playersTotal > dealersTotal) {   
//         console.log("You win!")
//     }
// }




/* On load */
$(() => {
    $("#hit").on("click", hitButton)
    $("#newGame").on("click", newGameButton)
    $("#stand").on("click", standButton)


})


