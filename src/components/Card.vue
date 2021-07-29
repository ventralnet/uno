<template>
  <div>
    <!-- <div class="card">
      <div class="card-inner red">
        <span class="mark">
          {{ cardNumber }}
        </span>
      </div>
    </div> -->

    <div class="card">
      <div class="card-inner red">
        <span class="accent accent-top">
          {{ cardNumber }}
        </span>
        <span class="mark">
          {{ cardNumber }}
        </span>
        <span class="accent accent-bottom">
          {{ cardNumber }}
        </span>
      </div>
    </div>

    <!-- <div class="card">
      <div class="card-inner yellow">
        <span class="mark">
          {{ cardNumber }}
        </span>
      </div>
    </div>

    <div class="card">
      <div class="card-inner blue">
        <span class="mark">
          {{ cardNumber }}
        </span>
      </div>
    </div> -->
  </div>
</template> 

<script>
export default {
  data() {
    return {
      cardNumber: 7, // TODO: This will be a prop
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:900);

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
  font-family: 'Source Sans Pro', sans-serif;
  margin: 2rem;
  display: flex;
  align-items: stretch;
  height: 10rem;
  width: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #aaaaaa;
  color: white;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000, 1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000, 0 1px 0 #000000, 4px 4px 0 #000000;
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
  background-color: #006787;
}

.card .card-inner .accent {
  position: absolute;
  font-size: 1.25rem;
  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000, 1px -1px 0 #000000, 1px 0 0 #000000, -1px 0 0 #000000, 0 -1px 0 #000000, 0 1px 0 #000000, 2px 2px 0 #000000;
}

.card .card-inner .accent.accent-top {
  top: 0;
  left: 0.5rem;
}

.card .card-inner .accent.accent-bottom {
  bottom: 0;
  right: 0.5rem;
}

.card .card-inner .mark {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 120px 60px / 120px 60px;
  border: .25rem solid white;
  height: 75%;
  width: 100%;
  font-size: 4.5rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

/* .card .card-inner .mark {
   display: inline-block;
   vertical-align: middle;
   background-color: white;
   line-height: 1.4;
   margin: auto;
   font-size: 100px;
   vertical-align: middle;
   border-radius: 100px 60px / 120px 60px;
   width: 100%;
   height: 50%;
 } */
</style>
