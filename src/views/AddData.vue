<template>
  <div>
    <div class="row">
      <div class="col border border-3 py-3">
        <h1>Add Data</h1>
        <h5>
          Insert Graph Data By Filling In the Forms & Uploading A CSV File
        </h5>
      </div>

      <div class="container bg-white border py-3">
        <graph-data></graph-data>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import GraphData from "./GraphData.vue";
export default {
  components: { GraphData },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
