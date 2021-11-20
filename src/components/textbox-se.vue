<template>
    <div>
        <p>{{msg}}</p>
        <input type="password" @blur="FocusOut" v-model="value" placeholder="write here" />
    </div>    
</template>


<script>
export default {
  name: 'textbox',
  props: {
    msg: String,
  },
  data() {
      return {
          value:"",
      };
  },
  methods: {
      FocusOut() {
        this.$emit("value", this.value);
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    position: relative;
    width:98vw;
    max-width: 348px;
    height: 70px;
    display: block;
    font-family: 'a고딕14';
    color: black;
    border: solid 2px black;
    border-radius: 16px;
    margin-bottom: 15px;
    padding: 0px;
    overflow: hidden;
}

p {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    text-align: left;
    color: black;
    background-color: #E41813;
    border-bottom: solid 2px black;
    margin: 0px;
    padding: 7px 0px 0px 15px;
}

input {
    position: absolute;
    top: 52%;
    bottom:0;
    left: 15px;
    width: 90%;
    height: 45%;
    color: black;
    background-color: #EABF3A;
    border: none;
    margin: 0px;
    padding: 2px;
}

input:focus {
    outline:none;
}
</style>
