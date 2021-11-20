<template>
  <mini-logo></mini-logo>
  <nevigator></nevigator>
  <div>
    <div class="content1">
        <img class="profile-img" src='../assets/profile_img.png'>
        <div class="one-line">
            <p class="big-text">{{Username}}</p>
            <button class="non-click"> 90℃</button>
        </div>
        <p class="mid-text">" {{simpletext}} "</p>
    </div>
    <div class="content2">
      <div class="content2">
        
      </div>
      <div class="button-area">
        <red-button>previous</red-button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import RedButton from '../components/red-button.vue'

export default {
  name: 'UserProfilePage',
  components: {
    MiniLogo,
    RedButton,
  },
  data() {
    return {
      Username: 'User',
      simpletext: '저와 함께 살 멋쟁이를 구합니다!'
    }
  }
}

</script>

<style scoped>
.red-button {
    width: 89px;
    height: 28px;
}

.button-area {
    justify-content: space-around;
}

.list-single {
  display: block;
}

.non-click {
    
    border-radius: 100px;
    font-family: 'a고딕14';
    font-size: 20px;
    font-weight: bold;
    background-color: red;
    border: solid 2px black;
    padding: 2px 4px 2px;
    margin: 4px 10px 4px;
}

.big-text {
    font-size: 32px;
    font-weight: bold;
    width: 50%;
    display: inline-block;
    text-align: right;
    margin: 20px 5px 5px;
}

.mid-text {
    font-size: 17px;
}
.one-line {
    max-width: 400px;
    margin: auto;
}

.profile-img {
    width: 148px;
}
</style>
