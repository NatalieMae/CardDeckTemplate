const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

class Deck {
    constructor(deck) {
        this.name = deck; // "deck1" or "deck2"
        this.deck = [];
        this.reset();
        this.shuffle();
}

reset() {
    this.deck = [];
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let suit in suits) {
        for (let value in values) {
            this.deck.push({
            cardName: `${values[value]} of ${suits[suit]}`,
            suit: suits[suit],
            value: values[value],
        });
        }
    }
}

shuffle() {
    const { deck } = this;
    let m = deck.length, i;
    while (m) {
        i = Math.floor(Math.random() * m--);

        [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    return this;
    }

deal() {
    return this.deck.pop();
    }
}

const deck1 = new Deck("deck1");
const deck2 = new Deck("deck2");
console.log(deck1.deck);
