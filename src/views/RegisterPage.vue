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
import axios from 'axios'

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
      // mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
      // matchingserve: "http://ec2-13-209-88-70.ap-northeast-2.compute.amazonaws.com/",
      mainserve: "http://localhost:5000",
      matchingserve: "http://localhost:6000",
      join: {
        email:'',
        password:'',
      },
      get_res: {
        response:'',
        message:'',
        data:'',
      },
      get_res_sub: {
        response:'',
      },
      checkid:false,
      checkpw:false,
      agpw:''
    }
  },
  methods: {
    getid(value) {  //아이디 체크
      this.join.email = value;
      let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      this.checkid = re.test(this.join.email);
    },
    getpw(value) {  //비밀번호 체크
      this.join.password = value;
    },
    againpw(value) {  //비밀번호 재확인
      this.agpw = value;
    },
    RegButton() { //예외처리들 함
      console.log(this.join.email, this.join.password, this.checkid, this.checkpw);
      if(this.join.email=='') { alert('아이디를 입력해주세요.'); return;}
      
      if(this.join.password=='') {alert('비밀번호를 입력해주세요.'); return;}
      else {this.checkpw = true;}
      
      if(this.join.password != this.agpw) { alert('비밀번호가 다릅니다.'); return;}
      else if (this.checkid == false) {alert('아이디 형식이 잘못되었습니다.'); return;}
      else if (this.checkpw == false) {alert('비밀번호 형식이 잘못되었습니다.'); return;}
      else{
        
        axios.post(this.mainserve +'/auth/join', 
          { email: this.join.email,
            password: this.join.password}
        )
        .then((res) => {
          console.log('join status code:', res.status);
          console.log('join response:', res.data.response);
          console.log('join message:', res.data.message);
          console.log('data:', res.data.data);
          
          this.get_res.response = res.data.response;
          this.get_res.message = res.data.message;
          this.get_res.data = res.data.data;          
        })
        .then(() => { //회원가입 성공했을 때, 매칭서버에도 id를 보내 정보생성
           if(this.get_res.response == "success") {
              axios.post(this.matchingserve+'/users', {
                id: this.get_res.data.id
              })
              .then(() => {
                alert('회원가입 성공! 다시 로그인 해주세요!'); 
                this.$router.push({ path: '/login'});
              })
            }
            else {
              alert(this.get_res.message); 
            }
        });
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