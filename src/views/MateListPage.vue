<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>MATE LIST</sub-title>
        <p class="sub-text"> 매칭 알고리즘을 기반으로 {{Username}}님께 추천된 메이트 목록입니다.<br>
        모두들 {{Username}}님의 연락을 기다리고 있어요.<br> 
        chat! 버튼을 눌러 메이트와 연락해보세요!
        </p>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="list-single">
          <SingleMatelist v-bind:name="hname" v-bind:age="hage">{{simpletext}}</SingleMatelist>
        </div>
        <div class="list-single">
          <SingleMatelist v-bind:name="hname" v-bind:age="hage">testestestset나ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ자고싶어ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅠㅠㅠㅠ</SingleMatelist>
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
import GreenButton from '../components/green-button.vue'
import SubTitle from '../components/sub-title.vue'
import Navigator from '../components/navigator.vue'
import SingleMatelist from '../components/single-matelist.vue'

export default {
  name: 'MateListPage',
  components: {
    MiniLogo,
    GreenButton,
    SubTitle,
    Navigator,
    SingleMatelist,
  },
  data() {
    return {
      Username: 'User',
      simpletext: '저와 함께 살 멋쟁이를 구합니다!',
      hage:'25',
      hname:'Haeri Han',
    }
  },
}

</script>

<style scoped>
.button-area {
    justify-content: space-around;
}

.list-single {
  display: block;
}

.sub-text {
  padding-top: 15px;
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
