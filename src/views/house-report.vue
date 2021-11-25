<template>
  <div class="report" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="housename"></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <div v-for="(imtes, i) in housereport" :key="i" @click="ReportPage(i)">
      <reportlist v-bind:user_name="housereport[i].userName" v-bind:status="status"></reportlist>
    </div>
    <!-- <reportlist v-bind:user_name="user_name" v-bind:status="status"></reportlist>
    <reportlist v-bind:user_name="user_name" v-bind:status="status"></reportlist> -->

  </div>

</template>

<script>
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import GreenButton from '../components/green-button.vue'
import navimenu from '../components/navigator.vue'
import reportlist from '../components/report_list.vue'
import axios from 'axios'

export default {
  name: 'HouseReport',
  components: {
    househeader,
    minilogo,
    GreenButton,
    navimenu,
    reportlist
  },
  data() {
    return {
      mainserve: "http://10.14.4.217:5000",
      user_name: 'moosongsong',
      status: '<<평가 대기 중...>>',
      housename: '연희동빨간지붕',
      housereport:[],
    }
  },
  created() {
    axios.get(this.mainserve + 'user/evaluation/1',
    { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}})
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      console.log('data:', res.data.data);
      this.housereport = res.data.data;
      console.log('house id:', this.housereport[0].id);
      console.log('house userName:', this.housereport[0].userName);
      console.log('house name:', this.housereport[0].name);
      // console.log('house id:', this.houselist[0].description);
    })
  },
  methods: {
    ReportPage(i) {
      this.$router.push({
        name: 'HouseMemReport',
        parmas: {houseid: this.houstreport[i].id }
      })
    }
  }
  // methods: {
  //   ReportPage(i) {
  //     this.$router.push({
  //       name: 'HouseMemReport',
  //       params: { houseid: this.housereport[i].id }
  //       // path: '/auth/house/report'})
  //   })
  // },
  // methods: {
  //   ReportPage(i) {
  //     this.$router.push({ path: '/auth/house/report' }),
  //     // name: 'HouseMemReport',
  //     // params: {username: this.housereport[i].userName}
  //     // }
  //   }
  // }
  // created() {
  //   axios.get('http://10.14.4.42:8080/house')
  //   .then((res)=> {
  //     console.log('status code:', res.status);
  //     console.log('data:', res.data);
  //     console.log('data.data:', res.data.data);
  //     this.housename = res.data.data.name;
  //
  //
  //   })
  // }
}
</script>

<style scoped>
  .report {
    height: 100vh;
    }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
  #page_title {
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }
  #title {
    width: 218px;
    height: 40px;
  }

  #btn_report {
    width: 63px;
    height: 25px;
    padding-right: 20px;
    cursor: pointer;
  }
</style>
