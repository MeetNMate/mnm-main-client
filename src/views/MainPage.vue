<template>
    <div class="logo_img" @click="Logo">
        <img alt="MnM logo" src="../assets/logo.png">  
    </div>
    <p> 하우스메이트 매칭 및 공동 생활 관리 서비스 제공 플랫폼 </p>
    <main-img></main-img>
    <div class="button-area">
        <red-button class="big-button" @click="LoginPage">log in</red-button>
        <red-button class="big-button" @click="RegisterPage">join us</red-button>
    </div>
    <div class="foot"></div>
</template>

<script>
import mainImg from '../components/main-img.vue'
import RedButton from '../components/red-button.vue'

export default {
  name: 'MainPage',
  components: {
       mainImg,
       RedButton,
  },
  data() {
      return {
      }
  },
  methods: {
    Logo() {
        this.$router.push({ path: '/'})
    },
    LoginPage() {
        this.$router.push({ path: 'login'})
    },
    RegisterPage() {
        this.$router.push({path: 'register'})
    },
  },
};
</script>

<style scoped>
img {
    width: 207px;
    height: 67px;
}

.logo_img {
    padding-top: 40px;
    padding-bottom: 30px;
}

.big-button {
    font-size: 30px;
}

.button-area {
    justify-content: space-around;
}

.foot {
    min-height: 80px;
}

</style>
