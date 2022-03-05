<template>
  <div class="all_content">
    <navbar></navbar>
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.all_content {
  margin-bottom: 80px;
}
</style>
