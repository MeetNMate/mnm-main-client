<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')">
    </div>
    <div class="modal-card">
      <table>
        <thead>
          <th>새로운 규칙 등록하기</th>
        </thead>
        <tbody>
          <!-- <tr>
            <th id="subtitle">번호</th>
          </tr>
          <tr>
            <td><input id="text" v-model="num"></td>
          </tr> -->
          <tr>
            <th id="subtitle">내용</th>
          </tr>
          <tr>
            <td>
              <textarea id="input_textarea" v-model="value" rows="10"></textarea>
            </td>
          </tr>
        </tbody>
        <footer class="footer_btn">
          <div class="button-group">
            <green-button class="new-button cancelB" @click="$emit('close-modal')">취소</green-button>
            <green-button class="new-button registerB" @click="$emit('close-modal'); register">등록하기</green-button>
          </div>
        </footer>
      </table>
    </div>
  </div>
</template>

<script>
import GreenButton from '../../components/green-button.vue'
// import axios from 'axios'

  export default {
    name: 'RuleModal',
    components: {
      GreenButton
    },
    data() {
      return {
        value: "",
        // newRule: {
        //   houseid: "",
        //   userid: "",
        //   rule: "",
        //   upperNum: "",
        //   lowerNum: "",
        // }
      }
    },
    methods: {
      register() {
        this.$emit("value", this.value);
      
      },
      clearInput() {
        this.value = '';
      }
    }


        // if (this.message !== "") {
        //   var value = this.message && this.message.trim();
        //   console.log(this.message);
        //   this.$emit('register', value)
        //   this.clearInput();
        // }


  }
</script>

<style scoped>
.modal {
  text-align: left;
}
.footer_btn {
  padding-top: 15px;
}
.new-button {
  background-color: #268372;
  font-family: a고딕14;
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  width: 70px;
  cursor: pointer;
}
.registerB {
  float: right;
}
table {
  background-color: #EABF3A;
}
th {
  background-color: #EABF3A;
  font-family: a고딕16;
  font-size: 20px;
  border-bottom: 1.5px solid black;
  text-align: center;
}
#tableH {
  border-top: 1.5px solid black;
}
input {
  float: left;
  width: 100%;
  border: none;
  background-color: #EABF3A;
  border-bottom: 1px solid black;
  height: 30px;
}
textarea {
  float: left;
  resize: none;
  border: none;
  background-color: #EABF3A;
  border-bottom: 1px solid black;
}
#subtitle {
  font-family: a고딕15;
  font-size: 16px;
  text-align: left;
}
#text {
  font-family: a고딕14;
}
#input_textarea {
  width: 285px;
  font-family: a고딕14;
}
.content {
  background: #EABF3A;
}
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: #5BB5B5;
}
.modal-card {
  position: relative;
  max-width: 300px;
  /* min-height: 340px; */
  min-height: 325px;
  margin: auto;
  margin-top: 70%;
  padding-top: 30px;
  background-color: white;
  z-index: 10;
  opacity: 1;
  border-radius: 7%;
  background-color: #EABF3A;
  border: 3px solid black;
}
.modal-footer {
  text-align: left;
}

@media screen and (min-width: 768px){
  .modal-card {
    margin: auto;
    margin-top: 45%;
  }
}
@media screen and (min-width: 921px) and (max-width: 1024px) {
  .modal-card {
    margin: auto;
    margin-top: 30%;
  }
}

@media screen and (min-width: 1025px) {
  .modal-card {
    margin: auto;
    margin-top: 20%;
  }
}
</style>
