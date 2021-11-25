<template>
  <div id="houselist">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <div class="content1">
        <sub-title>HOUSE LIST</sub-title>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="single-chat-list" v-for="(items, i) in houselist" :key="i" @click="LobbyPage(i)">
          <listyoso v-bind:Username="houselist[i].name" v-bind:Imgvalue="Image">
            {{houselist[i].description}}
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
      // mainserve: "http://10.14.4.217:5000",
      mainserve: "http://localhost:5000",
      Username: '연희동 빨간지붕',
      simpletext: '웰컴투네오존',
      Imgvalue: '',
      Image: '',
      houselist:[],
    }
  },
  async created() {
    await console.log("-------------------------");
    axios.get(this.mainserve + '/house',
      { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}})
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      console.log('data:', res.data.data);
      this.houselist = res.data.data;
      console.log('house1 id:', this.houselist[0].id);
      console.log('house1 id:', this.houselist[0].name);
      console.log('house1 id:', this.houselist[0].description);
    });
  },
  methods: {
    LobbyPage(i) {
      console.log('============house id', this.houselist[i].id);
      this.$router.push({
         name: 'HouseLobby',
         query: {houseid: this.houselist[i].id }
       })
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