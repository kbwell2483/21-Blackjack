/********** Cards/Deck *********/
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

// // const createCards = () =>{
    const deck =[]
    for (let key of values) {
        for (let property of suits) {
            const cards = (`${key.name} of ${property.name}`)
            // console.log(cards)
            const valueofCards = key.value  
            // console.log(valueofCards)
            deck.push({name: cards, value: valueofCards})
        }
    }
// }


