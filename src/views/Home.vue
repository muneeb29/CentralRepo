<template>
  <div>
    <div class="container bg-light border border-4 text-capitalize">
      <h3>Welcome To this Cardiomyopathy Research Application</h3>
    </div>

    <body>
      <div class="container text-black-70 rounded py-4">
        <p>
          Cardiomyopathy is a disease of the heart muscle that makes it harder
          for your heart to pump blood to the rest of your body. The most common
          forms of cardiomyopathy are Hypertrophic Cardiomyopathy, Dilated
          Cardiomyopathy and Arrhythmogenic right ventricular Cardiomyopathy.
          These cardiomyopathies occur due to mutations in genes that encode
          certain proteins in the cells of the heart.
        </p>

      </div>
    </body>

    <div>
      <Suspense>
        <template #default>
          <News />
        </template>

        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import News from "@/components/News.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { News },
  computed: {
    ...mapState({
      userLoggedIn: (state) => state.auth.userLoggedIn,
    }),
  },
  created() {
    if (this.userLoggedIn) {
      this.$toast.show(`Welcome back to the app!`, {
        position: "top",
        duration: 3000,
      });
    }
  },
};
</script>

<style>

</style>
