<template>
  <div class="row">
    <div class="col border border-3 py-3">
      <h1>Show Graph</h1>
    </div>

    <div class="py-5 center">
      <line-chart class="border border-2 bg-light"></line-chart>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/database";
import LineChart from "@/graphs/LineChart";
export default {
  components: { LineChart },
  mounted() {
    const currentUserEmail = auth.currentUser.email;
    console.log("currentUser", currentUserEmail);
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
