// import Vue from 'vue'
import { createApp } from 'vue'
// import Router from 'vue-router'
import MainPage from './MainPage.vue'
import LoginPage from './LoginPage.vue'
import RegisterPage from './RegisterPage.vue'
import MatchingWaitPage from './MatchingWaitPage.vue'
import HouseLobby from './house-lobby.vue'
import HouseRule from './house-rule.vue'
import HouseReport from './house-report.vue'
import HouseMemReport from './house-mem-report.vue'
import HouseMemContent from './house-mem-content.vue'
import Navigator from './components/navigator.vue'
import NavBar from './components/navbar.vue'
import RuleModal from './components/common/Modal.vue'
// import Content from './components/common/modal_content.vue'
// import MemReport from './components/common/modal_report.vue'




createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(RegisterPage).mount('#registerpage')
createApp(MatchingWaitPage).mount('#matchingwaitpage')
createApp(HouseLobby).mount('#houselobby')
createApp(HouseRule).mount('#houserule')
createApp(HouseReport).mount('#housereport')
createApp(HouseMemReport).mount('#housememreport')
createApp(HouseMemContent).mount('#housememcontent')
createApp(Navigator).mount('#navi')
createApp(NavBar).mount('#navbar')
createApp(RuleModal).mount('#rulemodal')
// createApp(Content).mount('#content')
// createApp(MemReport).mount('#memreport')


// Vue.use(Router)
//
// export default new Router({
//   mode: 'history',    //아니면 hash
//   routes: [
//     {
//       path: '/house-lobby.vue',
//       name: 'house list',
//       component: HouseLobby
//     }
//   ]
// })

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'house list',
//       component: HouseLobby
//     }
//   ]
// })
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
