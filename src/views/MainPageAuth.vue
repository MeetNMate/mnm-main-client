<template>
    <mini-logo></mini-logo>
    <navigator></navigator>
    <main-img></main-img>
    <div class='footpaint'></div>
</template>

<script>
import mainImg from '../components/main-img.vue'
import MiniLogo from '../components/mini-logo.vue';
import Navigator from '../components/navigator.vue';

export default {
  name: 'MainPageAuth',
  components: {
    mainImg,
    MiniLogo,
    Navigator,
  },
  data() {
      return {
        token:'',
      }
  },
  created() {
    this.token = localStorage.getItem("token");
    console.log('token:', this.token);
  },
  methods: {
  },
};
</script>

<style scoped>
.footpaint{
  min-height: 150px;
  background-color: #EABF3A;
}

</style>