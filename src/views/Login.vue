<template>
  <div class="container py-5 h-100" id="login_form">
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
                  v-model="email"
                  name="email"
                  type="email"
                  id="emailID"
                  class="form-control form-control-lg"
                  placeholder="Enter Email"
                  test-data-id="Enter-Email"
                />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  v-model="password"
                  :disabled="!passwordInputEnabled"
                  name="password"
                  type="password"
                  id="passwordID"
                  class="form-control form-control-lg"
                  placeholder="Enter Password"
                  test-data-id="Enter-Password"
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

              <p v-if="loginError" class="lead text-warning mt-2">
                {{ loginError }}
              </p>

              <button
                class="btn btn-outline-light btn-lg px-5"
                type="submit"
                @click="login"
                test-data-id="submitLogin"
              >
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
import { mapState } from "vuex";

export default {
  name: "RegisterForm",
  computed: {
    // getting data from the vuex store
    ...mapState({
      userLoggedIn: (state) => state.auth.userLoggedIn,
      loginError: (state) => state.auth.loginError,
      passwordInputEnabled: (state) => state.auth.passwordInputEnabled,
    }),
  },
  data() {
    return {
      // validation rules
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        telephone: "required",
        address: "required|min:3|max:100",
        age: "required|min_value:18|max_value:100",
        password: "required|min:3|max:100",
        confirm_password: "passwords_mismatch:@password",
        country: "required|country_excluded:Antarctica",
      },
      userData: {
        country: "United Kingdom",
        email: "",
        password: "",
      },
      // initial values of the form which get updated
      // when the user types
      email: "",
      password: "",
      reg_in_submission: false,
    };
  },
  methods: {
    // what is done when you click on the login button
    async login() {
      // extracting the values from the data() from above
      const { email, password } = this;
      this.reg_in_submission = true;

      try {
        // sending these values to the login function in vuex store
        await this.$store.dispatch("login", { email, password });

        // if there is a logged in user, redirect to the homepage
        if (this.userLoggedIn) {
          this.$router.push("Dashboard");
        }
      } catch (error) {
        this.reg_in_submission = false;
        return;
      }
    },
  },
};
</script>

<style></style>
