<template>
  <div>
    <h1>Welcome To The User Dashboard</h1>

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
import AddData from "./AddData.vue";
import Search from "./Search.vue";
export default {
  components: { AddData, Search },
};
</script>

<style></style>
