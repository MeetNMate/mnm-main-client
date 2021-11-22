<template>
  <div class="hole">
    <div class="content1">
        <div class="user-area">
          <p class="user-name">{{Username}}</p> <!--username을 받아와야 하나-->
          <red-button class="profile-bt">profile</red-button>
          <button class="exit" @click="Exitevent">x</button>
        </div>
        <div class="button-area">
          <green-button @click="liveTogether" class="white-bt">같이 살자 요청!</green-button>
          <green-button v-show="res" @click="response" class="white-bt">응답할게요!</green-button>
          <div v-show="!res">
            <green-button @click="Okay" class="white-bt"> 좋아!</green-button>
            <green-button @click="Sorry" class="white-bt">미안;ㅁ;</green-button>
          </div>
        </div>
    </div>

    <div class="content2">
      <div class="chatting-area">
        <div class="add-before" v-for="(chat, index) in beforeChat" :key="index"> <!--for같이 순회하면서 child만들면 됨 uid로 누가 보내는 건지 구분하기-->
          <PersonChatting> {{beforeChat[index].message}} </PersonChatting>
          <!-- item.cid, item.uid 로 접근-->
        </div>
        <div class>
          <PersonChatting v-for="(item, idx) in recvList" :key="idx"> {{item.message}} </PersonChatting>
          <!-- 내가 보내는 말풍선.vue 만들기 아니면 자식으로 id 받아서 local.id랑 비교후 같으면 말풍선 바꾸는 걸로 -->
        </div>
      </div>
      <div class="input-area">
        <textarea class="input-box" v-model="message" @keyup="sendMessage" name="Text1"></textarea>
        <red-button class="sub-bt" @="sendMessage">전송</red-button>
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
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import axios from 'axios'

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
      res: "true",
      mainserve: this.$root.matchingserverURL, 
      uid: '4', //내꺼 uid
      cid: '5', //방 id
      value: '',
      recvList: [],
      beforeChat: [],
      bdfoechat_num: 0,
      otherid: '1', //상대방 ui
      Username: 'eun', //이거 상대방의 이름임;;; 가져오는 방법 생각! 방 생성할때 이름까지 생성해야함
    }
  },
  created() {
        this.connect() // ChattingView.vue 생성 시 소켓 연결 시도
        //여기서 그동안의 채팅내역 리스트 불러오기!
        axios.get(this.mainserve +'/user/chatting/'+ this.cid, {
          headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') }
        })
        .then((res) => {
          console.log(res.data.data);
          this.beforeChat = res.data.data;
          console.log(this.beforeChat[1].cid);
          console.log(this.beforeChat[1].message);  
        })
    },
    methods: {
        sendMessage(e) {
            if(e.keyCode === 13 && this.uid !== '' && this.message !== '') {
                this.send();
                this.message = '';
            }
        },
        send() {
            console.log("Send message:" + this.message);
            if (this.stompClient && this.stompClient.connected) {
                const msg = { 
                user: {
                    id: this.uid
                },
                message: this.message,
                sendAt: Date.now(),
                isRequest: false,
                };
                this.stompClient.send("/receive/" + this.cid, JSON.stringify(msg), {});
            }
        }, 
        connect() {
            let socket = new SockJS(this.mainserve);
            this.stompClient = Stomp.over(socket);
            console.log(`소켓 연결을 시도합니다. 서버 주소: ${this.mainserve}`)
            this.stompClient.connect(
                {},
                frame => {
                this.connected = true;
                console.log('소켓 연결 성공', frame);
                const msg = { ///너무 중요! 없애지 마!
                    uid: this.uid, 
                    cid: this.cid, 
                    sid: socket._transport.url.split('/')[4]
                };
                console.log(JSON.stringify(msg));
                this.stompClient.send("/firstreceive", JSON.stringify(msg), {});
                this.stompClient.subscribe("/send/" + this.cid, res => {
                    console.log('구독으로 받은 메시지 입니다.', res.body);
                    this.recvList.push(JSON.parse(res.body))
                });
                },
                error => {
                console.log('소켓 연결 실패', error);
                this.connected = false;
                } 
            );               
        }, 
        liveTogether() {
          axios.post(this.mainserve + '/user/chatting/'+ this.cid +'/request', 
            { senderUid: this.uid, receiverUid: this.otherid,},
            { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
          )
          .then((res) => {
            console.log("data", res.data);  //이거 내용 확인하고 alert로 띄우기
          })
        },
        Okay() {  //수락
          this.res = true;
          axios.post(this.mainserve + '/user/chatting/'+ this.cid +'/accept', 
            { senderUid: this.uid, receiverUid: this.otherid,},
            { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
          )
          .then((res) => {
            console.log("data", res.data);  //이거 내용 확인하고 alert로 띄우기
          })
        },
        Sorry() { //거절
          this.res = true;
          axios.post(this.mainserve + '/user/chatting/'+ this.cid +'/decilne', 
            { senderUid: this.uid, receiverUid: this.otherid,},
            { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
          )
          .then((res) => {
            console.log("data", res.data);  //이거 내용 확인하고 alert로 띄우기
          })
        },
        Exitevent() {
          this.$router.push({ path: '/auth/chattinglist'})
        },
        response() {
          this.res = false;
        }
    },

}

</script>

<style scoped>
.hole {
  width: 100%;
  max-width: 450px;
  margin: auto;
}

.content1 {
  display: flex;
  flex-direction: column;
  background-color: #ea803a;
  height: 15vh;
  justify-content: center;
}

.chatting-area {
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: #eaac3a;
}

.input-area {
  display: flex;
  width: 100%;
  height: 15vh;
  background-color: #ea803a;
  padding: 5px;
  
}

.sub-bt {
  background-color: #EABF3A;
  font-family: 'a고딕14';
  font-size: 16px;
  margin: auto;
  margin-bottom: 8px;
  padding: 10px 5px 10px;
}

.input-box {
  width: 88%;
  height: auto;
  resize: none;
  margin-right: 5px;
  margin-left: 0px;
  border-radius: 4px;
}

.input-box:focus {
    outline:none;
}

.user-name {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    margin: 15px 8px 5px 48px;
    padding-left: 30px;
    max-height: 10vh;
}
.profile-bt {
    border-radius: 100px;
    font-family: 'a고딕14';
    font-size: 16px;
    font-weight: bold;
    background-color: red;
    border: solid 2px black;
    display: inline-block;
    margin: auto;
}

.user-area {
  position: relative;
  display: block;
  margin: 0px;
}

.exit {
  font-family: 'Righteous-Regular';
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  border: solid 2px black;
  display: inline-block;
  width: inherit;
  position: absolute;
  right: 5px;
  top: 2px;
  padding: 2px 8px 4px 8px;
}

.button-area {
  justify-content: left;
  padding: 0px;
  margin: 0px;
}

.white-bt {
    background-color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 5px 5px 5px;
    margin: 5px 10px 0px 5px;
}
</style>
