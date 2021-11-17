<template>
    <button @click="button">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'green-button',
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
  background-color: green;
  color: black;
  border: solid 2px black;
  border-radius: 16px;
  padding: 1% 4% 2%;
}
</style>
