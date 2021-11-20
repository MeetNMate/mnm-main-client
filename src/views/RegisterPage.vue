<template>
  <mini-logo></mini-logo>
  <div><img class="joinus-img" alt="Join Us" src="../assets/joinus_title.png"></div>
  <div>
    <div class="input-text">
        <textbox @value="getid" msg = "email address" ></textbox>
        <textbox-se @value="getpw" msg = "password" ></textbox-se>
        <textbox-se @value="againpw" msg = "password again"></textbox-se>
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
import TextboxSe from '../components/textbox-se.vue'
import Textbox from '../components/textbox.vue'
//import axios from 'axios'

export default {
  name: 'RegisterPage',
  components: {
    MiniLogo,
    RedButton,
    Textbox,
    TextboxSe,
  },
  data() {
    return {
      join: {
        email:'',
        password:'',
        response:'',
        message:'',
        data:'',
        view: false
      },
      checkid:false,
      checkpw:false,
      agpw:''
    }
  },
  methods: {
    getid(value) {
      this.join.email = value;
      let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      this.checkid = re.test(this.join.email);
    },
    getpw(value) {
      this.join.password = value;
    },
    againpw(value) {
      this.agpw = value;
    },
    RegButton() {
      console.log(this.join.email, this.join.password, this.checkid, this.checkpw);
      if(this.join.email=='') { alert('아이디를 입력해주세요.'); return;}
      
      if(this.join.password=='') {alert('비밀번호를 입력해주세요.'); return;}
      else {this.checkpw = true;} //비밀번호 형식이 올바르면 true주는 것 추가
      
      if(this.join.password != this.agpw) { alert('비밀번호가 다릅니다.'); return;}
      else if (this.checkid == false) {alert('아이디 형식이 잘못되었습니다.'); return;}
      else if (this.checkpw == false) {alert('비밀번호 형식이 잘못되었습니다.'); return;}
      else{
        /*
        axios.post('http://localhost:5050/auth/join', {
          email: this.join.email,
          password: this.join.password
        })
        .then((res) => {
          console.log(`status code: ${res.status}`);
          console.log(`response: ${res.data.response}`);
          console.log(`message: ${res.data.message}`);
          console.log(`data: ${res.data.data}`)
          
          this.join.response = res.data.response;
          this.join.message = res.data.message;
          this.join.data = res.data.data;
          this.join.view = true;  //이거 오류없으면(로그인 승낙되면) true로 바뀌는 걸로 수정
        });*/
        this.join.view = true; 
      }
      
      if(this.join.view == true) {
        alert('회원가입 성공!'); 
        this.$router.push({ path: '/matching/explain'})
      }

    }
  }
}

</script>

<style scoped>
.joinus-img {
  width: 100%;
  max-width: 388px;
  height: 91px;
  object-fit: cover;
}

.button-area {
    justify-content: right;
}

.bottom-img {
  width: 100%;
  padding-top: 5%;
  vertical-align: bottom;
  object-fit: cover;
}

.input-text {
  display: inline-block;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
}
</style>