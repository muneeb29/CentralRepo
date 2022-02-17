<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">
                Please enter your login and password
              </p>

              <div class="form-outline form-white mb-4">
                <input
                  type="email"
                  id="emailID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  id="passwordID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2">
                             <router-link
                :to="{ name: 'Forgot' }"
                class="text-white-50 fw-bold"
                >Forgot Password</router-link
              >
              </p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">
                Login
              </button>
            </div>

            <div>
              <p class="mb-0">Don't have an account?</p>

              <router-link
                :to="{ name: 'Signup' }"
                class="text-white-50 fw-bold"
                >Signup</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
