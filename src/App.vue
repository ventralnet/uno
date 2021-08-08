<template>
  <div id="app">
    <div
      style="width: 75%; text-align: center" 
      class="card-deck">
      <button 
        @click="flipCards">Flip Cards!</button>
      <br />
      <div 
        v-for="(card, index) in shoe.shoe"
        :key="`card-${index}`"
        style="display: inline-block; margin-right: 1rem;">
        <card :value="card.value" :color="card.color" :is-flipped="card.isFlipped" />
      </div>
    </div> 
  </div>
</template>

<script>
import CardComponent from "./components/Card.vue";

import Shoe from './components/Shoe.js';

export default {
  name: "App",
  components: {
    'Card': CardComponent,
  },
  data() {
    return { shoe: [] };
  },
  mounted() {
    this.shoe = new Shoe(2);
    this.shoe.shuffle();
  },

  methods: {
    flipCards() {
      this.shoe.shoe.forEach(card => card.flipCard());
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
