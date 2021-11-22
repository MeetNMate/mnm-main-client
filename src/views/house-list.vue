<template>
  <div id="houselist">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <div class="content1">
        <sub-title>HOUSE LIST</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="single-chat-list" @click="LobbyPage">
          <listyoso v-bind:Username="Username" v-bind:num="num" v-bind:LastTime="LastTime" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:num="num" v-bind:LastTime="LastTime" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:num="num" v-bind:LastTime="LastTime" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:num="num" v-bind:LastTime="LastTime" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
      </div>
      <div class="button-area">
        <green-button class="white-button">previous</green-button>
        <green-button class="white-button">next</green-button>
      </div>
    </div>
  </div>
</template>

<script>
import minilogo from '../components/mini-logo.vue'
import navimenu from  '../components/navigator.vue'
import listyoso from '../components/list-yoso.vue'
import GreenButton from '../components/green-button.vue'
import SubTitle from '../components/sub-title.vue'

export default {
  name: 'HouseList',
  components: {
    minilogo,
    navimenu,
    listyoso,
    GreenButton,
    SubTitle,
  },
  data() {
    return {
      Username: '연희동 빨간지붕',
      simpletext: '웰컴투네오존',
      Imgvalue: '',
      num: '127',
      LastTime: '1:27am',
      Image: '',
    }
  },
  methods: {
    LobbyPage() {
      this.$router.push({ path: '/auth/house/lobby'})
    }
  }
}
</script>

<style scoped>
.white-button {
  display: block;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  width: 100px;
  display: inline;
  cursor: pointer;
}
#houselist {
  background-color: #5BB5B5;
  height: 100vh;
}
/* .red-button {
    width: 89px;
    height: 28px;
} */

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
