<template>
  <div class="mem_report">
    <p>soyoung 님이 작성한 평가는 삭제되지 않습니다.</p>
    <p>신중하게 작성하셨나요?</p>
    <p>Yes 버튼을 누르면 평가를 완료합니다.</p>
  </div>
  <footer>
    <span class="end_report" v-on:click="endReport">
      <img id="end_btn" src="./report_cancel.png" alt="cancel button">
    </span>
  </footer>
</template>

<script>
  export default {
    name: 'MemReport',
    methods: {
      endReport() {
        this.modal = false
      }
    }
  }

</script>

<style scoped>
  p {
    font-family: a고딕14;
    font-size: 14px;
    text-align: center;
    line-height: 70%;
  }
</style>
