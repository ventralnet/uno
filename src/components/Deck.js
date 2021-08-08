import Card from '/src/components/Card.js';

import shuffle from 'lodash/shuffle';

export default class Deck {
  constructor() {
    this.rebuildDeck();
  }

  rebuildDeck() {
    this.deck = ['red', 'green', 'yellow', 'blue'].reduce((deck, color) => {
      for (let value = 0; value <= 9; value++) {
        deck.push(new Card({ color, value: `${value}`, isFlipped: false }));
        if (value > 0) {
          deck.push(new Card({ color, value: `${value}`, isFlipped: false })); // Two of each except for zero
        }
      }
      deck.push(new Card({ color, value: 'skip', isFlipped: false }));
      deck.push(new Card({ color, value: 'skip', isFlipped: false }));
      deck.push(new Card({ color, value: 'reverse', isFlipped: false }));
      deck.push(new Card({ color, value: 'reverse', isFlipped: false }));
      deck.push(new Card({ color, value: '+2', isFlipped: false }));
      deck.push(new Card({ color, value: '+2', isFlipped: false }));
      return deck;
    }, []);
    
    this.deck.push(new Card({ value: 'wild', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild+4', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild+4', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild+4', isFlipped: false }));
    this.deck.push(new Card({ value: 'wild+4', isFlipped: false }));
  }

  drawCard() {
    return this.deck.pop();  
  }

  shuffle() {
    this.deck = shuffle(this.deck);
  }

  size() {
    return this.deck.length;
  }
}