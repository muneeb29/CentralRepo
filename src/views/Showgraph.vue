<template>
       <div class="row">
      <div class="col border border-3 py-3">
        <h1>Show Graph</h1>
      </div>

      <div class="container">
        <div class="row py-3">
          <div class="col">
            <h4>Forms Of Cardiomyopathy</h4>
          </div>
            <div class="col">
            <h4>Mutated Gene Types</h4>
          </div>
            <div class="col">
            <h4>X-Axis Of Experimental Data</h4>
          </div>
            <div class="col">
            <h4>Y-Axis Of Experimental Data</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div class="col">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div class="col">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div class="col">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>

   <div class="py-5 center">
      <line-chart class="border border-2 bg-light"></line-chart>
    </div>
       </div>
</template>

<script>
import LineChart from "@/graphs/LineChart";
export default {
 components: { LineChart },
}
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>