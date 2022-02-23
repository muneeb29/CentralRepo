import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(VueApexCharts).mount("#app");

import "bootstrap/dist/js/bootstrap.js"