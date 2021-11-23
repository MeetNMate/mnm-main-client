<template>
  <div class="house_explanation">
    <div>
      <img id="profile_img1" src="../assets/profile_2.png">
      <img id="profile_img2" src="../assets/profile_2.png">
      <img id="profile_img3" src="../assets/profile_2.png">
    </div>

    <div class="explain_house"> <!--explantion-->
      <p id="explanation" style="display: inline">{{Username}}</p>
      <p style="display: inline"> 님이 함께 사는</p>
      <div>
        <p id="explanation" style="display: inline">{{housename}}</p>
        <p style="display: inline"> House입니다.</p>
      </div>
      <p class="date">{{date}}</p>
      <!--집 이미지-->
      <img id="house_pic" src="../assets/house_pic.png" alt="house picture">
    </div>
  </div>
</template>

<script>
export default {
  name: 'explanation',
  props: {
    Username: String,
    housename: String,
    date: String
  }
}
</script>

<style scoped>
.explain_house {
  padding-bottom: 3%;
  text-align: left;
}
#explanation {
  font-family: a고딕19;
}
#house_pic {
  width: 100%;
  height: 224px;
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
