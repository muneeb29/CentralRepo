<template>
  <div>
    <h1>Welcome To The User Dashboard</h1>

    <div class="py-5 center" >
      <line-chart class="border border-2 bg-light"></line-chart>
    </div>

    <div class="container bg-light border">
      <add-data></add-data>
      <br />
      <br />
    </div>

    <div class="container py-5 hi-10"></div>
    <div class="container bg-light border">
      <search> </search>
    </div>
  </div>
</template>

<script>
import LineChart from "@/graphs/LineChart";
import AddData from "./AddData.vue";
import Search from "./Search.vue";
export default {
  components: { LineChart, AddData, Search },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
