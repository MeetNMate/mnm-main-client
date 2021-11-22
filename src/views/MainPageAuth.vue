<template>
    <mini-logo></mini-logo>
    <navigator></navigator>
    <div></div>
    <main-img></main-img>
    <div class="blank"></div>
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
      }
  },
  methods: {
  },
};
</script>

<style scoped>
.blank {
    margin: 20px;
}

</style>