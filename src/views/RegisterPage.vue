<template>
  <mini-logo></mini-logo>
  <div><img class="joinus-img" alt="Join Us" src="../assets/joinus_title.png"></div>
  <div>
    <div class="input-text">
        <textbox @value="getid" msg = "email address" ></textbox>
        <textbox @value="getpw" msg = "password" ></textbox>
        <textbox @value="againpw" msg = "password again" ></textbox>
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
  methods: {
    getid(value) {
      this.id = value;
    },
    getpw(value) {
      this.pw = value;
    },
    againpw(value) {
      this.agpw = value;
    },
    RegButton() {
      console.log(this.id, this.pw, this.agpw);
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