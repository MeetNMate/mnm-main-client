<template>
  <mini-logo></mini-logo>
  <nevigator></nevigator>
  <div class="main_content">
    <div>
        <p>image image image image</p>
        <p> 매칭 알고리즘을 기반으로 {{Username}}님께 추천된 메이트 목록입니다.<br>
        모두들 {{Username}}님의 연락을 기다리고 있어요.<br> 
        chat! 버튼을 눌러 메이트와 연락해보세요!
        </p>
    </div>
    <div class="button-area">
      <green-button>previous</green-button>
      <green-button>next</green-button>
    </div>
  </div>
  <div> </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'
import GreenButton from '../components/green-button.vue'

export default {
  name: 'MateListPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
  }
}

</script>

<style>
#matelistpage {
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

.red-button {
    width: 89px;
    height: 28px;
}

/*
.button-area {
    width: 100%;
    text-align: left;
}
*/
</style>
