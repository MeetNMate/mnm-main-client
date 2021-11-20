<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <img class="profile-img" src='../assets/profile_img.png'>
        <div class="one-line">
            <p class="user-name">{{Username}}</p>
            <button id="non-click"> {{temperature}}</button>
        </div>
        <p class="mid-text">" {{simpletext}} "</p>
    </div>
    <div class="content2">
    
    </div>
    <div class="content3">
      <div>
        <PersonChatting v-bind:matename="u_matename">{{msg}}</PersonChatting>
      </div>
      <div>
        <PersonChatting v-bind:matename="u_matename">{{msg}}</PersonChatting>
      </div>
    </div>
    <div class="button-area">
        <red-button class="white-bt" @click="ChatPage">chat!</red-button>
      </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import Navigator from '../components/navigator.vue'
import PersonChatting from '../components/person-chatting.vue'
import RedButton from '../components/red-button.vue'

export default {
  name: 'UserProfilePage',
  components: {
    MiniLogo,
    RedButton,
    Navigator,
    PersonChatting,
  },
  data() {
    return {
      Userimage: '', 
      Username: 'User',
      simpletext: '저와 함께 살 멋쟁이를 구합니다!',
      temperature: '90도',
      msg: "벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;",
      u_matename: 'eu***',
    }
  },
  methods: {
    ChatPage() {
        this.$router.push({ path: '/auth/chatting'})
    },
  },
}

</script>

<style scoped>
.one-line {
    width: 100%;
    margin: 20px 5px 20px;
}

.user-name {
  position: relative;
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    text-align: right;
    margin: 0px 10px 0px 0px;
}
#non-click {
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

.profile-img {
    display: block;
    width: 148px;
    margin: auto;
}

.button-area {
    justify-content: right;
}

.white-bt {
    background-color: white;
    font-size: 16px;    
}
</style>
