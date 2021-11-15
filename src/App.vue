<template>
  <div id="app">
    <div id="logo">
      <img alt="mnm logo" src="./assets/logo.png">
    </div>
    <!-- <img alt="mnm logo" src="./assets/mnm_logo.png"> -->
    <house-header></house-header>
    <house-footer></house-footer>
  </div>
</template>

<script>
import house_header from './components/layout/house-header.vue'
import footer from './components/layout/house-footer.vue'


export default {
  name: 'App',
  components: {
    'house-header' : house_header,
    'house-footer' : footer
  }
}
</script>

<style>
  body {
    background-color: #5BB5B5;
  }
  #logo {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  img {
    width: 94px;
    height: 31px;
  }
</style>
