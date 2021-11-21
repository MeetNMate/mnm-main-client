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
      mainserve:'172.30.1.22:5050',
      matchingserve:'172.30.1.22:5000',
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
      else {this.checkpw = true;}
      
      if(this.join.password != this.agpw) { alert('비밀번호가 다릅니다.'); return;}
      else if (this.checkid == false) {alert('아이디 형식이 잘못되었습니다.'); return;}
      else if (this.checkpw == false) {alert('비밀번호 형식이 잘못되었습니다.'); return;}
      else{
        
        axios.post('http://' + this.mainserve +'/auth/join', {
          email: this.join.email,
          password: this.join.password
        })
        .then((res) => {
          console.log(`status code: ${res.status}`);
          console.log(`response: ${res.data.response}`);
          console.log(`message: ${res.data.message}`);
          console.log(`data: ${res.data.data}`)
          
          this.get_res.response = res.data.response;
          this.get_res.message = res.data.message;
          this.get_res.data = res.data.data;          
        })
        .then(() => {
           if(this.get_res.response == "success") {
              alert('회원가입 성공! 다시 로그인 해주세요!'); 
              axios.post('http://'+this.matchingserve+'/users', {
                id: this.get_res.data.id
              })
              
              this.$router.push({ path: '/login'})
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