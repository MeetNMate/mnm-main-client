<template>
  <div class="lobby">
    <p id="logo"><img alt="mnm logo" src="./assets/logo.png"></p>  <!--나중에 mini-logo components로 수정-->
    <!-- <navigator></navigator> : navigator 만들고 고고-->

    <div>
      <househeader></househeader>

      <img id="profile_img" src="./assets/profile.png">
      <img id="profile_img" src="./assets/profile.png">
      <img id="profile_img" src="./assets/profile.png">

      <button><img id="mate_add" src="./assets/mate_add.png"></button>
    </div>

    <div class="explain_house">
      <p id="explanation">Soyoung, Seoki, moosongsong</p>
      <p>님이 함께 사는</p>
      <p id="explanation">연희동빨간지붕</p>
      <p>House입니다.</p>
      <p>[2020.10.01~2021.09.30]</p>
    </div>
    <img id="house_pic" src="./assets/house_pic.png" alt="house picture">

    <div class="todolist">
      <img id="guide_bar" src="./assets/todolist.png" alt="todolist_title">
      <li>거실청소(무송)</li>
      <li>가스레인지 청소하기 (서키)</li>
      <li>아침밥 다같이 먹기 - 베이글</li>
      <li>화장실 쓰레기 비우기 (소영)</li>
      <li>계란 한판 사오기 (다같이)</li>
    </div>
    <div class="rule_btn">
      <button><img id="guide_bar" src="./assets/house_rule.png" alt="house rule"></button>
    </div>
    <div class="leave_btn">
      <button><img id="guide_bar" src="./assets/leave_house.png" alt="leave house"></button>
    </div>


  </div>
</template>

<script>
// import mini_logo from './components/mini-logo.vue'
import househeader from './components/layout/house-header.vue'

export default {
  name: 'HouseLobby',
  components: {
    househeader
  }
}
</script>

<style> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  body {
    background-color: #5BB5B5;
  }
  p {
    font-family: a고딕14;
    font-size: 14px;
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
  #profile_img {
    width: 35px;
    height: 35px;
  }
  #mate_add {
    width: 19px;
    height: 19px;
  }
  #house_pic {
    width: 388px;
    height: 224px;
  }
  #guide_bar {
    width: 194px;
    height: 29px;
  }
  #explanation {
    font-family: a고딕19;
    font-size: 14px;
  }

/** logo component 붙이면 지우기 +) img id 어쩌고도 같이 수정**/
  img {
    width: 94px;
    height: 31px;
  }
  #logo {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }

</style>
