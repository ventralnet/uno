<template>
  <div>
    <div class="card">
      <div 
        :class="[cardColor, { 'is-flipped': isFlipped }]"
        class="card-inner">
      <div 
        :class="{ 'reverse-mark': this.value === 'reverse' }" 
        class="accent accent-top" >
        <div v-html="cornerDisplay">
        </div>
      </div>
      
      <div 
        style="line-height: 1.5"
        class="mark">
        <div
          :class="{ 'reverse-mark': this.value === 'reverse' }" >
          <div v-html="markDisplay" />
        </div>
      </div>
      
      <div
        v-html="cornerDisplay" 
        :class="{ 'reverse-mark': this.value === 'reverse' }" 
        class="accent accent-bottom" />
      </div>
    </div>
  </div>  
</template> 

<script>
import Card from '/src/components/Card.js';

export default {
  props: {
    isFlipped: {
      type: Boolean,
      default: false,
    }, 
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
  data() {
    return {
      card: null,
    };
  },
  computed: {
    markDisplay() {
      if (this.isFlipped) {
        return '<div class="card-back-logo">One</div>';
      } else if (this.value === 'wild' || this.value === 'wild+4') {
        return `
        <div style="position: relative;">
          &nbsp;
          <div class="wild-mark-section red"></div>
          <div class="wild-mark-section blue"></div>
          <div class="wild-mark-section yellow"></div>
          <div class="wild-mark-section green"></div>
        </div>
        `;
      } else {
        return `${this.cornerDisplay}`;
      }
    },

    cornerDisplay() {
      let value = '';
      if (this.isFlipped || this.value === 'wild') {
        value = '';
      } else if (this.value === 'skip') {
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

    cardColor() {
      if (this.value.startsWith('wild') || this.isFlipped) {
        return 'black';
      } else {
        return this.color;
      }
    },
  },
  mounted() {
    this.card = new Card({ value: this.value, color: this.color, isFlipped: this.isFlipped });
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

<style>
.card .card-inner .wild-mark-section {
  position: absolute;
  width: 50%;
  height: 50%;
}

.card .card-inner .wild-mark-section.red {
  top: 0;
  left: 0;
}

.card .card-inner .wild-mark-section.blue {
  top: 0;
  right: 0;
}

.card .card-inner .wild-mark-section.yellow {
  bottom: 0;
  left: 0;
}

.card .card-inner .wild-mark-section.green {
  bottom: 0;
  right: 0;
}

.card .card-inner.is-flipped .mark .card-back-logo {
  color: yellow;
  font-size: 3rem;
  margin-top: 15px;
  transform: rotate(-48deg);
  text-shadow: 3px 3px 0 #000000, -3px -3px 0 #000000, -3px 3px 0 #000000,
  3px -3px 0 #000000, 3px 0 0 #000000, -3px 0 0 #000000, 0 -3px 0 #000000,
  0 3px 0 #000000, 2px 2px 0 #000000;
}
</style>

<style>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:900);

.card {
  font-family: "Source Sans Pro", sans-serif;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #aaaaaa;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 7rem;
  padding: 0.5rem;
  box-sizing: border-box;
}

.card-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.card .card-inner .accent {
  position: absolute;
  font-size: 1.5rem;
  line-height: 1rem;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000,
    1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000,
    0 1px 0 #000000, 2px 2px 0 #000000;
}

.card .card-inner .accent.reverse-mark,
.card .card-inner .mark .reverse-mark {
  transform: rotate(-50deg);
  vertical-align: top;
}

.card .card-inner .mark .reverse-mark {
  padding-bottom: 15px; /* HACK: alignment was off on chrome on my pixel 5 */
}

.card .card-inner .accent.accent-top {
  top: 0.35rem;
  left: 0.15rem;
}

.card .card-inner .accent.accent-bottom {
  bottom: 0.5rem;
  right: 0.25rem;
}

.card .card-inner .mark {
  background-color: transparent;
  border-radius: 120px 60px / 120px 60px;
  border: 0.25rem solid white;
  height: 75%;
  width: 100%;
  font-size: 4.5rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
  overflow: hidden;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000,
  1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000,
  0 1px 0 #000000, 2px 2px 0 #000000;
}

/* .card .card-inner .mark .card-back-logo {
} */

.card .card-inner.is-flipped .mark {
  border-color: #c72a18 !important;
  background-color: #c72a18 !important;
}

.card .card-inner.black .mark {
  background-color: #fff;
}
</style>

<style>
  /* colors */

  .black {
    background-color: #000;
  }

  .blue {
    background-color: #0063b3;
  }

  .yellow {
    background-color: #e6ca1e;
  }

  .red {
    background-color: #c72a18;
  }

  .green {
    background-color: #18a849;
  }
</style>
