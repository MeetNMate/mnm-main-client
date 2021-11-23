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
          <listyoso v-bind:Username="Username" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
        <div class="single-chat-list">
          <listyoso v-bind:Username="Username" v-bind:Imgvalue="Image">
            {{simpletext}}
          </listyoso>
        </div>
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
import axios from 'axios'

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
      Image: '',
    }
  },
  created() {
    axios.get('http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com:8080/house/1')
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      this.Username = res.data.data.name;
      this.simpletext = res.data.data.description;
      console.log('result:', this.Username);
    })
  },
  methods: {
    LobbyPage() {
      this.$router.push({ path: '/auth/house/lobby'})
    }
  }
}
</script>

<style scoped>
/* .white-button {
  display: block;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  width: 100px;
  display: inline;
  cursor: pointer;
} */
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
  min-height: 70vh;
}
.content1 {
  padding-bottom: 10px;
}

.content2 {
  padding-top: 12px;
  padding-bottom: 10px;
}

@media screen and (min-width: 1025px) {
  #houselist {
    height: 115vh;
  }
}
</style>
