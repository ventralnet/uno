<template>
  <div>
    <div class="card">
      <div class="card-inner red">
        <span class="mark">
          3
        </span>
      </div>
    </div>

    <div class="card">
      <div class="card-inner green">
        <span class="mark">
          3
        </span>
      </div>
    </div>

    <div class="card">
      <div class="card-inner yellow">
        <span class="mark">
          3
        </span>
      </div>
    </div>

    <div class="card">
      <div class="card-inner blue">
        <span class="mark">
          3
        </span>
      </div>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style scoped>
.card .card-inner.blue {
  background: #0063b3;
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
  display: flex;
  align-items: stretch;
  height: 10rem;
  width: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #aaaaaa;
}

.card .card-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  border-radius: 0.5rem;
  margin: 0.25rem;
  overflow: hidden;
  background-color: #006383;
}

.card .card-inner .mark {
  background-color: white;
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