import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainPage.vue'
import MainAuth from '../views/MainPageAuth.vue'
import Login from '../views/LoginPage.vue'
import MatchingExplane from '../views/InfoExplanePage.vue'
import MatchingSurvey from '../views/InfoInputPage.vue'
import MatchingWait from '../views/MatchingWaitPage.vue'
import MateList from '../views/MateListPage.vue'
import MyPage from '../views/MyPage.vue'
import UserProfile from '../views/UserProfilePage.vue'
import Chatting from '../views/ChattingPage.vue'
import ChattingList from '../views/ChattingListPage.vue'

import HouseLobby from '../views/house-lobby.vue'
import HouseRule from '../views/house-rule.vue'
import HouseReport from '../views/house-report.vue'
import HouseMemReport from '../views/house-mem-report.vue'
import HouseList from '../views/house-list.vue'

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
    component: MatchingWait,
    props: true,
  },
  {
    path:'/auth/matelist',
    name: 'MateList',
    component: MateList,
  },
  {
    path: '/auth',
    name: 'MainAuth',
    component: MainAuth
  },
  {
    path: '/auth/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/auth/userprofile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/auth/chattinglist',
    name: 'ChattingList',
    component: ChattingList
  },
  {
    path: '/auth/chatting',
    name: 'Chatting',
    component: Chatting
  },
  {
    path: '/auth/house/lobby',
    name: 'HouseLobby',
    component: HouseLobby,
    props: true,
  },
  {
    path: '/auth/house/rule',
    name: 'HouseRule',
    component: HouseRule
  },
  {
    path: '/auth/house/report',
    name: 'HouseReport',
    component: HouseReport
  },
  {
    path: '/auth/house/report/member',
    name: 'HouseMemReport',
    component: HouseMemReport
  },
  {
    path: '/auth/house/list',
    name: 'HouseList',
    component: HouseList
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
