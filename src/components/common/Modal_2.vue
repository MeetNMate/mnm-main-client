<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')">
    </div>
    <div class="modal-card">
      <div class="mem_report">
        <p id="report_content">soyoung 님이 작성한 평가는 삭제되지 않습니다.</p>
        <p id="report_content">신중하게 작성하셨나요?</p>
        <p id="report_content">Yes 버튼을 누르면 평가를 완료합니다.</p>
      </div>
      <footer class="footer_btn">
        <red-button class="white-button yesB" @click="$emit('close-modal')">Yes</red-button>
        <red-button class="white-button cancelB" @click="$emit('close-modal')">Cancel</red-button>
      </footer>
    </div>
  </div>
</template>

<script>
  import RedButton from '../../components/red-button.vue'

  export default {
    name: 'ReportModal',
    components: {
      RedButton
    },
    // methods: {
    //   cancelBtn() {
    //     this.modal = false;
    //   },
    //   submitBtn() {
    //     this.modal = false;
    //   }
    // }
  }
</script>

<style scoped>
.white-button {
  display: block;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  width: 80px;
  height: 32px;
  font-family: a고딕14;
  display: inline;
}
.yesB,
.cancelB {
  margin-left: 20px;
  margin-right: 20px;
}
.cancelB {
  float: right;
}
.footer_btn {
  padding-top: 10px;
}
#report_content {
  font-family: a고딕14;
  font-size: 14px;
  text-align: center;
  line-height: 30%;
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
  max-width: 80%;
  min-height: 150px;
  margin: auto;
  margin-top: 85%;
  padding-top: 20px;
  background-color: white;
  z-index: 10;
  opacity: 1;
  border-radius: 20px;
  background-color: #EABF3A;
  border: 3px solid black;
}

@media screen and (min-width: 768px) and (max-width: 1024px){
  .modal-card {
    max-width: 50%;
    min-height: 150px;
    margin: auto;
    margin-top: 45%;
  }
}

@media screen and (min-width: 1025px) {
  .modal-card {
    max-width: 30%;
    min-height: 150px;
    margin: auto;
    margin-top: 20%;
  }
}
</style>
