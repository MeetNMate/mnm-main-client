<template>
    <div>
        <p>Message is: {{ messaage}}</p>
        <input v-model="message" placeholder="edit me" />
    </div>    
</template>


<script>
export default {
  name: 'textbox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    width: 348px;
    height: 60px;
    display: block;
    font-family: Righteous-Regular;
    color: black;
    border: solid 2px black;
    border-radius: 16px;
    margin-bottom: 8px;
    padding: 0px;
    overflow: hidden;
}

p {
    width: 100%;
    height: 50%;
    text-align: center;
    font-family: Righteous-Regular;
    color: black;
    background-color: red;
    border-bottom: solid 2px black;
    margin: 0px;
    padding: 0px;
}

input {
    width: 95%;
    font-family: Righteous-Regular;
    color: black;
    background-color: #EABF3A;
    border: none;
    margin: 0px;
    padding: 2px;
}
</style>
