<template>
  <mini-logo></mini-logo>
  <nevigator></nevigator>
  <div>
    <div class="content1">
        <sub-title>MATE LIST</sub-title>
        <p> 매칭 알고리즘을 기반으로 {{Username}}님께 추천된 메이트 목록입니다.<br>
        모두들 {{Username}}님의 연락을 기다리고 있어요.<br> 
        chat! 버튼을 눌러 메이트와 연락해보세요!
        </p>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="list-single">
          <Matelistsingle name="Haeri Han" age="25">{{simpletext}}</Matelistsingle>
        </div>
        <div class="list-single">
          <Matelistsingle name="Eunjin Cho" age="24">안녕? 나는 잠자는게 취미인 사람이야... 좋은 메이트를 구하고 있어..</Matelistsingle>
        </div>
        <div class="list-single">
          <Matelistsingle name="SongSong Moo" age="24">{{simpletext}}</Matelistsingle>
        </div>
        <div class="list-single">
           <Matelistsingle name="Seokhee Moon" age="24">{{simpletext}}</Matelistsingle>
        </div>
        <div class="list-single">
            <Matelistsingle name="Address Yong" age="24">{{simpletext}}</Matelistsingle>
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

export default {
  name: 'MateListPage',
  components: {
    MiniLogo,
    RedButton,
    GreenButton,
    SubTitle,
    Matelistsingle,
  },
  data() {
    return {
      Username: 'User',
      simpletext: '저와 함께 살 멋쟁이를 구합니다!'
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
</style>

<style>
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