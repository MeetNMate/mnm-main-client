<template>
    <mini-logo></mini-logo>
    <div></div>
    <main-img></main-img>
    <div class="blank"></div>
</template>

<script>
import mainImg from '../components/main-img.vue'
import MiniLogo from '../components/mini-logo.vue';

export default {
  name: 'MainPageAuth',
  components: {
    mainImg,
    MiniLogo,
  },
  data() {
      return {
      }
  },
  methods: {
    Logo() {
        this.$router.push({ path: '/auth'})
    },
  },
};
</script>

<style scoped>
.blank {
    margin: 20px;
}
</style>