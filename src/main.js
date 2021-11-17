import { createApp } from 'vue'
import MainPage from './MainPage.vue'
import LoginPage from './LoginPage.vue'
import RegisterPage from './RegisterPage.vue'
import MatchingWaitPage from './MatchingWaitPage.vue'
import InfoExplanePage from './InfoExplanePage.vue'
import InfoInputPage from './InfoInputPage.vue'
import MateListPage from './MateListPage.vue'

createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(RegisterPage).mount('#registerpage')
createApp(MatchingWaitPage).mount('#matchingwaitpage')
createApp(InfoExplanePage).mount('#infoexplanepage')
createApp(InfoInputPage).mount('#infoinputpage')
createApp(MateListPage).mount('#matelistpage')
