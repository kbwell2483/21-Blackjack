/* Variables */
const values = [
    {name: "Ace", value: 1},
    {name: "Two", value: 2},
    {name: "Three", value: 3},
    {name: "Four", value: 4},
    {name: "Five", value: 5}, 
    {name: "Six", value: 6},
    {name: "Seven", value: 7},
    {name: "Eight", value: 8},
    {name: "Nine", value: 9},
    {name: "Ten", value: 10},
    {name: "Jack", value: 10},
    {name: "Queen", value: 10},
    {name: "King", value: 10}
];

const suits = [
    {name: "Clubs", value: 0}, 
    {name: "Diamonds", value: 0}, 
    {name: "Hearts", value: 0}, 
    {name: "Spades", value: 0}
];


/* Cards */
for (let key of values) {
    for (let property of suits) {
        console.log(`${key.name} of ${property.name}`)
    }
}

/* Deck */

/* Shuffle Deck */

/* Pull 2 cards for player, evaluate their sum and display their total value. If total value of player's hand is over 21, players loses. If value of player's hand is 21, player wins. If value of player's hand is less than 21, player will have option to hit or stand. If stand, sum of player's hand will be valuated against sum of dealer's hand. The person closest to 21 wins the game. If hit, 1 card is pulled from the deck and it's value added to players's total valu cards for player, evaluate their sum and display their total value.


, sum of player's hand will be valuated against sum of dealer's hand. The person closest to 21 wins the game.

/* Pull 2 cards for dealer, evaluate their sum and display their total value.
    If value of dealer's hand is 17 or more, dealer must stand. If value of dealer's hand is 16 or less, dealer must draw another card from deck amd have it's value added to currrent hand's value */
    







