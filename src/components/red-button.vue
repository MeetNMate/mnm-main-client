<template>
    <button> {{msg}} </button>
</template>

<script>
export default {
  name: 'red-button',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 148px;
  height: 51px;
  font-family: Righteous-Regular;
  font-size: 30px;
  background-color: red;
  color: black;
  border: solid 2px black;
  border-radius: 16px;
  margin: 15px;
}
</style>
