<template>
    <div id ="change-color">
      <mini-logo></mini-logo>
      <navigator></navigator>
      <div>
        <div class="s-title"><sub-title>my page</sub-title></div>
        <div class="dobby-content">
          <img class="dobby_img" alt="Dobby image" src="../assets/dobby_image.png">
          <p>개인정보 수정을 원하시나요? <br>
            버튼을 누르면 매칭 정보 수집을 다시 진행합니다!
          </p>
        </div>
        <div class="buttons">
          <red-button class="white-btn" @click = "changeinfo">매칭정보 변경</red-button>
          <red-button class="white-btn" @click = "changepw">비밀번호 변경</red-button>
        </div>
      </div>
      
    </div>
</template>

<script>
import Navigator from '../components/navigator.vue'
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'
import SubTitle from '../components/sub-title.vue'

export default {
  name: 'MyPage',
  components: { 
    MiniLogo, 
    Navigator,
    SubTitle,
    RedButton,
  },
  data() {
    return {
      Username: 'User'
    }
  },
  methods: {
    changeinfo() {
      alert("준비중 입니다..");
    },
    changepw() {
      alert("준비중인 서비스입니다..");
    },
  }
}
</script>

<style scoped>
#change-color {
  background-color: #CE9E92;
}

.s-title {
  display: block;
  margin: auto;
}

.dobby_img {
    display: block;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 6px;
    width: 117px;
    height: 166px;
}

.dobby-content {
  padding-top: 80px;
  padding-bottom: 30px;
}

.white-btn {
  display: block;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  margin-bottom: 10px;
}

.buttons {
  min-height: 35vh;
  padding-bottom: 50px;
}
</style>
