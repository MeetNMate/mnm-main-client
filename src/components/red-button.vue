<template>
    <button @click="button">
      <slot></slot>
    </button>
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
  display: inline-block;
  font-family: Righteous-Regular;
  background-color: red;
  color: black;
  border: solid 2px black;
  border-radius: 16px;
  padding: 1% 4% 2%;
  margin: 15px 5px 2px;
}
</style>
