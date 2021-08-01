<template>
  <div id="app">
    <div
      style="width: 75%; text-align: center" 
      class="card-deck">
      <button 
        @click="flipCards">Flip Cards!</button>
      <br />
      <div 
        v-for="(card, index) in deck"
        :key="`card-${index}`"
        style="display: inline-block; margin-right: 1rem;">
        <card :value="card.value" :color="card.color" :is-flipped="card.isFlipped" />
      </div>
    </div> 
  </div>
</template>

<script>
import Card from './components/Card.js'
import CardComponent from "./components/Card.vue";

export default {
  name: "App",
  components: {
    'Card': CardComponent,
  },
  data() {
    return { deck: [] };
  },
  mounted() {
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
  },

  methods: {
    flipCards() {
      this.deck.forEach(card => card.flipCard());
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::selection {
    color: none;
    background: none;
}
</style>
