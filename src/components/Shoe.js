import Deck from '/src/components/Deck.js';

import shuffle from 'lodash/shuffle';

export default class Shoe {
  constructor(numberOfDecks = 1) {
    this.numberOfDecks = numberOfDecks;
    this.buildShoe();
  }

  buildShoe() {
    this.shoe = [];
    for (let deckNumber = 0; deckNumber < this.numberOfDecks; deckNumber++) {
      this.shoe.push(new Deck().deck);
    }
    this.shoe = this.shoe.flat();
  }

  drawCard() {
    return this.shoe.pop();  
  }

  shuffle() {
    this.shoe = shuffle(this.shoe);
  }
}