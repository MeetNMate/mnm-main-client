<template>
  <div class="ruletable" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="housename"></househeader>
    <div class="rule">
      <div id="page_title">
        <img id="title" src="../assets/house_rule_title.png" alt="house rule title">
      <!--<sub-title>HOUSE RULE</sub-title>-->
      </div>

      <!--모달-->
      <div class="button_group">
        <rulemodal v-on:register="register" v-if="modal" @close-modal="modal=false">
        </rulemodal>
        <span class="add_btn" @click="modalopen">
          <img id="btn_add" src="../assets/add_btn.png" alt="add button">
        </span>
        <tablerow v-bind:rows="rows" @removeRule="removeRule"></tablerow>
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
import tablerow from '../components/table_row.vue'
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
    tablerow,
  },
  data() {
    return {
      modal: false,
      ismodal: false,
      housename: '연희동빨간지붕',
      rows: [],
    }
  },
  created() {
    axios.get('http://10.14.4.42:8080/rule/house/1')
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      let ruleList = res.data.data;
      let tempList = [];
      for (let key in ruleList) {
        let tempRule = ruleList[key].originalRule;
        tempList.push(tempRule);
      }
      this.rows = tempList
      console.log('result:', tempList);
    })
  },
  methods: {
    modalopen() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false
    },
    removeRule(row, index) {
      localStorage.removeItem(row);
      this.rows.splice(index, 1);
      // this.$emit('removeRule', row, index);
    },
    register(row) {
      localStorage.setItem(row, row);
      // this.row.push(row);
    },
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
    border-bottom: 1px solid black;
  }
  th, td {
    font-size: 14px;
    font-family: a고딕14;
  }
  table {
    border-collapse: collapse;
    width: 100%;
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
