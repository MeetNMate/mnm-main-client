
import { createApp } from 'vue'
import MainPage from './views/MainPage.vue'
import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import MatchingWaitPage from './views/MatchingWaitPage.vue'
import InfoExplanePage from './views/InfoExplanePage.vue'
import InfoInputPage from './views/InfoInputPage.vue'
import MateListPage from './views/MateListPage.vue'

createApp(MainPage).mount('#mainpage')
createApp(LoginPage).mount('#loginpage')
createApp(RegisterPage).mount('#registerpage')
createApp(MatchingWaitPage).mount('#matchingwaitpage')
createApp(InfoExplanePage).mount('#infoexplanepage')
createApp(InfoInputPage).mount('#infoinputpage')
createApp(MateListPage).mount('#matelistpage')
