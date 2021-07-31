<template>
  <div id="app">
    <card value="1" color="yellow" />
    <card value="6" color="red" />
    <card value="+2" color="green" />
    <card value="skip" color="blue" :is-flipped="false" />
    <card value="skip" color="green" :is-flipped="true" />
    <card value="reverse" color="green" />
    <card value="wild+4" />
    <card value="wild" /> 
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
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
