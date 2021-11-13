<template>
  <mini-logo></mini-logo>
  
</template>

<script>
import MiniLogo from './components/mini-logo.vue'
import Main from './components/red-button.vue'

export default {
  name: 'App',
  components: {
    Main,
    MiniLogo,
    
  }
}
</script>

<style>
#loginpage {
  width: 100%;
  height: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #EABF3A;
  padding: 0;
  margin: 0;
}

template {
  background-color: #EABF3A;
}

</style>
