<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')">
    </div>
    <div class="modal-card">
      <table>
        <tbody>
          <tr>
            <th id="tableH">대분류</th>
          </tr>
          <tr>
            <td>
              <input v-model="message1">
            </td>
          </tr>
          <tr>
            <th>소분류</th>
          </tr>
          <tr>
            <td>
              <input v-model="message2">
            </td>
          </tr>
          <tr>
            <th>내용</th>
          </tr>
          <tr>
            <td>
              <textarea id="input_textarea" v-model="message3" rows="5"></textarea>
            </td>
          </tr>
        </tbody>
        <footer class="footer_btn">
          <div class="button-group">
            <green-button class="new-button cancelB" @click="$emit('close-modal')">취소</green-button>
            <green-button class="new-button registerB" @click="$emit('close-modal')">등록하기</green-button>
          </div>
        </footer>
      </table>
    </div>
  </div>
</template>

<script>
import GreenButton from '../../components/green-button.vue'

  export default {
    name: 'RuleModal',
    components: {
      GreenButton
    },
    // methods: {
    //   addRule() {
    //     if(this.message !== "") {
    //       var value = this.message && this.message.trim();
    //       this.$emit('addRule', value)
    //       this.clearInput();
    //     }
    //   },
    //   clearInput() {
    //     this.message = '';
    //   }
    // },
    data() {
      return {
        message1: '',
        message2: '',
        message3: '',
      }
    }
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
}
.registerB {
  float: right;
}
table {
  background-color: #EABF3A;
}
th {
  background-color: #EABF3A;
  font-family: a고딕14;
  font-size: 15px;
  border-bottom: 1.5px solid black;
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
#input_textarea {
  width: 285px;
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
  max-width: 310px;
  min-height: 335px;
  margin: auto;
  margin-top: 60%;
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
