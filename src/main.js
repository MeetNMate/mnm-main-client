import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'

import MainPage from './views/MainPage.vue'
import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import MainPageAuth from './views/MainPageAuth.vue'

import InfoExplanePage from './views/InfoExplanePage.vue'
import InfoInputPage from './views/InfoInputPage.vue'
import MatchingWaitPage from './views/MatchingWaitPage.vue'

import MateListPage from './views/MateListPage.vue'
import UserProfile from './views/UserProfilePage.vue'
import MyPage from './views/MyPage.vue'
import ChattingList from './views/ChattingListPage.vue'
import Chatting from './views/ChattingPage.vue'

createApp(Main).use(router).mount('#main')
createApp(MainPage).use(router).mount('#mainpage')
createApp(LoginPage).use(router).mount('#loginpage')
createApp(RegisterPage).use(router).mount('#registerpage')
createApp(InfoExplanePage).use(router).mount('#infoexplanepage')
createApp(InfoInputPage).use(router).mount('#infoinputpage')
createApp(MatchingWaitPage).use(router).mount('#matchingwaitpage')
createApp(MateListPage).use(router).mount('#matelistpage')
createApp(MainPageAuth).use(router).mount('#mainauthpage')
createApp(UserProfile).use(router).mount('#userprofile')
createApp(MyPage).use(router).mount('#mypage')
createApp(ChattingList).use(router).mount('#chattinglist')
createApp(Chatting).use(router).mount('#chatting')