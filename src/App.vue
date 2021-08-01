<template>
  <div id="app">
    <div class="card-deck">
      <div 
        v-for="(card, index) in deck"
        :key="`card-${index}`"
        style="display: inline-block">
        <card :value="card.value" :color="card.color" />
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
        deck.push(new Card({ color, value: `${value}` }));
        if (value > 0) {
          deck.push(new Card({ color, value: `${value}` })); // Two of each except for zero
        }
      }
      deck.push(new Card({ color, value: 'skip' }));
      deck.push(new Card({ color, value: 'skip' }));
      deck.push(new Card({ color, value: 'reverse' }));
      deck.push(new Card({ color, value: 'reverse' }));
      deck.push(new Card({ color, value: '+2' }));
      deck.push(new Card({ color, value: '+2' }));
      return deck;
    }, []);
    
    this.deck.push(new Card({ value: 'wild' }));
    this.deck.push(new Card({ value: 'wild' }));
    this.deck.push(new Card({ value: 'wild' }));
    this.deck.push(new Card({ value: 'wild' }));
    this.deck.push(new Card({ value: 'wild+4' }));
    this.deck.push(new Card({ value: 'wild+4' }));
    this.deck.push(new Card({ value: 'wild+4' }));
    this.deck.push(new Card({ value: 'wild+4' }));
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

.card-deck {
  width: 40rem;
}

::selection {
    color: none;
    background: none;
}
</style>
