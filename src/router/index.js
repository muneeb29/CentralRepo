import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Graphs from '../views/Graphs.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Help from '../views/Help.vue'
import Notfound from '../views/Notfound.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: Graphs
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: Notfound,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router