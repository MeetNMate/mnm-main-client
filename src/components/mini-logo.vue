<template>
  <div class="mini-logo">
    <img @click="MainPage" alt="Concept Image" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'mini-logo',
  methods: {
    MainPage() {
       if (localStorage.getItem('token') == null){
         this.$router.push('/')
       }
       else {
         this.$router.push('/auth')
       }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 94px;
  height: 31px;
}

.mini-logo {
  padding-top: 40px;
  padding-bottom: 30px;
  text-align: center;
  margin: 0px;
}

</style>
