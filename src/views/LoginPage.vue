<template>
  <mini-logo></mini-logo>
  <div><img class='login-img' alt="Login" src="../assets/login_title.png"> </div>
  <div>
    <div class="input-text">
      <textbox @value="getid" msg = "email address" ></textbox>
      <textbox @value="getpw" msg = "password" ></textbox>
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

export default {
  name: 'LoginPage',
  components: {
    MiniLogo,
    RedButton,
    Textbox,
  },
  data() {
  },
  methods: {
    getid(value) {
      this.id = value;
    },
    getpw(value) {
      this.pw = value;
    },
    LoginButton() {
      console.log(this.id, this.pw);
      this.$router.push({ path: '/matching/explain'}) //id 체크해서 조사 안했으면 matching, 했으면 main
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
}

.button-area {
    justify-content: space-between;
}
</style>

<style>
.input-text {
  display: inline-block;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
}

.red-button {
    width: 89px;
    height: 28px;
}

.bottom-img {
  width: 100%;
  height: 100%;
  padding-top: 5%;
  vertical-align: bottom;
}
</style>
