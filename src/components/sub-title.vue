<template>
    <p>
      <slot></slot>
    </p>
</template>

<script>
export default {
  name: 'subtitle',
  props: {
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 100%;
  max-width: 266px;
  background-color: white;
  font-family: 'Righteous-Regular';
  font-size: 40px;
  color: black;
  border: solid 3px black;
  border-radius: 10px;
  padding: 2px 6px 2px;
  margin: auto;
}
</style>
