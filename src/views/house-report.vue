<template>
  <div class="report" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
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
                <img id="profile_img" src='../assets/profile_2.png'>
              </span>
            </td>
            <td id="user">moosongsong</td>
            <td rowspan="2">
              <green-button class="reportB" @click="ReportBtn">평가하기</green-button>
            </td>
          </tr>
          <tr>
            <td id="report_status">평가 완료</td>
          </tr>

          <tr id="table_head">
            <td rowspan="2">
              <span class="profile">
                <img id="profile_img" src='../assets/profile_2.png'>
              </span>
            </td>
            <td id="user">moosongsong</td>
            <td rowspan="2">
              <green-button class="reportB" @click="ReportBtn">평가하기</green-button>
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
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import GreenButton from '../components/green-button.vue'
import navimenu from '../components/navigator.vue'

export default {
  name: 'HouseReport',
  components: {
    househeader,
    minilogo,
    GreenButton,
    navimenu,
  },
  methods: {
    ReportBtn() {
      this.$router.push({ path: '/auth/house/report/member'})
    }
  }
}
</script>

<style scoped>
  .report {
    height: 100vh;
    }
  .reportB {
    background-color: #268372;
    font-family: a고딕14;
    font-size: 14px;
    width: 70px;
    height: 25px;
    margin-right: 10px;
    margin-top: 15px;
    cursor: pointer;
  }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
  #user,
  #report_status {
    padding-left: 20px;
  }
  table {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
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
    cursor: pointer;
  }
  #table_head {
    border-top: 1px solid black;
  }
  #table_bottom {
    border-bottom: 1px solid black;
  }
</style>
