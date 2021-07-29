<template>
  <div>
    <div class="card">
      <div 
        :class="[color]"
        class="card-inner">
        <span 
          :class="[value]"
          class="accent accent-top">
          <span v-if="value === 'reverse' || value === 'skip' || value === 'wild+4' || value === '+2' || isNumberType(value) || isPlusTwoType(value)">
            <span v-html="displayValue" />
          </span>
        </span>
        <div
          class="mark">
          <div 
            v-if="value === '+2'"
            class="plus-two-mark" >
            &nbsp;
            <div class="card-one" />
            <div class="card-two" />
          </div>
          <div 
            v-else
            :class="[value, { 'reverse-mark': value === 'reverse' }]" >
            <span v-html="displayValue" />
          </div>
        </div>
        <span
          :class="[value]" 
          class="accent accent-bottom">
          <span v-if="value === 'reverse' || value === 'skip' || value === 'wild+4' || value === '+2' || isNumberType(value) || isPlusTwoType(value)">
            <span v-html="displayValue" />
          </span>
        </span>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      validator(value) {
        return [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '+2', 
          'skip',
          'reverse', 
          'wild', 
          'wild+4'].includes(value);
      },
    },
    color: {
      type: String,
      required: false,
      default: 'black',
      validator(value) {
        return ['black', 'red', 'yellow', 'green', 'blue'].includes(value);
      },
    },
  },
  computed: {
    displayColor() {
      if (this.value.startsWith('wild')) {
        return 'black';
      } else {
        return this.color;
      }
    },

    displayValue() {
      let value = '';
      if (this.value === 'skip') {
        value = '&#8856;';
      } else if (this.value === 'reverse') {
        value = '&#8644;';
      } else if (this.value === 'wild+4') {
        value = '+4';
      } else {
        value = this.value;
      }
      return value;
    },
  },
  methods: {
    isNumberType(value) {
      return [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
      ].includes(value);
    },

    isPlusTwoType(value) {
      return value === '+2';
    },

    isSpecialCard(value) {
      return [
        '+2',
        'reverse',
        'skip',
        'wild',
        'wild+4',
      ].includes(value);
    }
},
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:900);

.card .card-inner.black {
  background-color: #000;
}

.card .card-inner.blue {
  background-color: #0063b3;
}

.card .card-inner.yellow {
  background-color: #e6ca1e;
}

.card .card-inner.red {
  background-color: #c72a18;
}

.card .card-inner.green {
  background-color: #18a849;
}

.card {
  font-family: "Source Sans Pro", sans-serif;
  margin: 2rem;
  display: flex;
  align-items: stretch;
  height: 10rem;
  width: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #aaaaaa;
  color: white;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000,
    1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000,
    0 1px 0 #000000, 4px 4px 0 #000000;
}

.card .card-inner {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex: auto;
  border-radius: 0.5rem;
  margin: 0.25rem;
  overflow: hidden;
  cursor: default;
}

.card .card-inner .accent {
  position: absolute;
  font-size: 1.5rem;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000,
    1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000,
    0 1px 0 #000000, 2px 2px 0 #000000;
}

.card .card-inner .reverse.reverse-mark {
  margin-left: -0.5rem; /* Was looking a little funky on my phone */
}

.card .card-inner .reverse {
  transform: rotate(-50deg);
}

.card .card-inner .accent.accent-top {
  top: 0;
  left: 0.25rem;
}

.card .card-inner .accent.accent-bottom {
  bottom: 0;
  right: 0.25rem;
}

.card .card-inner.black .mark {
  background-color: #fff;
}

.card .card-inner .mark {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 120px 60px / 120px 60px;
  border: 0.25rem solid white;
  height: 75%;
  width: 100%;
  font-size: 4.5rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.card .card-inner .mark .plus-two-mark {
  position: relative;
}

.card .card-inner .mark .plus-two-mark div {
  width: 1.5rem;
  height: 2.5rem;
  border-radius: 0.5rem 0.25rem 0.5rem 0.25rem;
  border: solid black;
  border-width: 5px 5px 3px 3px;
  background-color: white;
  display: inline-block;
  position: absolute;
}

.card .card-inner .mark .plus-two-mark .card-one {
  top: 35%;
  right: 25%;
}

.card .card-inner .mark .plus-two-mark .card-two {
  top: 20%;
  left: 0;
}
</style>
