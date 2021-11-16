// import Vue from 'vue'
import { createApp } from 'vue'
import MainPage from './MainPage.vue'
import LoginPage from './LoginPage.vue'
import RegisterPage from './RegisterPage.vue'
import MatchingWaitPage from './MatchingWaitPage.vue'
import HouseLobby from './house-lobby.vue'
import HouseRule from './house-rule.vue'
import HouseReport from './house-report.vue'
import Navigator from './components/navigator.vue'


createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(RegisterPage).mount('#registerpage')
createApp(MatchingWaitPage).mount('#matchingwaitpage')
createApp(HouseLobby).mount('#houselobby')
createApp(HouseRule).mount('#houserule')
createApp(HouseReport).mount('#housereport')
createApp(Navigator).mount('#nav')

// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
