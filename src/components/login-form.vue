<template>
    <div>
        <label for="id-input">email address</label>
        <input if="id-input" type="text" @blur="FocusOut" v-model="id_value" placeholder="email@address.com" />
        <label for="pw-input">password</label>
        <input if="pw-input" type="text" @blur="FocusOut" v-model="pw_value" placeholder="only number and alpabet" />
    </div>    
</template>


<script>
export default {
  name: 'loginform',
  props: {
  },
  data() {
      return {
          user : {
              id: '',
              pw: ''
          }
      };
  },
  methods: {
      FocusOut() {
        this.user.id = this.id_value;
        this.user.id = this.pw_value;
        this.$emit("user.value", this.user);
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    width: 348px;
    height: 151px;
    display: block;
    font-family: 'a고딕14';
    color: black;
    border: solid 2px black;
    border-radius: 16px;
    margin-bottom: 5px;
    padding: 0px;
    overflow: hidden;
}

label {
    display: inline-block;
    width: 100%;
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
