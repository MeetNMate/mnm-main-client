<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>chatting</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="list-single">
          <Matelistsingle name="Haeri Han" age="25">{{simpletext}}</Matelistsingle>
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

export default {
  name: 'ChattingListPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
    SubTitle,
    Matelistsingle,
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
    justify-content: space-between;
}

.list-single {
  display: block;
}
</style>
