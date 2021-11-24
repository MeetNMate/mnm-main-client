<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>chatting</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="single-chat-list" v-for="(item, i) in this.Room" :key="i">
          <SingleChatting v-if="exist" v-bind:Username="this.User[i].name" v-bind:num="this.Room[i].number"
           v-bind:LastTime="this.Room[i].sendAt" v-bind:Imgvalue="this.User[i].image" @click="ChatPage(i)">
            {{this.Room[i].message}}
          </SingleChatting>
        </div>
      </div> 
      <!-- <div class="button-area">
        <green-button>previous</green-button>
        <green-button>next</green-button>
      </div> -->
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
      // mainserve: 'http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com',
      mainserve: "http://localhost:5000",
      ChatRoom : [],
      User: [{
        name:'',
        image:'',
      }],
      Room: [{
        uid:'',
        number:'',
        sendAt:'',
        message:'',
      }],
      exist: false,
    }
  },
  async created() {
    const res = await axios.get(this.mainserve + '/user/chattingRoom', {
      headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') }
    });
    try {
      console.log('res.satate:', res.state);
      console.log('res.data:', res.data);
      console.log('res.data.data:', res.data.data);
      this.ChatRoom = res.data.data;  //이거 안되면 matelist처럼 변경
    }
    catch(err) {
            console.log(err);
    }

    //채팅방목록을 가져온 다음, 메인서버에 다른 유저들의 프로필을 요청함
    this.len = await Object.keys(this.ChatRoom).length;
    console.log('length: ', this.len);

    // console.log('ChatRoom 1: ', this.ChatRoom[0].id);
    this.ChatRoom.reduce((previous, current, i) => {
      return previous.then(async () => {
        const res1 = await axios.get(this.mainserve +'/user/chattingRoom/'+ current.id + '/latest', 
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
        );
        this.Room[i] = await res1.data.data;

        if (this.Room.length != 0) {
          this.exist = true;
          const res2 = await axios.get(this.mainserve +'/user/profile/'+ this.Room[i].uid , 
            { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
          );
          this.User[i] = await res2.data.data;
        }
      });
    }, Promise.resolve());

  },
  methods: {
    ChatPage(index) { //채팅방 아이디 같이 넘겨주기
        this.$router.push({ 
          name: "Chatting",
          params: {otherid: this.Room[index].uid, cid:this.ChatRoom[index].id} 
        })
    },
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
  background-repeat: repeat;
  height: 100%;
  min-height: 65vh;
  overflow: hidden;
}
.content1 {
  padding-bottom: 10px;
}

.content2 {
  padding-top: 12px;
  padding-bottom: 10px;
}
</style>
