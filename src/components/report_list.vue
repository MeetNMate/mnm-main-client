<template>
  <div class="reportlist">
    <div class="report_table">
      <table>
        <colgroup>
          <col width="20%">
          <col width="60%">
          <col width="20%">
        </colgroup>
        <tbody>
          <tr id="table_botoom">
            <td rowspan="2">
              <span class="profile">
                <img id="profile_img" src='../assets/profile_2.png'>
              </span>
            </td>
            <td id="user">{{ userName }}</td>
            <td rowspan="2">
              <green-button class="reportB" @click="ReportBtn">평가하기</green-button>
            </td>
          </tr>
          <tr id="table_bottom">
            <td id="report_status">{{ status }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import GreenButton from '../components/green-button.vue'

export default {
  name: 'reportlist',
  components: {
    GreenButton,
  },
  props: {
    userName: String,
    status: String,
    houseName: String, 
    houseId: Number, 
    userId: Number
  },
  methods: {
    ReportBtn() {
      console.log(this.houseName, this.userName);
      this.$router.push({
        name: 'HouseMemReport',
        query: {houseId:this.houseId, houseName: this.houseName, userId: this.userId, userName: this.userName}
      });
      // this.$router.push({ path: '/auth/house/report/member'})
    }
  }
}
</script>

<style scoped>
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
#user,
#report_status {
  padding-left: 20px;
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
#table_head {
  border-top: 1px solid black;
}
#table_bottom {
  border-bottom: 1px solid black;
}
</style>
