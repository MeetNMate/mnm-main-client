<template>
  <router-view/>
</template>

<script>
import LoginPageVue from './views/LoginPage.vue'

export default {
  name: 'Main',
  data: function() {
    return {
      mainserverURL:"http://192.168.0.117:5050",
      matchingserverURL:"http://192.168.0.117:5000",
    }
  },
  components: {
    'login': LoginPageVue
  }
}
</script>

<style>
#main {
  width: 100%;
  height: 100%;
  font-family: 'a고딕14';
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
  background-color:  #EABF3A;
}

@font-face {
    font-family: 'a고딕14';
    src: url(./fonts/a고딕14.ttf) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Righteous-Regular';
    src: url(./fonts/Righteous-Regular.ttf) format('woff');
    font-weight: normal;
    font-style: normal;
}

img {
  -webkit-user-drag: none; 
}

.button-area {
  width: 100%;
  max-width: 388px;
  display: flex;
  margin: auto;
  padding-bottom: 20px;
}

#non-click {
    pointer-events: none;
}

input:focus {
    outline:none;
}

*, ::after, ::before {
    box-sizing: border-box;
}
</style>
