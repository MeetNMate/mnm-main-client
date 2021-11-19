// import Vue from 'vue'
import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'

// import App from './App.vue'

import MainPage from './views/MainPage.vue'
import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'

import InfoExplanePage from './views/InfoExplanePage.vue'
import InfoInputPage from './views/InfoInputPage.vue'
import MatchingWaitPage from './views/MatchingWaitPage.vue'
import MateListPage from './views/MateListPage.vue'

import HouseLobby from './house-lobby.vue'
import HouseRule from './house-rule.vue'
import HouseReport from './house-report.vue'
import HouseMemReport from './house-mem-report.vue'
import HouseMemContent from './house-mem-content.vue'
import Navigator from './components/navigator.vue'
import RuleModal from './components/common/Modal.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import DropdownMenu from '@innologica/vue-dropdown-menu'

createApp(Main).use(router).mount('#main')
createApp(MainPage).use(router).mount('#mainpage')
createApp(LoginPage).use(router).mount('#loginpage')
createApp(RegisterPage).use(router).mount('#registerpage')
createApp(InfoExplanePage).use(router).mount('#infoexplanepage')
createApp(InfoInputPage).use(router).mount('#infoinputpage')
createApp(MatchingWaitPage).use(router).mount('#matchingwaitpage')
createApp(MateListPage).use(router).mount('#matelistpage')
createApp(HouseLobby).use(router).mount('#houselobby')
createApp(HouseRule).use(router).mount('#houserule')
createApp(HouseReport).mount('#housereport')
createApp(HouseMemReport).mount('#housememreport')
createApp(HouseMemContent).mount('#housememcontent')
createApp(Navigator).mount('#navi')
createApp(RuleModal).mount('#rulemodal')
// createApp(DropdownMenu).mount('#dropdownmenu')

// Vue.component('vue-multiselect', window.VueMultiselect.default)
// const app = createApp(App)
// app.component("vue3-star-ratings", vue3StarRatings)
