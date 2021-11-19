import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainPage.vue'
import MainAuth from '../views/MainPageAuth.vue'
import Login from '../views/LoginPage.vue'
import MatchingExplane from '../views/InfoExplanePage.vue'
import MatchingSurvey from '../views/InfoInputPage.vue'
import MatchingWait from '../views/MatchingWaitPage.vue'
import MateList from '../views/MateListPage.vue'

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
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path:'/matching/explain',
    name: 'MatchingExplane',
    component: MatchingExplane
  },
  {
    path:'/matching/survey',
    name: 'MatchingSurvey',
    component: MatchingSurvey
  },
  {
    path:'/matching/waiting',
    name: 'MatchingWait',
    component: MatchingWait
  },
  {
    path:'/auth/matelist',
    name: 'MateList',
    component: MateList
  },
  {
    path: '/auth',
    name: 'MainAuth',
    component: MainAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router