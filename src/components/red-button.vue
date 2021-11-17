<template>
    <button @click="onClick">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'red-button',
  props: {
  
  },
  methods: {
    onClick() {
      console.log("버튼 클릭"); //나중에 마우스 오버 했을 때 표시나는 것으로 바꾸기
    }

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
  padding: 5px 18px 10px;
  margin: 15px 5px 2px;
}

</style>
