<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Font_Awesome_5_solid_heartbeat.svg"
            class="img-fluid"
            alt="Icon"
            width="35"
            height="30"
            style="filter: invert(1)"
          />
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ListData' }" class="nav-link"
            >List Data</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Showgraph' }" class="nav-link"
            >Show Graph</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Search' }" class="nav-link"
            >Search</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Help' }" class="nav-link"
            >Help</router-link
          >
        </li>
      </ul>

      <ul class="navbar-nav">
        <li v-if="!userLoggedIn" class="nav-item">
          <router-link :to="{ name: 'Login' }" class="nav-link"
            >Login</router-link
          >
        </li>
        <li v-if="!userLoggedIn" class="nav-item">
          <router-link :to="{ name: 'Signup' }" class="nav-link"
            >Sign Up</router-link
          >
        </li>
        <li @click="signoutSession" v-if="userLoggedIn" class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Sign Out</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      userLoggedIn: "get_user_loggedIn",
    }),
  },
  methods: {
    async signoutSession() {
      try {
        await this.$store.dispatch("signout");
      } catch (error) {
        this.forgot_password_submission = false;
        return;
      }
    },
  },
};
</script>

<style>
.router-link-exact-active {
  color: #fd7e14 !important;
}

.router-link {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
}
</style>
