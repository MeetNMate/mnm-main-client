<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>chatting</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="single-chat-list" @click="ChatPage">
          <SingleChatting v-for="(uid, i) in ChatRoom" :key="i" v-bind:Username="User[i].name"
           v-bind:num="ChatRoom[i].number" v-bind:LastTime="ChatRoom[i].sendAt" v-bind:Imgvalue="User[i].image">
            {{ChatRoom[i].message}}
          </SingleChatting>
        </div>
      </div>
      <div class="button-area">
        <green-button>previous</green-button>
        <green-button>next</green-button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import GreenButton from '../components/green-button.vue'
import SubTitle from '../components/sub-title.vue'
import Navigator from '../components/navigator.vue'
import SingleChatting from '../components/single-chatting.vue'
import axios from 'axios'

export default {
  name: 'ChattingListPage',
  components: {
    MiniLogo,
    GreenButton,
    SubTitle,
    Navigator,
    SingleChatting,
  },
  data() {
    return {
      mainserve: this.$root.mainseverURL,
      ChatRoom : [],
      User : {
        name:'',
        image:'',
        uid:'',
      },
    }
  },
  methods: {
    ChatPage() { //채팅방 아이디 같이 넘겨주기
        this.$router.push({ path: '/auth/chatting'})
    },
  },
  created() {
    axios.get(this.mainserve + '/user/chattingRoom', {
      headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') }
    })
    .then((res) => {
      console.log('res.satate:', res.state);
      console.log('res.data:', res.data);
      console.log('res.data.data:', res.data.data);
      this.Chat = res.data.data;  //이거 안되면 matelist처럼 변경
    })
    .catch((err) => {
            console.log(err);
    })
    .then(()=> {  //채팅방목록을 가져온 다음, 메인서버에 다른 유저들의 프로필을 요청함
      for(var i=0; i< Object.keys(this.ChatRoom).length; i++) {
        axios.get(this.mainserve +'/user/profile/'+ this.ChatRoom[i].uid , 
        { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
        )
        .then((res) => {
          console.log(`status code: ${res.status}`);
          console.log(`data: ${res.data}`)
          console.log('data.name:',res.data.name);
          console.log('data.description:',res.data.image);
          this.User[i].name = res.data.name;
          this.User[i].image = res.data.image;
          this.User[i].uid = res.data.uid;
        })
        .then(()=> {
          console.log('this.Chat:', this.Chat);
          console.log('this.User:', this.User);
        })
      }
    });
  }
}

</script>

<style scoped>
.red-button {
    width: 89px;
    height: 28px;
}

.button-area {
    justify-content: space-around;
}

.list-single {
  display: block;
}

.back-image {
  background-image: url("../assets/backline_image.png");
  background-size: 100%;
}
.content1 {
  padding-bottom: 10px;
}

.content2 {
  padding-top: 12px;
  padding-bottom: 10px;
}
</style>
