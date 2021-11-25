<template>
  <div class="ruletable" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="houseName"></househeader>
    <div class="rule">
      <div id="page_title">
        <img id="title" src="../assets/house_rule_title.png" alt="house rule title">
      <!--<sub-title>HOUSE RULE</sub-title>-->
      </div>

      <!--모달-->
      <div class="button_group"> <!-- v-on:register="register"-->
        <rulemodal @value="addRule" v-if="modal" @close-modal="modal=false">
        </rulemodal>
        <span class="add_btn" @click="modalopen" >
          <img id="btn_add" src="../assets/add_btn.png" alt="add button">
        </span>

        <div class="rule_table">
          <!-- <tablerow v-bind:rows="rows" @removeRule="removeRule"></tablerow> -->
          <table>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index">
                <td class="index">{{ index+1 }}</td>
                <td id="content">{{ row.content }}</td>
                <td><span class="removeBtn" type="button" @click="removeRule(row, index)">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span></td>
              </tr>
              <!-- <tr v-for="(addrule, i) in newRow" :key="i"> new row 만들기 대 작전!
                <td class="index">{{ i+1 }}</td>
                <td id="content">{{ addrule }}</td>
                <td><span class="removeBtn" type="button" @click="removeRule(rule, i)">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </span></td>
              </tr> -->
            </tbody>
          </table>
        </div>
        <!-- <tablerow v-bind:rows="rows" @removeRule="removeRule"></tablerow> -->
      </div>
    </div>
  </div>
</template>

<script>
import minilogo from '../components/mini-logo.vue'
import househeader from '../components/layout/house-header.vue'
import rulemodal from '../components/common/Modal.vue'
import navimenu from  '../components/navigator.vue'
import SubTitle from '../components/sub-title.vue'
import RedButton from '../components/red-button.vue'
import editmodal from '../components/common/Modal_3.vue'
// import tablerow from '../components/table_row.vue'
import axios from 'axios'

export default {
  name: 'HouseRule',
  components: {
    minilogo,
    househeader,
    rulemodal,
    navimenu,
    SubTitle,
    RedButton,
    editmodal,
    // tablerow,
  },
  data() {
    return {
      mainserve: "http://localhost:5000",
      modal: false,
      ismodal: false,
      houseName: '연희동빨간지붕',
      rows: [{
        id: '', 
        content: ''
      }],
      houseid:'',
      addrule: {
          houseId: this.$route.query.houseid,
          userId: localStorage.getItem('uid'), 
          rule: '' 
      }
    }
  },
  async created() {
    this.houseid = await this.$route.query.houseid;

    // 하우스 정보 조회
    axios.get(this.mainserve+'/house/'+this.houseid)
    .then((res) => {
      console.log("하우스 정보 조회", res.data);
      this.houseName = res.data.data.name;
    });

    // 하우스 룰 조회
    axios.get(this.mainserve+'/rule/house/'+this.houseid)
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      let ruleList = res.data.data;
      let tempList = [];
      for (let key in ruleList) {
        tempList.push({id: ruleList[key].id, content: ruleList[key].originalRule});
      }
      this.rows = tempList
      console.log('result:', tempList);
    });
  },
  methods: {
    addRule(value) {
      // 룰 생성 요청
      this.addrule.rule = value;
      axios.post(this.mainserve+'/rule', this.addrule)
      .then((res)=> {
        console.log('status code:', res.status);
        console.log('data:', res.data);
        this.rows.push({id: res.data.data.id, content: value});
        localStorage.setItem('value', value);
      });
    },
    modalopen() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false
    },
    removeRule(row, index) {
      // 룰 삭제 요청
      axios.delete(this.mainserve+"/rule/"+row.id)
      .then((res) => {
        console.log("룰 삭제 요청", res.data);
        localStorage.removeItem(row);
        this.rows.splice(index, 1);
      });
    },
    // register(row) {
    //   localStorage.setItem(row, row);
    //   // this.row.push(row);
    // },
  }
}
</script>

<style scoped>

  .index {
    background-color: #268372;
    }
  .ruletable {
    height: 100vh;
  }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
.white-button {
  display: block;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  width: 104px;
  display: inline;
}
.prevB {
  float: left;
}
.nextB {
  float: right;
}
  .button-area {
    justify-content: space-between;
  }
  th {
    text-align: left;
    padding: 5px 0 5px 5px;
    border-bottom: 1px solid black;
    background-color: #268372;
  }
  td {
    padding: 5px 0 5px 15px;
    /* border-bottom: 1px solid black; */
  }
  th, td {
    font-size: 14px;
    font-family: a고딕14;
  }
  tr {
    text-align: left;
    border-bottom: 1px solid black;

  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  #content {
    float: left;
    padding-left: 5px;
  }
  .removeBtn {
    float: right;
  }
  .fas {
    font-size: 10px;
  }

  .rule {
    padding: 0 20px 0 20px;
  }
  .rule_table {
    padding-bottom: 50px;
  }
  #first_rule {
    border-top: 1px solid black;
  }
  #title {
    width: 211px;
    height: 40px;
  }
  #page_title {
    text-align: center;
    padding-bottom: 35px;
  }
  .button_group {
    text-align: right;
    padding-right: 5px;
    cursor: pointer;
  }
  .add_btn {
    padding-right: 5px;
  }
  #btn_add {
    width: 21px;
    height: 21px;
  }
  #btn_edit {
    width:37px;
    height: 21px;
  }

  /**모달**/
  #btn_cancel,
  #btn_register,
  #btn_delete,
  #btn_update {
    width: 60px;
    height: 24px;
    padding: 30px 20px 0 20px;
  }
  #btn_register {
    float: right;
  }
  #btn_delete {
    padding-left: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    table {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    .button_group {
      margin-right: auto;
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1025px) {
    table {
      width: 625px;
      margin-left: auto;
      margin-right: auto;
    }
    .ruletable {
      height: 130vh;
    }
  }
</style>