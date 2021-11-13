import { createApp } from 'vue'
//import App from './App.vue'
import MainPage from './MainPage.vue'
import LoginPage from './Login.vue'

//createApp(App).mount('#app')
createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
