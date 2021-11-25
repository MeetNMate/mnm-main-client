<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>MATE LIST</sub-title>
        <p class="sub-text"> 매칭 알고리즘을 기반으로 "{{this.userName}}"님께 추천된 메이트 목록입니다.<br>
        모두들 "{{this.userName}}"님의 연락을 기다리고 있어요.<br> 
        chat! 버튼을 눌러 메이트와 연락해보세요!
        </p>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="list-single" v-for="(info, i) in userRes" :key="i">
          <SingleMatelist v-bind:name="info.name" v-bind:age="info.age" 
          v-bind:uid="info.uid" v-bind:image="info.image">
          {{info.description}}</SingleMatelist>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import GreenButton from '../components/green-button.vue'
import SubTitle from '../components/sub-title.vue'
import Navigator from '../components/navigator.vue'
import SingleMatelist from '../components/single-matelist.vue'
import axios from 'axios'

export default {
  name: 'MateListPage',
  components: {
    MiniLogo,
    GreenButton,
    SubTitle,
    Navigator,
    SingleMatelist,
  },
  data() {
    return {
      // mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
      // matchingserve: "http://ec2-13-209-88-70.ap-northeast-2.compute.amazonaws.com",
      mainserve: "http://localhost:5000", 
      matchingserve: "http://localhost:5555",
      userRes: [],
      response: {
        status:'',
        data:[],
      },
      respose2: {
        status:'',
        data:'',
      },
      obj:'',
      result: [],
      userName: ''
    }
  },
  async created() {
    // 사용자 프로필 요청
    axios.get(this.mainserve+'/user/profile/'+localStorage.getItem('uid') ,
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
    ).then((res) => {
      console.log(res.data);
      this.userName = res.data.data.name;
    });

    // 매칭 수행 및 결과 요청
    const res = await axios.post(this.matchingserve+'/results/'+localStorage.getItem('uid'))
    this.response.status = await res.status;
    this.response.data = await res.data;
    this.result = await this.response.data.split(",");
    console.log(this.result);

    // 매칭 된 메이트 프로필 요청
    this.result.reduce((previous, current, i) => {
      return previous.then(async () => {
        const res1 = await axios.get(this.mainserve+'/user/profile/'+current ,
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
        );
        this.userRes[i] = res1.data.data;
      });
    }, Promise.resolve());
    console.log(this.userRes);
  }
}

</script>

<style scoped>
.button-area {
    justify-content: space-around;
}

.list-single {
  display: block;
}

.sub-text {
  padding-top: 15px;
}

.back-image {
  background-image: url("../assets/backline_image.png");
  background-repeat: repeat;
  height: 100%;
  min-height: 70vh;
  overflow: hidden;
}
.content1 {
  padding-bottom: 10px;
}

.content2 {
  padding-top: 12px;
  padding-bottom: 10px;
}
</style>
