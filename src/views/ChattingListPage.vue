<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>chatting</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="single-chat-list">
          <talk-box>{{simpletext}}</talk-box>
          <talk-box>{{simpletext}}</talk-box>
          <talk-box>{{simpletext}}</talk-box>
          <talk-box>{{simpletext}}</talk-box>
          <talk-box>{{simpletext}}</talk-box>
        </div>
      </div>
      <div class="button-area">
        <green-button>previous</green-button>
        <green-button>next</green-button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'
import GreenButton from '../components/green-button.vue'
import SubTitle from '../components/sub-title.vue'
import Matelistsingle from '../components/matelist-single.vue'
import Navigator from '../components/navigator.vue'
import TalkBox from '../components/talk-box.vue'

export default {
  name: 'ChattingListPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
    SubTitle,
    Matelistsingle,
    Navigator,
    TalkBox,
  },
  data() {
    return {
      Username: 'User',
      simpletext: '아 안녕ㅇㅇㅇㅇㅇㅇㅇ 나는ㄴㄴㄴㄴㄴ 너무ㅜㅜㅜㅜ 힘들어..;ㅁ;아아아아아 안녕ㅇ'
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

.list-single {
  display: block;
}

.back-image {
  background-image: url("../assets/backline_image.png");
  background-size: 100%;
}
.content1 {
  padding-bottom: 10px;
}

.content2 {
  padding-top: 12px;
  padding-bottom: 10px;
}
</style>
