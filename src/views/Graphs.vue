<template>
  <h3>Graphs</h3>
  <div class="">
    <line-chart class=" border bg-light center"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/graphs/LineChart";

export default {
  components: {
    LineChart,
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
