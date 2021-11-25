<template>
    <div class="balloon-shadow" id="shadow" >
        <img class= "mini-profile" src='../assets/profile_img.png'>
        <div class= "content">
            <p class="large-size">{{name}}({{age}})</p>
            <p class="user-text">
                <slot></slot>
            </p>
            <div class= "bt-area">
            <red-button @click="ProfilePage" class="mini-button bt1">profile</red-button>
            <red-button @click="ChatPage" class="mini-button bt2">chat!</red-button>
        </div>
        </div>
    </div>
</template>

<script>
import redButton from './red-button.vue'
import axios from 'axios'

export default {
  components: { redButton },
  name: 'single-matelist',
  props: ["name", "age", "uid", "image"],
  data () {
    return {
      mainserve: "http://localhost:5000",
      makeChattingRoom: {
        senderUid: localStorage.getItem('uid'), 
        receiverUid: this.uid,
      }
    }
  },
  methods: {
    ProfilePage() {
        this.$router.push({ 
          name: 'UserProfile', 
          query: { uid: this.uid }
        });
    },
    async ChatPage() {
      const res = await axios.get(this.mainserve+ '/user/chattingRoom/exist', // 채팅방 유무 조회 요청
      {
        params: this.makeChattingRoom, 
        headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}
      });
            
      if(res.data.isExisted) this.$router.push({ 
          name: "Chatting",
          query: {otherid: this.uid, cid: res.data.cid}});
      else {
        const res = await axios.post(this.mainserve+ '/user/chattingRoom/make', // 채팅방 생성 요청
              this.makeChattingRoom, 
               { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')} });
          this.$router.push({ 
            name: "Chatting",
            query: {otherid: this.uid, cid: res.data.chattingRoom.id} 
          });
       }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.balloon-shadow {
  display: flex;
  position:relative;
  width: 95vw;
  min-width: 250px;
  max-width: 400px;
  height: 100%;
  background: #E88827;
  border-radius: 10px 10px 0 10px;
  border: solid 2px #A05E17;
  box-shadow: 5px 9px 0px #A05E17;
  z-index: 100;
  margin: 10px auto 25px;
}

.balloon-shadow:after {
    border-top: 15px solid #E88827;
    border-left: 30px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-15px;
    right: 0px;
    display: block;
    z-index: 2;
}

.balloon-shadow:before {
    border-top: 20px solid #A05E17;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-26px;
    right: -7px;
    display: block;
    z-index: 0;
}

.large-size {
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
}

.mini-profile {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: auto 5px;
}

.content {
    display: inline-block;
    width: 80%;
    text-align: left;
    margin: 6px 6px;
}

.user-text {
  margin-top: 3px;
  margin-bottom:10px;
  max-height: 50px;
  overflow: hidden;
}

.mini-button {
  margin-bottom: 0px;
  font-size: 16px;
}

.bt-area {
  text-align: right;
}
</style>