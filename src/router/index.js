import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Forgot from "../views/Forgot.vue";
import Help from "../views/Help.vue";
import Notfound from "../views/Notfound.vue";
import AddData from "../views/AddData.vue";
import Showgraph from "../views/Showgraph.vue";
import Search from "../views/Search.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "../store";
import { auth } from "../firebase/database";
import Contact from "../views/Contact.vue";

const requireAuth = (to, from, next) => {
    let user = auth.currentUser;
    // if there is no user, redirect to the login page
    if (!user) {
        next({ name: "Login" });
    } else {
        // if there is a user, proceed to the page
        next();
    }
};

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/forgot",
        name: "Forgot",
        component: Forgot,
    },
    {
        path: "/help",
        name: "Help",
        component: Help,
    },
    {
        path: "/showgraph",
        name: "Showgraph",
        component: Showgraph,
        beforeEnter: requireAuth,
    },
    {
        path: "/addData",
        name: "AddData",
        component: AddData,
        beforeEnter: requireAuth,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        beforeEnter: requireAuth,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: requireAuth,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/:catchAll(.*)",
        name: "Notfound",
        component: Notfound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.matched.some((record) => record.meta.requiresAuth)) {
        next();
        return;
    }

    if (store.state.auth.userLoggedIn) {
        next();
    } else {
        next({ name: "Home" });
    }
});

export default router;