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
  },
  data() {
    return {
      Username: 'User'
    }
  }
}

</script>

<style scoped>
.red-button {
    width: 89px;
    height: 28px;
}

.button-area {
    justify-content: space-around;
}
</style>
