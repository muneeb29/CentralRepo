<template>
  <navbar></navbar>

  <div class="container p-5 my-5 border bg-secondary text-white rounded">
    <h1 class="text-uppercase">Cardiomyopathy</h1>
  </div>
  <router-view />

  <Footer />
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
