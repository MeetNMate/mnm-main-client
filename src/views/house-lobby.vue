<template>
  <div id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <div class="lobby">
      <househeader></househeader>
      <div>
        <img id="profile_img1" src="../assets/profile_2.png">
        <img id="profile_img2" src="../assets/profile_2.png">
        <img id="profile_img3" src="../assets/profile_2.png">

        <span class="plusMate" v-on:click="addMate">
          <img id="mate_add" src="../assets/mate_add.png">
        </span>
      </div>

      <div class="explain_house">
        <p id="explanation" style="display: inline">Soyoung, Seoki, moosongsong</p>
        <p style="display: inline"> 님이 함께 사는</p>
        <div>
          <p id="explanation" style="display: inline">연희동빨간지붕</p>
          <p style="display: inline"> House입니다.</p>
        </div>
        <p>[2020.10.01~2021.09.30]</p>
        <img id="house_pic" src="../assets/house_pic.png" alt="house picture">
      </div>

      <div class="todolist">
        <img id="guide_bar" src="../assets/todolist.png" alt="todolist_title">
        <li>거실청소(무송)</li>
        <li>가스레인지 청소하기 (서키)</li>
        <li>아침밥 다같이 먹기 - 베이글</li>
        <li>화장실 쓰레기 비우기 (소영)</li>
        <li>계란 한판 사오기 (다같이)</li>
      </div>

      <span class="move_houserule" v-on:click="move_houserule">  <!--나중에 수정-->
        <img id="guide_bar" src="../assets/house_rule.png" alt="house rule">
      </span>

      <span class="leave_thishouse" v-on:click="leave_house">
        <img id="guide_bar" src="../assets/leave_house.png" alt="leave house" href="/auth/house/report">
      </span>
    </div>
  </div>
</template>

<script>
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import navimenu from  '../components/navigator.vue'

export default {
  name: 'HouseLobby',
  components: {
    househeader,
    minilogo,
    navimenu
    // dropdownmenu
  },
  methods: {
    addMate() {
      console.log();
    },
    move_houserule() {
        this.$router.push({ path: 'rule'})
    },
    leave_house() {
        this.$router.push({ path: 'report'})
    },
  }
}
</script>

<style scoped>
  #change-color {
    background-color: #5BB5B5;
  }

  li {
    list-style-type: "\25cb";  /*빈 동그라미*/
    font-family: a고딕14;
    font-size: 14px;
    margin-bottom: 7px;
  }
  
  .lobby {
    padding-left: 20px; /** 5% **/
    padding-right: 20px;
  }
  .explain_house {
    padding-bottom: 3%;
  }
  #house_name {
    font-family: a고딕19;
    font-size: 30px;
    text-align: center;
  }
  #house_title {
    font-size: 30px;
    text-align: center;
  }
  /**이미지 겹치기**/
  #profile_img1 {
    width: 35px;
    height: 35px;
    position: relative;
  }
  #profile_img2 {
    width: 35px;
    height: 35px;
    position: absolute;
    left: 45px;
  }
  #profile_img3 {
    width: 35px;
    height: 35px;
    position: absolute;
    left: 70px;
  }
  #mate_add {
    width: 19px;
    height: 19px;
    position: absolute;
    left: 110px;
    margin-top: 8px;
  }
  #house_pic {
    width: 100%;
    height: 224px;
  }
  #guide_bar {
    width: 194px;
    height: 29px;
    padding-bottom: 5px;
  }
  #explanation {
    font-family: a고딕19;
    font-size: 14px;
  }

</style>
