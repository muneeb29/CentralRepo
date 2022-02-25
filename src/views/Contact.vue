<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Contact us</h2>
              <p class="text-white-50 mb-5">
                Send a message and we will get back to you within 24 hours.
              </p>

              <!-- Name -->
              <div class="form-outline form-white mb-4">
                <vee-field
                  type="text"
                  name="name"
                  v-model="name"
                  class="form-control form-control-lg"
                  placeholder="Enter Name"
                />
                <label class="form-label">Name</label>
                <ErrorMessage class="text-danger mx-2" name="name" />
              </div>

              <!-- Email -->
              <div class="form-outline form-white mb-4">
                <vee-field
                  type="email"
                  name="email"
                  v-model="email"
                  class="form-control form-control-lg"
                  placeholder="Enter Email"
                />
                <label class="form-label">Email</label>
                <ErrorMessage class="text-danger mx-2" name="email" />
              </div>

              <!-- Message -->
              <div class="form-outline form-white mb-4">
                <vee-field
                  type="text"
                  name="message"
                  v-model="message"
                  class="form-control form-control-lg"
                  placeholder="Message"
                  
                />
                <label class="form-label">Message</label>
                <ErrorMessage
                  class="text-danger mx-2"
                  name="message"
                />
              </div>

              <p v-if="loginError" class="lead text-warning mt-2">
                {{ loginError }}
              </p>

              <button
                class="btn btn-outline-light btn-lg px-5"
                type="submit"
                @click="login"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style></style>
