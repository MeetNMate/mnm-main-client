<template>
  <mini-logo></mini-logo>
  <div><img class="joinus-img" alt="Join Us" src="./assets/joinus_title.png"> </div>
  <div class="input-text">
    <Textbox msg = "address" ></Textbox>
    <textbox msg = "password" ></textbox>
    <textbox msg = "pass word again" ></textbox>
    <div class="button-area">
        <red-button>register</red-button>
    </div>
  </div>
  <div>
    <img class='bottom-img' alt="Bottom Img" src="./assets/down_image.png">
  </div>
</template>

<script>
import MiniLogo from './components/mini-logo.vue'
import RedButton from './components/red-button.vue'
import Textbox from './components/textbox.vue'

export default {
  name: 'RegisterPage',
  components: {
    MiniLogo,
    RedButton,
    Textbox,
  }
}


</script>

<style>
#registerpage {
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

.bottom-img {
  width: 100%;
  height: 201px;
  padding-top: 5%;
}

.joinus-img {
  width: 100%;
  max-width: 388px;
  height: 91px;
}

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

.button-area {
    width: 100%;
    text-align: right;
}
</style>