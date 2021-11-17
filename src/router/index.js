import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainPage.vue'
import Login from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  { //use router ver1
    path: '/login',
    name: 'Login',
    component: Login
  },
  { //use router ver2
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/RegisterPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
