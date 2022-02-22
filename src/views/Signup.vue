<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Signup</h2>
              <p class="text-white-50 mb-5">Please enter your Details</p>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="nameID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="nameID">Name</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="email"
                  id="emailID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="emailID">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="telephone"
                  id="telephoneID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="telephoneID">Telephone</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="institutionID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="institutionID">Institutional Affiliation</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="addressID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="addressID">Address</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  id="passwordID"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="passwordID">Password</label>
              </div>
              <button class="btn btn-outline-light btn-lg px-5" type="submit">
                Signup
              </button>
            </div>

            <div>
              <p class="mb-0">Already have an account?</p>

              <router-link :to="{ name: 'Login' }" class="text-white-50 fw-bold"
                >Login</router-link
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

<style></style>
