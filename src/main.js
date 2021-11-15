// import Vue from 'vue'
import { createApp } from 'vue'
// import App from './App.vue'
import MainPage from './MainPage.vue'
import LoginPage from './LoginPage.vue'
import HouseLobby from './house-lobby.vue'
import HouseRule from './house-rule.vue'
import HouseReport from './house-report.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'  : 부트스트랩이 Vue 2 까지만 지원 어쩌구라서 계속 에러뜨는 ,,ㅜ
// import { router } from 'vue-router' : router는 미루기.....
// import VueRouter from 'vue-router'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// createApp(App).mount('#app')
createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(HouseLobby).mount('#houselobby')
createApp(HouseRule).mount('#houserule')
createApp(HouseReport).mount('#housereport')

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(VueRouter)

// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
