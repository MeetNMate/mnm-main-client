<template>
    <div id ="change-color">
      <mini-logo></mini-logo>
      <main-img></main-img>
      <p> {{Username}}님을 위한 메이트를 찾고있습니다. <br>
          조금만 기다려주세요! </p>
    </div>
</template>

<script>
import mainImg from '../components/main-img.vue'
import MiniLogo from '../components/mini-logo.vue'

export default {
  name: 'MatchingWaitPage',
  components: { 
    mainImg, MiniLogo 
  },
  data() {
    return {
      Username: 'User'
    }
  }
  
}
</script>

<style scoped>
#change-color {
  background-color: #CE9E92;
}

p {
    padding-top: 1%;
    padding-bottom: 1%;
    margin: 0px;
}
</style>
