<template>
  <div id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader></househeader>
    <div class="lobby">
      <div>
        <img id="profile_img1" src="../assets/profile_2.png">
        <img id="profile_img2" src="../assets/profile_2.png">
        <img id="profile_img3" src="../assets/profile_2.png">

        <!-- <span class="plusMate" v-on:click="addMate">
          <img id="mate_add" src="../assets/mate_add.png">
        </span> -->
      </div>

      <div class="explain_house">
        <p id="explanation" style="display: inline">Soyoung, Seoki, moosongsong</p>
        <p style="display: inline"> 님이 함께 사는</p>
        <div>
          <p id="explanation" style="display: inline">연희동빨간지붕</p>
          <p style="display: inline"> House입니다.</p>
        </div>
        <p>[2020.10.01~2021.09.30]</p>
        <!--집 이미지-->
        <img id="house_pic" src="../assets/house_pic.png" alt="house picture">
      </div>

      <div class="todolist">
        <red-button class="pink-button">TODO LIST</red-button>
        <li>거실청소(무송)</li>
        <li>가스레인지 청소하기 (서키)</li>
        <li>아침밥 다같이 먹기 - 베이글</li>
        <li>화장실 쓰레기 비우기 (소영)</li>
        <li>계란 한판 사오기 (다같이)</li>
      </div>

      <red-button class="pink-button ruleB" @click="move_houserule">HOUSE RULE →</red-button>
      <red-button class="pink-button leaveB" @click="leave_house">Leaving this house</red-button>

    </div>
  </div>
</template>

<script>
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import navimenu from  '../components/navigator.vue'
import RedButton from '../components/red-button.vue'

export default {
  name: 'HouseLobby',
  components: {
    househeader,
    minilogo,
    navimenu,
    RedButton
  },
  methods: {
    // addMate() {
    //   console.log();
    // },
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
  .pink-button {
    background-color: #ED8883;
    width: 194px;
    height: 29px;
    padding-bottom: 5px;
    border-radius: 10px;
    text-align: left;
    font-family: 'Righteous-regular';
    margin-left: 0;
  }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
  li {
    list-style-type: "\25cb";  /*빈 동그라미*/
    font-family: a고딕14;
    margin-bottom: 7px;
  }

  .lobby {
    padding-left: 20px;
    padding-right: 20px;
  }
  .explain_house {
    padding-bottom: 3%;
    text-align: left;
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
  #house_pic {
    width: 100%;
    height: 224px;
  }
  #subtitle,
  #guide_bar {
    width: 194px;
    height: 29px;
    padding-bottom: 5px;
  }
  #explanation {
    font-family: a고딕19;
  }

  /**이미지 겹치기**/
  #profile_img1 {
    width: 35px;
    height: 35px;
    /* position: left; */
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
    cursor: pointer;
  }
/** 프로필 이미지 겹치기 끝 **/

  @media screen and (min-width: 768px) and (max-width: 1024px){
    #house_pic {
      width: 470px;
    }
    .lobby {
      margin-left: 18%;
    }
    #profile_img2,
    #profile_img3 {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    #house_pic {
      width: 470px;
    }
    .lobby {
      height: 110vh;
      margin-left: 30%;
      margin-right: 35%;
    }
    #profile_img2,
    #profile_img3 {
      display: none;
    }
  }
</style>
