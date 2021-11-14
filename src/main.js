import { createApp } from 'vue'
import MainPage from './MainPage.vue'
import LoginPage from './LoginPage.vue'
import RegisterPage from './RegisterPage.vue'
import MatchingWaitPage from './MatchingWaitPage.vue'

createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(RegisterPage).mount('#registerpage')
createApp(MatchingWaitPage).mount('#matchingwaitpage')
