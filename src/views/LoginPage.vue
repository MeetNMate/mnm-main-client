<template>
  <mini-logo></mini-logo>
  <div><img class='login-img' alt="Login" src="../assets/login_title.png"> </div>
  <div>
    <div class="input-text">
      <textbox msg = "address" ></textbox>
      <textbox msg = "password" ></textbox>
    </div>
    <div class="button-area">
      <red-button>log in</red-button>
      <red-button>i forgot my password =(</red-button>
    </div>
  </div>
  <div><img class='bottom-img' alt="Bottom Img" src="../assets/down_image.png"> </div>
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
    return {
      
    }
  }
}

</script>

<style>
#loginpage {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #EABF3A;
  padding: 0;
  margin: 0;
}
/*
.bottom-img {
  width: 100%;
  height: 201px;
  padding-top: 5%;
}
*/
.login-img {
  width: 100%;
  max-width: 388px;
  height: 91px;
}
/*
.red-button {
    width: 89px;
    height: 28px;
}

.input-text {
  display: inline-block;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
}
*/

.button-area {
    width: 100%;
    text-align: left;
}

</style>
