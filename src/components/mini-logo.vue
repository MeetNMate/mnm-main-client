<template>
  <div class="mini-logo">
    <p>
      <img @click="MainPage" alt="Concept Image" src="../assets/logo.png">
    </p>
  </div>
</template>

<script>
export default {
  name: 'mini-logo',
  methods: {
    MainPage() {
        this.$router.push('/')
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
  padding-top: 30px;
  padding-bottom: 30px;
}

</style>