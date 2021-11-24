<template>
  <mini-logo></mini-logo>
  <div><img class='login-img' alt="Login" src="../assets/login_title.png"> </div>
  <div>
    <div class="input-text">
      <textbox @value="getid" msg = "email address"></textbox>
      <textbox-se @value="getpw" msg = "password"></textbox-se>
    </div>
    <div class="button-area">
      <red-button @click="ForgotButton">i forgot my password =(</red-button>
      <red-button @click="LoginButton">log in</red-button>
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
      // mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
      mainserve: "http://10.14.6.36:5050",
      loginCheck: 0,
      login: {
        email: '',
        password:'',
      },
      get_res: {
        response:'',
        message:'',
        data:'',
      },
      user_id:'',
    }
  },
  methods: {
    getid(value) {
      this.login.email = value;
    },
    getpw(value) {
      this.login.password = value;
    },
    LoginButton() { //메인서버에 로그인 요청
      console.log(this.login.email, this.login.password);
      console.log(this.mainserve+'/auth/login');
      axios.post(this.mainserve+'/auth/login', {
        email: this.login.email,
        password:this.login.password,
      })
      .then((res) => {
        console.log(`status code: ${res.status}`);
        console.log(`response: ${res.data.response}`);
        console.log(`message: ${res.data.message}`);
        console.log(`data: ${res.data.data}`);

        this.get_res.response = res.data.response;
        this.get_res.message = res.data.message;
        this.get_res.data = res.data.data;
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        if(this.get_res.response == "success") {  //login이 정상적으로 됐을 때 토큰 저장 및 통과
          this.user_id= this.get_res.data.uid;
          localStorage.setItem('token', this.get_res.data.token); // 로컬스토리지에 토큰 저장
          localStorage.setItem('uid', this.user_id); // 로컬스토리지에 uid 저장
          console.log(localStorage.getItem('token'));
          console.log(localStorage.getItem('uid'));
          this.loginCheck = 1;
        }
        else { //login이 되지 않으면 에러
          alert(this.get_res.message); return;
        }
      })
      .then(( )=> {
        console.log(this.loginCheck)
        console.log(this.user_id)
        
        if(this.loginCheck == 1) {  //설문조사를 했는 지 확인
          axios.get(this.mainserve+'/user/profile/'+this.user_id, {
            headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') }
          })
          .then((res2) => {
            console.log(`status code: ${res2.status}`);
            console.log('response:', res2.data.response);
            console.log('resdddd:', res2.data);
            this.get_res.response = res2.data.response;
          })
          .then(()=> {
            if(this.get_res.response == "success") {  //매칭정보가 있을 때 main page
              this.$router.push({ path: '/auth'})
            }
            else { //매칭정보 없으면 matching page
              this.$router.push({ path: '/matching/explain'})
            }
          })
          .catch(err => {
            console.log(err);
          });
        }
      })
    },
    ForgotButton() {
      alert('준비중인 서비스 입니다...');
      console.log('PW 잊어버림...');
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
