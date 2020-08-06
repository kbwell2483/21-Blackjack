/* 
name = prompt("Welcome to 21 Blackjack. To play, enter you name.")
document.querySelector("h2").innerText = `Welcome ${name}. You are Player 1. Have Fun and Good luck!` 
*/

let playersCards = []
let playersTotal = 0
let dealersCards = []
let dealersTotal = 0
let dealersScore = 0
let playersScore = 0


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

    // index = Math.floor(Math.random() * 52)
    // dealersCards.push(deck[index])
    // index = Math.floor(Math.random() * 52)
    // dealersCards.push(deck[index])
    renderCards()
  
}

const standButton = (event) => {
    const $stand = $("#stand")
    index = Math.floor(Math.random() * 52)
    dealersCards.push(deck[index])
    index = Math.floor(Math.random() * 52)
    dealersCards.push(deck[index])
    renderCards()
    calDealersTotal()
  
}

const renderCards = () => {
    let str = " "
    for (let i =0; i <playersCards.length; i++) {
       str+= playersCards[i].name + " "
    }
    $("#playersCards").text(str)

    str = " "
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
    $("#playersTotal").text(playersTotal)
    checkBust()
    // resetGame ()
}

const calDealersTotal = () => {
    dealersTotal = 0
    for (let i =0; i <dealersCards.length; i++) {
        dealersTotal+= dealersCards[i].value 
    }
    console.log(dealersTotal)
    $("#dealersTotal").text(dealersTotal)
    checkScore()
    // resetGame ()
}

// const dealerPicksACard = () => {
//     while (dealersTotal < 17){
//         index = Math.floor(Math.random() * 52)
//         dealersCards.push(deck[index])
//         str = ""
//         for (let i =0; i <dealersCards.length; i++) {
//            str+= dealersCards[i].name + " "
//         }
//         $("#dealersCards").text(str)
//     }
// }

const checkBust = () => {
    let confirmed = ""
    if (playersTotal > 21){
        confirmed = window.confirm(`Bust! You have ${playersTotal}! You lose. Better luck next time!`);
        dealersScore++

    }  
    if(confirmed) {
        resetGame(); 
      }
}
  
const checkScore =  () => {
    let confirmed = ""
    if (dealersTotal === playersTotal){
        confirmed = window.confirm(`You both have ${dealersTotal}! Tie game!`)

    } else if (dealersTotal > playersTotal) {
        confirmed = window.confirm(`The dealer has ${dealersTotal} and you have ${playersTotal}! Dealer wins! Better luck next time!`)
        dealersScore++
    } else {
        confirmed = window.confirm(`The dealer has ${dealersTotal} and you have ${playersTotal}! You won! Great job!`)
        playersScore++
    }

    if(confirmed) {
      resetGame(); 
    }
}

const resetGame = () => {
    playersTotal = 0
    dealersTotal = 0 
    playersCards = []
    dealersTotal = []
    $("#dealersTotal").text("")
    $("#playersTotal").text("")
    $("#playersCards").text("")
    $("#dealersCards").text("")
    $("#dealersScore").text(dealersScore)
    $("#playersScore").text(playersScore)
}


/* On load */
$(() => {
    $("#hit").on("click", hitButton)
    $("#newGame").on("click", newGameButton)
    $("#stand").on("click", standButton)
    


})


