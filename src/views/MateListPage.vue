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
        <div class="list-single" v-for="(info, i) in UserRes" :key="i">
          <SingleMatelist v-bind:name="userRes[i].name" v-bind:age="userRes[i].age" 
          v-bind:uid="userRes[i].uid" v-bind:image="userRes[i].image">
          {{userRes[i].message}}</SingleMatelist>
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
      matchingserve: "http://ec2-13-209-88-70.ap-northeast-2.compute.amazonaws.com/",
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
  created() {
    this.test = localStorage.getItem('uid');
    axios.post(this.matchingserve+'/results/' + localStorage.getItem('uid'))
    .then((res) => {  //매칭서버에 매칭결과 요청 (성공하면 응답이 리스트형태로 들어옴)
        console.log(`status code: ${res.status}`);
        console.log(`data: ${res.data}`)
        this.response.status = res.status;
        this.response.data = res.data;
        console.log('now data:', this.response.data );
        console.log('response.data[0]', this.response.data[0]);
      //String을 ,로 파싱해가지고 넣어야 함
      this.result = this.response.data.split(",");
        for(var i= 0; i< this.test; i++) {
          console.log('sibal[i]:  ', this.result[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .then(()=> {  //매칭 결과를 가져온 다음, 메인서버에 다른 유저들의 프로필을 요청함
        var jsonData = JSON.parse(this.response.data);
        for (var i = 0; i < jsonData.length; i++) {
            var counter = jsonData;
            console.log(counter);
        }

        axios.get('/user/profile/'+ this.resopnse.data ,
        { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
        )
        .then((res) => {
          console.log(`status code: ${res.status}`);
          console.log(`data: ${res.data}`)
          this.response2.status = res.status;
          this.response2.data = res.data;
          console.log('this.response2.data',this.response2.data);
          console.log('this.response2.data.name',this.response2.data.name);
          console.log('this.response2.data.description',this.response2.data.description);
          // this.userRes[i].name = this.response2.data.name;
          // this.userRes[i].description = this.response2.data.description;
          // this.userRes[i].age = this.response2.data.age;
          // this.userRes[i].image = this.response2.data.image;
          // this.userRes[i].uid = this.response2.data.uid;
          this.userRes[i] = this.response2.data;
        })
        .then(()=> {
          console.log('this.userRes', this.userRes);
        })
      }
    );
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
