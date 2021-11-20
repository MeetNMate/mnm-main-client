<template>
  <mini-logo></mini-logo>
  <div><img class='login-img' alt="Login" src="../assets/login_title.png"> </div>
  <div>
    <div class="input-text">
      <textbox @value="getid" msg = "email address"></textbox>
      <textbox-se @value="getpw" msg = "password"></textbox-se>
    </div>
    <div class="button-area">
      <red-button @click="LoginButton">log in</red-button>
      <red-button @click="ForgotButton">i forgot my password =(</red-button>
    </div>
  </div>
  <div>
    <img class='bottom-img' alt="Bottom Img" src="../assets/down_image.png"> 
  </div>
</template>

<script>
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'
import Textbox from '../components/textbox.vue'
import axios from 'axios'
import TextboxSe from '../components/textbox-se.vue'

export default {
  name: 'LoginPage',
  components: {
    MiniLogo,
    RedButton,
    Textbox,
    TextboxSe,
  },
  data() {
    return {
      loginCheck: 0,
      login: {
        email: '',
        password:'',
        response:'',
        message:'',
        data:'',
        view: false
      }
    }
  },
  methods: {
    getid(value) {
      this.login.email = value;
    },
    getpw(value) {
      this.login.password = value;
    },
    LoginButton() {
      console.log(this.login.email, this.login.pawwsord);
      axios.post('http://localhost:5050/auth/login', {
        email: this.login.email,
        password:this.login.password,
      })
       .then((res) => {
        console.log('status code: ${res.status}');
        console.log('response: ${res.data.response}');
        console.log('message: ${res.data.message}');
        console.log('data: ${res.data.data}')

        this.login.response = res.data.response;
        this.login.message = res.data.message;
        this.login.data = JSON.parse(res.data.data);
        this.login.view = true;
        //login이 정상적으로 됐을 때 토큰 저장 및 통과
        //login이 되지 않으면 에러
        // 로컬스토리지에 토큰 저장
        localStorage.setItem('token', this.login.data.token);
        console.log(localStorage.getItem('token'));

        this.loginCheck = 1;
      })
      .catch(err => {
        console.log(err);
      });
      //this.$router.push({ path: '/matching/explain'}) //id 체크해서 조사 안했으면 matching, 했으면 main    
    },
    ForgotButton() {
      console.log("forgot password...");
    }
  }
}


</script>

<style scoped>
.login-img {
  width: 100%;
  max-width: 388px;
  height: 91px;
  object-fit: cover;
}

.button-area {
    justify-content: space-around;
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
