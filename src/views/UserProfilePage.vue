<template>
  <mini-logo></mini-logo>
  <navigator></navigator>
  <div>
    <div class="content1">
        <img v-bind:src="imageSrc" class="profile-img">
        <!-- <img class="profile-img" src="../assets/profile_img.png"> -->
        <div class="one-line">
            <p class="user-name">{{name}}</p>
            <button id="non-click"> {{temperature}}</button>
        </div>
        <p class="mid-text">" {{description}} "</p>
    </div>

    <div class="content2">
      <userinfo v-bind:gender="gender" v-bind:age="age" v-bind:MBTI="MBTI" v-bind:smoking="smoking" v-bind:with_pet="with_pet" v-bind:bug="bug"></userinfo>
    </div>

    <div class="content3">
      <div>
        <PersonReview v-bind:matename="u_matename">{{msg}}</PersonReview>
      </div>
      <div>
        <PersonReview v-bind:matename="u_matename">{{msg}}</PersonReview>
      </div>
    </div>
    <div class="button-area">
        <red-button class="white-bt" @click="ChatPage">chat!</red-button>
    </div>
  </div>
</template>

<script scoped>
import MiniLogo from '../components/mini-logo.vue'
import Navigator from '../components/navigator.vue'
import PersonReview from '../components/person-review.vue'
import RedButton from '../components/red-button.vue'
import userinfo from '../components/user-info.vue'
import axios from 'axios'

export default {
  name: 'UserProfilePage',
  components: {
    MiniLogo,
    RedButton,
    Navigator,
    PersonReview,
    userinfo
  },
  data() {
    return {
      // mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
      mainserve: "http://10.14.5.15:5000",
      imageSrc: '',
      name: '',
      description: '',
      temperature: '90도',
      msg: "벌써 4시야..미쳤네;;벌써 4시야..미쳤네;;",
      u_matename: 'eu***',
      gender: '',
      age: '',
      MBTI: '',
      smoking: '',
      with_pet: '',
      bug: '',
      makeChattingRoom: {
        senderUid: localStorage.getItem('uid'), 
        receiverUid: this.uid,
      },
      uid:'',
    }
  },
  // props: ["uid"],
  async created() {
    this.uid = this.$route.query.uid;
    console.log('uid:', this.uid);
    // 프로필 정보 로딩
    const res = await axios.get(this.mainserve+'/user/profile/'+ this.uid ,
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}});
    const data = await res.data.data;
    this.name = data.name;
    this.description = data.description;
    if(data.sex == 1) this.gender = '여성';
    else if(data.sex == 0) this.gender = "남성";
    this.age = data.age+"살";
    if(data.score != 0) this.temperature = data.score+"도";

    // 프로필 이미지 로딩 -> local에서는 가능, EC2에서는 에러
    const res3 = await axios.get(this.mainserve+'/user/image/', {
              params: { imagePath: data.image },
              headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') },
              timeout: 1000 // 1초 이내에 응답이 없으면 에러 처리
            });
    this.imageSrc = "data:image/jpg;base64,"+res3.data.data;

    // 매칭 정보 로딩
    const res2 = await axios.get(this.mainserve+'/user/matchinginfo/'+ this.uid ,
          { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}});
    const data2 = await res2.data.data;
    this.MBTI = data2.mbti
    if(data2.userSmoking == 1) this.smoking = "Yes";
    else if(data2.userSmoking == 0) this.smoking = "No";
    if(data2.userPet == 0) this.with_pet = "No";
    else if(data2.userPet == 1) {
      this.with_pet = "Yes";
      if(data2.userPetDog == 1) this.with_pet += (", 강아지");
      if(data2.userPetCat == 1) this.with_pet += (", 고양이");
      if(data2.userPetReptileFish == 1) this.with_pet += (", 파충류/어류");
      if(data2.userPetBird == 1) this.with_pet += (", 조류");
      if(data2.userPetEtc != null) this.with_pet += (", "+this.userPetEtc);
    }
    if(data2.userBugKiller == 1) this.bug = "잘 잡아요";
    else if(data2.userBugKiller == 2) this.bug = "시키면 잡을 수 있어요";
    else if(data2.userBugKiller == 3) this.bug = "못 잡아요";
  },
  methods: {
    async ChatPage() {
      const res = await axios.get(this.mainserve+ '/user/chattingRoom/exist', // 채팅방 유무 조회 요청
      {
        params: this.makeChattingRoom, 
        headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}
      });
      
      if(res.data.isExisted) this.$router.push({ 
          name: "Chatting",
          query: {otherid: this.uid, cid: res.data.cid}});
      else {
        const res = await axios.post(this.mainserve+ '/user/chattingRoom/make', // 채팅방 생성 요청
              this.makeChattingRoom, 
              { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')} });
        this.$router.push({ 
          name: "Chatting",
          query: {otherid: this.uid, cid: res.data.chattingRoom.id} 
        });
      }
    },
  },
}

</script>

<style scoped>
.one-line {
    width: 100%;
    margin: 20px 5px 20px;
}

.user-name {
  position: relative;
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    text-align: right;
    margin: 0px 10px 0px 0px;
}
#non-click {
    position: absolute;
    border-radius: 100px;
    font-family: 'a고딕14';
    font-size: 16px;
    font-weight: bold;
    background-color: red;
    border: solid 2px black;
    height: 35px;
    margin-top: 3px;
}

.profile-img {
    display: block;
    width: 148px;
    margin: auto;
}

.button-area {
    justify-content: right;
    padding-top: 10px;
}

.white-bt {
    background-color: white;
    font-size: 16px;
}

.content3 {
  padding-top: 20px;
}
</style>
