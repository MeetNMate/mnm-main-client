<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <sub-title>MATE LIST</sub-title>
        <p class="sub-text"> 매칭 알고리즘을 기반으로 {{Username}}님께 추천된 메이트 목록입니다.<br>
        모두들 {{Username}}님의 연락을 기다리고 있어요.<br> 
        chat! 버튼을 눌러 메이트와 연락해보세요!
        </p>
    </div>
    <div class="back-image">
      <div class="content2">
        <div class="list-single" v-for="(info, i) in userRes" :key="i">
          <SingleMatelist v-bind:name="info.name" v-bind:age="info.age" 
          v-bind:uid="info.user.id" v-bind:image="info.image">
          {{info.message}}</SingleMatelist>
        </div>
      </div>
      <!-- <div class="button-area">
        <green-button>previous</green-button>
        <green-button>next</green-button>
      </div> -->
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
      mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
      matchingserve: "http://ec2-13-209-88-70.ap-northeast-2.compute.amazonaws.com",
      userRes: [],
      response: {
        status:'',
        data:[],
      },
      respose2: {
        status:'',
        data:'',
      },
      test:10,
      obj:'',
      result: [],
    }
  },
  async created() {
    this.test = await localStorage.getItem('uid');

    const res = await axios.post(this.matchingserve+'/results/' + localStorage.getItem('uid'))
    this.response.status = await res.status;
    this.response.data = await res.data;
    this.result = await this.response.data.split(",");

    console.log(this.result);

    this.result.reduce((previous, current, i) => {
      return previous.then(async () => {
        const res1 = await axios.get(this.mainserve+'/user/profile/'+ current ,
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
        );
        this.userRes[i] = res1.data.data;
        console.log(this.userRes[i].user.id);
      });
    }, Promise.resolve());
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
  min-height: 55vh;
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
