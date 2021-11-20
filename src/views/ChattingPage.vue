<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <p>{{Username}}</p>
        <red-button>profile</red-button>
    </div>
    <div class="chatting-area">
      <div class="content2">
        
      </div>
      <div class="button-area">
        <green-button class="white-bt">너 나랑 살자!</green-button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import GreenButton from '../components/green-button.vue'
import MiniLogo from '../components/mini-logo.vue'
import Navigator from '../components/navigator.vue'
import RedButton from '../components/red-button.vue'

export default {
  name: 'ChattingPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
    Navigator,
  },
  data() {
    return {
      Username: 'User',
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
    justify-content: center;
}

.white-bt {
    background-color: white;
    font-weight: bold;
    padding: 2px 35px 2px;
    
}
</style>
