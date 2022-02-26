<template>
  <div>
    <body>
      <div class="row">
        <div class="col border border-3 py-3">
          <h1>Help</h1>
        </div>

        <div class="container-fluid bg light">
          <h4 class="py-3"></h4>

          <div class="col-lg mx-auto">
            <img alt="sitemap" src="../img/sitemap.png" style="width: 100%" />
          </div>

          <div class="container py-5 h-60"></div>
          <div class="row">
            <div class="col border border-3 py-3">
              <h4>Commonly Asked Questions</h4>
            </div>
            <div class="row text-left">
              <div class="container-fluid bg-light py-3">
                <li>How To Reset My Password?</li>
              </div>

              <div class="col py-3 bg-white">
                Click
                <router-link :to="{ name: 'Forgot' }" class="text-black fw-bold"
                  >Forgot Password</router-link
                >
                And Enter Your Details
              </div>
            </div>

            <div class="container bg white"></div>

            <div class="row text-left">
              <div class="container-fluid bg-light py-3">
                <li>How To Create An Account?</li>
              </div>
              <div class="col py-3 bg-white">
                Click
                <router-link :to="{ name: 'Signup' }" class="text-black fw-bold"
                  >Signup</router-link
                >
                And Enter Your Details
              </div>
            </div>
            <div class="row">
              <div class="container-fluid bg-light py-3">
                <li>Where To View The Graphs?</li>
              </div>
              <div class="col py-3 bg-white">
                Click On the Dashboard Section On the Navigation Bar
              </div>
            </div>
            <div class="row">
              <div class="container-fluid bg-light py-3">
                <li>
                  How Many Attempts Before Getting Locked Out From Entering A
                  Incorrect Password?
                </li>
              </div>
              <div class="col py-3 bg-white">You Have A Maximum Of 5 Attempts</div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
