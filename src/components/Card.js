export default class Card {
  constructor({ value, color = 'black', isFlipped = false }) {
    this.value = value;
    this.color = color;
    this.isFlipped = isFlipped;
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
