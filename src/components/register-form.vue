<template>
    <div>
        <label for="id-input">email address</label>
        <input if="id-input" type="text" @blur="FocusOut" v-model="id_value" placeholder="email@address.com" />
        <label for="pw-input">password</label>
        <input if="pw-input" type="text" @blur="FocusOut" v-model="pw_value" placeholder="only number and alpabet" />
        <label for="pwre-input">password again</label>
        <input if="pwre-input" type="text" @blur="FocusOut" v-model="pwre_value" placeholder="only number and alpabet" />
    </div>    
</template>


<script>
export default {
  name: 'registerform',
  props: {
  },
  data() {
      return {
          id_value:"",
          pw_value:"",
          pwre_value:"",
      };
  },
  methods: {
      FocusOut() {
        this.$emit("id_value", this.id_value);
        this.$emit("pw_value", this.pw_value);
        this.$emit("pwre_value", this.pwre_value);
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
    font-family: 'a고딕14';
    color: black;
    border: solid 2px black;
    border-radius: 16px;
    margin-bottom: 8px;
    padding: 0px;
    overflow: hidden;
}

label {
    width: 100%;
    height: 45%;
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