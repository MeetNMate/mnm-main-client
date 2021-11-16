<template>
    <div class="logo_img">
        <img alt="MnM logo" src="./assets/logo.png">  
    </div>
    <p> 하우스메이트 매칭 및 공동 생활 관리 서비스 제공 플랫폼 </p>
    <main-img></main-img>
    <div>
        <red-button>log in</red-button>
        <red-button>join us</red-button>
    </div>
</template>

<script>
import mainImg from './components/main-img.vue'
import RedButton from './components/red-button.vue'

export default {
  name: 'MainPage',
  components: { mainImg, RedButton }
}
</script>

<style>
#mainpage {
  width: 100%;
  height: 100%;
  font-family: a고딕14, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #EABF3A;
  padding: 0;
  margin: 0;
}

img {
    width: 207px;
    height: 67px;
}

.logo_img {
    padding-top: 50px;
}

p {
    padding-top: 1%;
    padding-bottom: 1%;
}

.red-button {
    font-size: 30px;
    width: 148px;
    height: 51px;
}

</style>
