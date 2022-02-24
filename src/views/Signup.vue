<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Signup</h2>
              <div v-if="!reg_completed">
                <p class="text-white-50 mb-5">Please enter your Details</p>

                <vee-form
                  :validation-schema="schema"
                  @submit="register"
                  :initial-values="userData"
                >
                  <!-- Name -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      type="text"
                      name="name"
                      v-model="name"
                      class="form-control form-control-lg"
                      placeholder="Enter name"
                    />
                    <label class="form-label">Name</label>
                    <ErrorMessage class="text-danger mx-2" name="name" />
                  </div>
                  <!-- Address -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      type="text"
                      name="address"
                      v-model="address"
                      class="form-control form-control-lg"
                      placeholder="Enter address"
                    />
                    <label class="form-label">Address</label>
                    <ErrorMessage class="text-danger mx-2" name="address" />
                  </div>

                  <!-- Telephone -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      type="telephone"
                      name="telephone"
                      v-model="telephone"
                      class="form-control form-control-lg"
                      placeholder="Enter telephone"
                    />
                    <label class="form-label">Telephone</label>
                    <ErrorMessage class="text-danger mx-2" name="telephone" />
                  </div>
                  <!-- Institutional affiliation -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      type="text"
                      name="institutionalaffiliation"
                      v-model="institutionalaffiliation"
                      class="form-control form-control-lg"
                      placeholder="Enter institutional affiliation"
                    />
                    <label class="form-label">Institutional affiliation</label>
                    <ErrorMessage
                      class="text-danger mx-2"
                      name="institutionalaffiliation"
                    />
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

                  <!-- Password -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      name="password"
                      v-model="password"
                      :bails="false"
                      v-slot="{ field, errors }"
                    >
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                        placeholder="Enter Password"
                        v-bind="field"
                      />
                      <div
                        class="text-danger"
                        v-for="error in errors"
                        :key="error"
                      >
                        {{ error }}
                      </div>
                    </vee-field>
                    <label class="form-label">Password</label>
                  </div>
                  <!-- Confirm password -->
                  <div class="form-outline form-white mb-4">
                    <vee-field
                      type="password"
                      name="confirm_password"
                      class="form-control form-control-lg"
                      placeholder="Confirm password"
                    />
                    <label class="form-label">Confirm password</label>
                    <ErrorMessage
                      class="text-danger mx-2"
                      name="confirm_password"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-outline-light btn-lg px-5"
                    @submit="register"
                  >
                    Signup
                  </button>
                </vee-form>
              </div>
            </div>

            <div v-if="registerEmailSuccess" class="card mb-2">
              <div class="card-body">
                <p class="lead text-primary font-weight-bold">
                  {{ registerEmailSuccess }}
                </p>
              </div>
            </div>

            <p v-if="registerEmailError" class="lead text-warning mt-2">
              {{ registerEmailError }}
            </p>
            <p
              v-if="registerDuplicateEmailError"
              class="lead text-warning mt-2"
            >
              {{ registerDuplicateEmailError }}
            </p>

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
import { mapState } from "vuex";

export default {
  name: "RegisterForm",
  computed: {
    // getting data from the vuex store
    ...mapState({
      registerEmailSuccess: (state) => state.auth.registerEmailSuccess,
      registerEmailError: (state) => state.auth.registerEmailError,
      registerDuplicateEmailError: (state) =>
        state.auth.registerDuplicateEmailError,
    }),
  },
  data() {
    return {
      // validation rules
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        institutionalaffiliation: "required",
        email: "required|min:3|max:100|email",
        password: "required|min:3|max:100",
        confirm_password: "passwords_mismatch:@password",
      },
      userData: {
        email: "",
        password: "",
      },
      // initial values of the form which get updated
      // when the user types
      name: "",
      address: "",
      telephone: "",
      institutionalaffiliation: "",
      email: "",
      password: "",
      reg_in_submission: false,
      reg_completed: false,
    };
  },
  methods: {
    // what is done when you click on the register button
    async register() {
      // extracting the values from the data() from above
      const {
        name,
        address,
        telephone,
        institutionalaffiliation,
        email,
        password,
      } = this;

      this.reg_in_submission = true;

      try {
        console.log("registering from the signup component");
        await this.$store.dispatch("register", {
          // sending these values to the register function
          // in vuex store
          name,
          address,
          telephone,
          institutionalaffiliation,
          email,
          password,
        });
      } catch (error) {
        this.reg_in_submission = false;
        return;
      }
    },
  },
};
</script>

<style></style>
