<template>
    <button @click="OnClick">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'green-button',
  props: {
  
  },
  methods: {
    OnClick() {
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  display: inline-block;
  background-color: #5C7D36;
  font-family: 'Righteous-Regular';
  font-size: 20px;
  color: black;
  border: solid 2px black;
  border-radius: 16px;
  padding: 2px 6px 2px;
  margin: 0px 5px 15px;
}
</style>
