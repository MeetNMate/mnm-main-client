<template>
  <img alt="MnM logo" src="./assets/logo.png">
  <HelloWorld msg="하우스메이트 매칭 및 공동 생활 관리 서비스 제공 플랫폼"/>
</template>

<script>
import main_page from './components/.vue'

export default {
  name: 'App',
  components: {
    Main_page
  }
}
</script>

<style>
#app {
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

</style>
