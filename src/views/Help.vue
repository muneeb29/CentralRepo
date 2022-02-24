<template>
  <div>
    <div class="container bg-light border border-3 py-1">
      <h1>Help</h1>
    </div>

    <body>
      <div class="container-fluid bg light">
        <h4 class="py-3">Sitemap</h4>
      </div>
      <img alt="sitemap" src="../img/sitemap.png" style="width: 100%" />

      <div class="container py-5 h-60"></div>
      <div class="row">
        <h4 class="border border-3 bg-light">Commonly Asked Questions</h4>

        <div class="row text-left border border-3">
          <li>How To Reset My Password?</li>

          <div class="col">
            Click
            <router-link :to="{ name: 'Forgot' }" class="text-black fw-bold"
              >Forgot Password</router-link
            >
            And Enter Your Details
          </div>
        </div>

        <div class="container bg light"></div>

        <div class="row text-left border border-3">
          <li>How To Create An Account?</li>

          <div class="col">
            Click
            <router-link :to="{ name: 'Signup' }" class="text-black fw-bold"
              >Signup</router-link
            >
            And Enter Your Details
          </div>
        </div>
        <div class="row text-left border border-3">
          <li>Where To View The Graphs?</li>

          <div class="col">
            Click On the Graph Section On the Navigation Bar
          </div>
        </div>
        <div class="row text-left border border-3">
          <li>
            How Many Attempts Before Getting Locked Out From Entering A
            Incorrect Password?
          </li>
          <div class="col">You Have A Maximum Of 5 Attempts</div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
