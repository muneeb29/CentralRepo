<template>
<navbar></navbar>

<div class="container p-5 my-5 border bg-secondary text-white">
    <h1 class="text-uppercase">Cardiomyopathy</h1>
    
</div>
<router-view/>


<Footer/>

</template>

<script>
import Navbar  from './components/Navbar.vue'
import Footer  from './components/Footer.vue'

export default ({

      components: {Navbar, Footer}

})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
