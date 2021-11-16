<template>
    <mini-logo></mini-logo>
    <main-img></main-img>
    <p> {{}}님을 위한 메이트를 찾고있습니다. <br>
        조금만 기다려주세요! </p>
</template>

<script>
import mainImg from './components/main-img.vue'
import MiniLogo from './components/mini-logo.vue'

export default {
  name: 'MatchingWaitPage',
  components: { mainImg, MiniLogo }
}
</script>

<style>
#matchingwaitpage {
  width: 100%;
  height: 100%;
  font-family: a고딕14, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #CE9E92;
  padding: 0;
  margin: 0;
}

p {
    padding-top: 1%;
    padding-bottom: 1%;
}
</style>
