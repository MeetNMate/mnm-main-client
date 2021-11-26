<template>
  <div class="report" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="houseName"></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <reportlist 
      v-for="(user, i) in profileList" 
      :key="i" 
      v-bind:userId="user.id"
      v-bind:userName="user.name" 
      v-bind:status="status"
      v-bind:houseName="houseName"
      v-bind:houseId="houseId"
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
      userList: [], 
      profileList: []
    }
  }, 
  async created() {
    // 하우스 정보 요청
    axios.get(this.mainserve+'/house/'+this.houseId)
    .then((res) => {
      console.log("하우스 정보 요청", res.data);
      this.houseName = res.data.data.name;
    });

    // 미평가 메이트 요청
    const res1 = await axios.get(this.mainserve+"/evaluation/"+this.houseId, 
      { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')} })
    console.log("미평가 메이트 요청", res1.data);
    this.userList = res1.data.data;

    if (this.userList.length == 0) {
      // 하우스 나가기 요청
      await axios.delete(this.mainserve+"/house/"+this.houseId, {
        headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') }
      }).then((res) => {
        console.log("하우스 나가기 요청", res.data.data);
        alert("평가를 모두 완료하였습니다.");
        this.$router.push({name: 'HouseList'});
      })
    }
    else {
      // 미평가 메이트 프로필 요청
      this.userList.reduce((previous, current) => {
        return previous.then(async () => {
          const res2 = await axios.get(this.mainserve+"/user/profile/"+current.id, 
            { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')} })
          console.log("미평가 메이트 프로필 요청", res2.data);
          this.profileList.push({id: res2.data.data.user.id, name: res2.data.data.name}); 
        });
      }, Promise.resolve());
      console.log(this.profileList);
  }
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
