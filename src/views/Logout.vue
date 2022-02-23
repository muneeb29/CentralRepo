<template>
  <div class="container py-5 pb-5 hi-50">
    <h1 class="text-center">You Have Been Logged Out</h1>
  </div>
  <div class="container py-5">
    <h4 href="">Click Here To Login</h4>
    <router-link :to="{ name: 'Login' }" class="text-black fw-bold"
      >Login</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
