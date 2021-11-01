<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      <img alt="Concept Image" src="../assets/concept_image.png">
    </p>
    <button> log in </button>
    <button> log out </button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
button {
  width: 148px;
  height: 51px;
  font-size: 20px;
  background-color: red;
  color: black;
  border: solid 2px black;
  border-radius: 16px;
  margin: 5px;
}
img {
  width: 268px;
  height: 558px;
}
</style>
