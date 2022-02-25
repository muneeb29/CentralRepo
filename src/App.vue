<template>

  <navbar></navbar>
  <div class="py-2"></div>
  <router-view />
  <Footer/>
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
  font-family: Arial, Helvetica, sans-serif, Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
