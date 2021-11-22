<template>
    <div id ="change-color">
      <mini-logo></mini-logo>
      <main-img></main-img>
      <p> 당신을 위한 메이트를 찾고있습니다. <br>
          조금만 기다려주세요! </p>
    </div>
</template>

<script>
import mainImg from '../components/main-img.vue'
import MiniLogo from '../components/mini-logo.vue'
import axios from 'axios'

export default {
  name: 'MatchingWait',
  components: { 
    mainImg, MiniLogo 
  },
  data() {
    return {
      mathcingserve: '192.168.0.118:5000',
      Username: 'User',
      post: {
        uid: '',
        status:'',
        data:''
      }
    }
  },
  created() {
    this.post.uid = localStorage.getItem('uid');
    console.log("저장한 uid" + this.post.uid)
    
    axios.post('http://'+this.mathcingserve+ '/results/' + this.post.uid)
    .then((res) => {
        console.log(`status code: ${res.status}`);
        console.log(`data: ${res.data}`)
        this.post.status = res.status;
        this.post.data = res.data;
        this.$router.push({ path: '/auth/matelist'})
    })
    .catch((err) => {
        console.log(err);
        alert("매칭에 실패했습니다...");
        this.$router.push({ path: '/'})
    });
  }
}
</script>

<style scoped>
#change-color {
  background-color: #CE9E92;
}

p {
    padding-top: 1%;
    padding-bottom: 1%;
    margin: 0px;
}
</style>
