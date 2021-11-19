<template>
  <mini-logo></mini-logo>
  <div><img class="joinus-img" alt="Join Us" src="../assets/joinus_title.png"></div>
  <div>
    <div class="input-text">
        <textbox @value="getid" msg = "email address" ></textbox>
        <textbox @value="getpw" msg = "password" ></textbox>
        <textbox @value="againpw" msg = "password again"></textbox>
    </div>
    <div class="button-area">
        <red-button @click="RegButton">register</red-button>
    </div>
  </div>
  <div>
    <img class='bottom-img' alt="Bottom Img" src="../assets/down_image.png">
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'
import Textbox from '../components/textbox.vue'


export default {
  name: 'RegisterPage',
  components: {
    MiniLogo,
    RedButton,
    Textbox,
  },
  data() {
    return {
      join: {
        email:'',
        password:'',
        response:'',
        message:'',
        data:''
      },
      checkid:false,
      checkpw:false,
      agpw:''
    }
  },
  methods: {
    getid(value) {
      this.join.email = value;
    },
    getpw(value) {
      this.join.password = value;
    },
    againpw(value) {
      this.agpw = value;
    },
    RegButton() {
      console.log(this.join.email, this.join.password, this.checkpw);
      if(this.join.email=='') { alert('아이디를 입력해주세요.'); return;}
      else { this.checkid = true;}  //아이디 형식이 올바르면 true주면 됨.
      
      if(this.join.password=='') {alert('비밀번호를 입력해주세요.'); return;}
      else {this.checkpw = true;} //비밀번호 형식이 올바르면 true주는 것 추가
      
      if(this.join.password != this.agpw) { alert('비밀번호가 다릅니다.'); return;}
      else if (this.checkid == false) {alert('아이디 형식이 잘못되었습니다.'); return;}
      else if (this.checkpw == false) {alert('비밀번호 형식이 잘못되었습니다.'); return;}
      else{
        alert('회원가입 중...'); 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(res){
          return res.json();
        })
        .then(function(json){
          console.log(json);
        });
      }
    },
  }
}

</script>

<style scoped>
.joinus-img {
  width: 100%;
  max-width: 388px;
  height: 91px;
}

.button-area {
    justify-content: right;
}
</style>