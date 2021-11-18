<template>
  <div class="report_mem">
    <minilogo></minilogo>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/assessment_title.png">
    </div>

    <div class="profile">
      <img id="profile_img" src="./assets/profile_2.png">
      <p id="user_name">seoki</p>
    </div>

    <div class="ask_user">
      <p id="question_user">연희동빨간지붕 HOUSE에서 seoki 님과 함께 한 시간은 어땠나요?</p>
      <textarea v-model="message" rows="10"></textarea>
    </div>

    <div class="page_btn">
      <span class="prev" v-on:click="addMate">
        <img id="prev_btn" src="./assets/previous_btn.png" alt="previous button">
      </span>

      <reportmodal v-if="modal" @close-modal="modal=false">
        <!-- <memreport></memreport> -->
        <div class="mem_report">
          <p id="report_content">soyoung 님이 작성한 평가는 삭제되지 않습니다.</p>
          <p id="report_content">신중하게 작성하셨나요?</p>
          <p id="report_content">Yes 버튼을 누르면 평가를 완료합니다.</p>
        </div>
        <footer class="footer_btn">
          <span class="yes_button" v-on:click="submitReport">
            <img id="yes_btn" src="./assets/report_end.png" alt="yes button">
          </span>
          <span class="cancel_button" v-on:click="cancelReport">
            <img id="cancel_btn" src="./assets/report_cancel.png" alt="cancel button">
          </span>
        </footer>
      </reportmodal>
      <span class="next" v-on:click="endReport">
        <img id="next_btn" src="./assets/next_btn.png" alt="next button">
      </span>
    </div>

  </div>
</template>

<script>
import minilogo from './components/mini-logo.vue'
import househeader from './components/layout/house-header.vue'

import reportmodal from './components/common/Modal_2.vue'
// import memreport from './components/common/modal_report.vue'

export default {
  name: 'HouseMemContent',
  components: {
    minilogo,
    househeader,
    reportmodal
    // memreport
  },
  data() {
    return {
      modal: false,
      message: ''
    }
  },
  methods: {
    endReport() {
      this.modal = true
    },
    cancelReport() {
      this.modal = false
    },
    submitReport() {
      this.modal = false
    }
  }
}
</script>

<style scoped> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  .report_mem {
    padding: 0 20px 0 20px;
  }
  #page_title {
    text-align: center;
    padding-bottom: 30px;
  }
  #title {
    width: 218px;
    height: 40px;
  }
  .profile {
    text-align: center;
  }
  #profile_img {
    width: 100px;
    height: 100px;
  }
  #user_name {
    font-family: a고딕19;
    font-size: 20px;
  }
  .page_btn {
    padding-top: 30px;
    padding-bottom: 50px;
  }
  .next {
    float: right;
  }
  #prev_btn {
    width: 105px;
    height: 30px;
  }
  #next_btn {
    width: 70px;
    height: 30px;
  }
  #yes_btn {
    width: 74px;
    height: 32px;
  }
  #cancel_btn {
    float: right;
    width: 74px;
    height: 32px;
  }
  .footer_btn {
    padding: 25px 50px 10px 50px;
  }
  #question_user {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    background-color: #268372;
    font-family: a고딕19;
    font-size: 14px;
  }
  textarea {
    resize: none;
    background-color: #5BB5B5;
    padding-bottom: 30px;
    width: 100%;
    font-family: a고딕14;
  }
  #report_content {
    font-family: a고딕14;
    font-size: 14px;
    text-align: center;
    line-height: 30%;
  }
</style>
