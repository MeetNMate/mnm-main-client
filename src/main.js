// import Vue from 'vue'
import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'
// import App from './App.vue'

// import DropdownMenu from '@innologica/vue-dropdown-menu'

import MainPage from './views/MainPage.vue'
//import LoginPage from './views/LoginPage.vue'
//import RegisterPage from './views/RegisterPage.vue'

//import InfoExplanePage from './views/InfoExplanePage.vue'
//import InfoInputPage from './views/InfoInputPage.vue'
//import MatchingWaitPage from './views/MatchingWaitPage.vue'

import MainPageAuth from './views/MainPageAuth.vue'
//import MateListPage from './views/MateListPage.vue'
//import UserProfile from './views/UserProfilePage.vue'
//import MyPage from './views/MyPage.vue'
import ChattingList from './views/ChattingListPage.vue'
import Chatting from './views/ChattingPage.vue'

import HouseLobby from './views/house-lobby.vue'
import HouseRule from './views/house-rule.vue'
import HouseReport from './views/house-report.vue'
import HouseMemReport from './views/house-mem-report.vue'
import HouseMemContent from './views/house-mem-content.vue'

import Navigator from './components/navigator.vue'
import RuleModal from './components/common/Modal.vue'

//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap"

// import DropdownMenu from '@innologica/vue-dropdown-menu'

createApp(Main).use(router).mount('#main')
createApp(MainPage).use(router).mount('#mainpage')
//createApp(LoginPage).use(router).mount('#loginpage')
//createApp(RegisterPage).use(router).mount('#registerpage')
//createApp(InfoExplanePage).use(router).mount('#infoexplanepage')
//createApp(InfoInputPage).use(router).mount('#infoinputpage')
//createApp(MatchingWaitPage).use(router).mount('#matchingwaitpage')
createApp(MainPageAuth).use(router).mount('#mainauthpage')
//createApp(MateListPage).use(router).mount('#matelistpage')
//createApp(UserProfile).use(router).mount('#userprofile')
//createApp(MyPage).use(router).mount('#mypage')
createApp(ChattingList).use(router).mount('#chattinglist')
createApp(Chatting).use(router).mount('#chatting')

createApp(HouseLobby).use(router).mount('#houselobby')
createApp(HouseRule).use(router).mount('#houserule')
createApp(HouseReport).mount('#housereport')
createApp(HouseMemReport).mount('#housememreport')
createApp(HouseMemContent).mount('#housememcontent')

createApp(RuleModal).mount('#rulemodal')
createApp(Navigator).mount('#navi')
// createApp(DropdownMenu).mount('#dropdownmenu')

// Vue.component('vue-multiselect', window.VueMultiselect.default)
// const app = createApp(App)
// app.component("vue3-star-ratings", vue3StarRatings)
