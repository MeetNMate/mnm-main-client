<template>
  <div class="hole">
    <div class="top">
  
  </div>
    <div class="content1">
        <p class="user-name">{{Username}}</p>
        <red-button class="profile-bt">profile</red-button>
        <div class="button-area">
          <green-button class="white-bt">같이 살자!</green-button>
        </div>
    </div>
    <div class="content2">
      <div class="chatting-area">
        <div>
          <PersonChatting v-bind:matename="u_matename">{{msg}}</PersonChatting>
        </div>
        <div>
          <user-chatting>{{umsg}}</user-chatting>
        </div>
      </div>
      <div class="input-area">
      </div>
    </div>
  </div>
</template>

<script scoped>
import GreenButton from '../components/green-button.vue'
import MiniLogo from '../components/mini-logo.vue'
import Navigator from '../components/navigator.vue'
import PersonChatting from '../components/person-chatting.vue'
import RedButton from '../components/red-button.vue'
import UserChatting from '../components/user-chatting.vue'

export default {
  name: 'ChattingPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
    Navigator,
    PersonChatting,
    UserChatting,
  },
  data() {
    return {
      Username: 'User',
      msg:'hello',
      u_matename:'',
      umsg:'이제...곧 잘수있어... 벌써 5시...ㅠ',
    }
  }
}

</script>

<style scoped>
.hole {
  max-width: 450px;
  margin: auto;
}
.top {
  background-color: rgb(158, 67, 158);
  height: 5vh;
}

.content1 {
  background-color: rgb(142, 142, 255);
  height: 10vh;
}

.chatting-area {
  height: 70vh;
  overflow: hidden;
  background-color: wheat;
}

.input-area {
  height: 15vh;
  background-color: black;
}

.button-area {
    justify-content: left;
    padding-bottom: 15px;
}

.white-bt {
    background-color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 0px;
}

.user-name {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    text-align: right;
    margin: 0px 10px 0px 0px;
}
.profile-bt {
    position: absolute;
    border-radius: 100px;
    font-family: 'a고딕14';
    font-size: 16px;
    font-weight: bold;
    background-color: red;
    border: solid 2px black;
    height: 35px;
    margin-top: 3px;
}

</style>
