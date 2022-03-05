<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Forgot Password</h2>
              <div v-if="!formCorrectlySubmitted">
                <p class="text-white-50 mb-5">Please enter your Details</p>
                <vee-form
                  :validation-schema="forgotPasswordSchema"
                  @submit="resetPassword"
                  :initial-values="userData"
                >
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

                  <p v-if="resetPasswordError" class="lead text-warning mt-2">
                    {{ resetPasswordError }}
                  </p>

                  <button
                    type="submit"
                    :disabled="formCorrectlySubmitted"
                    class="btn btn-outline-light btn-lg px-5"
                    @click="resetPassword"
                  >
                    Reset Password
                  </button>
                </vee-form>
              </div>
              <p v-if="formCorrectlySubmitted" class="lead text-success mt-5">
                A password reset email was sent to your email!
              </p>
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
  name: "LoginForm",
  computed: {
    // getting data from the vuex store
    ...mapState({
      resetPasswordError: (state) => state.auth.resetPasswordError,
      formCorrectlySubmitted: (state) => state.auth.formCorrectlySubmitted,
    }),
  },
  data() {
    return {
      // validation rules
      forgotPasswordSchema: {
        email: "required|min:3|max:100|email",
      },
      userData: {
        email: "",
      },
      // initial value of the form which gets updated
      // when the user types
      email: "",
      forgot_password_submission: false,
    };
  },
  methods: {
    // what is done when you click on the resetPassword button
    async resetPassword() {
      // extracting the values from the data() from above
      const { email } = this;

      try {
        // sending the email value to the resetpassword function
        // in vuex store
        await this.$store.dispatch("resetpassword", { email });
      } catch (error) {
        this.forgot_password_submission = false;
        return;
      }
    },
  },
};
</script>

<style></style>
