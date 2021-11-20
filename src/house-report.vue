<template>
  <div class="report">
    <minilogo></minilogo>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/assessment_title.png">
    </div>

    <div class="report_table">
      <table>
        <colgroup>
          <col width="20%">
          <col width="60%">
          <col width="20%">
        </colgroup>
        <tbody>
          <tr id="table_head">
            <td rowspan="2">
              <span class="profile">
                <img id="profile_img" src='./assets/profile_2.png'>
              </span>
            </td>
            <td id="user">moosongsong</td>
            <td rowspan="2">
              <span class="report_button" v-on:click="ReportBtn">
                <img id="btn_report" src='./assets/report_btn.png'>
              </span>
            </td>
          </tr>
          <tr>
            <td id="report_status">평가 완료</td>
          </tr>

          <tr id="table_head">
            <td rowspan="2">
              <span class="profile">
                <img id="profile_img" src='./assets/profile_2.png'>
              </span>
            </td>
            <td id="user">moosongsong</td>
            <td rowspan="2">
              <span class="report_button" v-on:click="ReportBtn">
                <img id="btn_report" src='./assets/report_btn.png'>
              </span>
            </td>
          </tr>
          <tr id="table_bottom">
            <td id="report_status">평가 대기 중...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import househeader from './components/layout/house-header.vue'
import minilogo from './components/mini-logo.vue'

export default {
  name: 'HouseReport',
  components: {
    househeader,
    minilogo
  },
  methods: {
    ReportBtn() {
      console.log();
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  td {
    font-family: a고딕14;
    font-size: 18px;
    padding-left: 10px;
  }
  #page_title {
    text-align: center;
    padding-bottom: 30px;
  }
  #title {
    width: 218px;
    height: 40px;
  }
  #table_head {
    border-top: 1px solid black;
  }
  #profile_img {
    width: 70px;
    height: 70px;
    padding: 10px 5px 5px 10px;
  }
  #user {
    font-family: a고딕19;
    font-size: 20px;
  }
  #btn_report {
    width: 63px;
    height: 25px;
    padding-right: 20px;
  }
  #table_head {
    border-top: 1px solid black;
  }
  #table_bottom {
    border-bottom: 1px solid black;
  }
</style>
