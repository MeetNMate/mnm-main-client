<template>
    <div>
        <p>{{msg}}</p>
        <input type="text" @blur="FocusOut" v-model="value" placeholder="write here" />
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
    width: 348px;
    height: 70px;
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
    height: 48%;
    text-align: left;
    color: black;
    background-color: red;
    border-bottom: solid 2px black;
    margin: 0px;
    padding: 1px 0px 0px 10px;
    vertical-align: bottom;
}

input {
    width: 95%;
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
