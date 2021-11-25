<template>
  <div class="report" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="houseName"></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <reportlist 
      v-for="(user, i) in userList" 
      :key="i" 
      v-bind:userName="user.name" 
      v-bind:status="status"
      v-bind:houseName="houseName"
    ></reportlist>

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
      mainserve: "http://localhost:5000",
      houseId: this.$route.query.houseid,
      userId: localStorage.getItem('uid'),
      user_name: 'moosongsong',
      status: '<<평가 대기 중...>>',
      houseName: '연희동빨간지붕', 
      userList: []
    }
  }, 
  created() {
    // 하우스 정보 조회
    axios.get(this.mainserve+'/house/'+this.houseId)
    .then((res) => {
      console.log("하우스 정보 조회", res.data);
      this.houseName = res.data.data.name;
      res.data.data.users.forEach((user) => {
        if (user.id != this.userId) this.userList.push(user); // 본인 제외
      });
    });
  }
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
