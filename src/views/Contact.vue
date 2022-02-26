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

              <vee-form
                :validation-schema="schema"
                :initial-values="userData"
                @submit.prevent="sendmessage"
              >
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
                  <ResizeAuto>
                    <template v-slot:default="{ resize }">
                      <textarea
                        rows="2"
                        class="form-control form-control-lg"
                        v-model="message"
                        placeholder="Message"
                        @input="resize"
                      ></textarea>
                    </template>
                  </ResizeAuto>

                  <label class="form-label">Message</label>
                  <ErrorMessage class="text-danger mx-2" name="message" />
                </div>

                <p v-if="sendMessageError" class="lead text-warning mt-2">
                  {{ sendMessageError }}
                </p>

                <p v-if="sendMessageSuccess" class="lead text-success mt-2">
                  {{ sendMessageSuccess }}
                </p>

                <button
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  @click="sendmessage"
                >
                  Send
                </button>
              </vee-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResizeAuto from "../common/ResizeAuto.vue";

export default {
  name: "Contact",
  components: {
    ResizeAuto,
  },
  computed: {
    // getting data from the vuex store
    ...mapState({
      sendMessageError: (state) => state.contact.sendMessageError,
      sendMessageSuccess: (state) => state.contact.sendMessageSuccess,
    }),
  },
  data() {
    return {
      // validation rules
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        message: "required",
      },
      userData: {
        name: "",
        email: "",
        message: "Hello",
      },
    };
  },
  methods: {
    // what is done when you click on the sendmessage button
    async sendmessage() {
      // extracting the values from the data() from above
      const { name, email, message } = this;

      try {
        // sending these values to the sendmessage function in vuex store
        await this.$store.dispatch("sendmessage", {
          name,
          email,
          message,
        });
      } catch (error) {
        console.log("An error has happened : ", error);
        return;
      }
    },
  },
};
</script>

<style></style>
