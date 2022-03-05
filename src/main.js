import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import store from "./store";
import VeeValidatePlugin from "./common/validation";
import { onAuthStateChanged, auth } from "./firebase/database";
import Toaster from "@meforma/vue-toaster";

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .use(VeeValidatePlugin)
      .use(Toaster)
      .use(VueApexCharts)
      .mount("#app");
  }
});

import "bootstrap/dist/js/bootstrap.js";
