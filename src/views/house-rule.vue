<template>
  <div class="ruletable" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader></househeader>
    <div class="rule">
      <div id="page_title">
        <img id="title" src="../assets/house_rule_title.png" alt="house rule title">
      <!--<sub-title>HOUSE RULE</sub-title>-->
      </div>

      <!--모달-->
      <div class="button_group">
        <rulemodal v-if="modal" @close-modal="modal=false">
        </rulemodal>
        <span class="add_btn" v-on:click="addRule">
          <img id="btn_add" src="../assets/add_btn.png" alt="add button">
        </span>

        <rulemodal v-if="ismodal" @close-modal="ismodal=false">
        </rulemodal>
        <span class="edit_btn" v-on:click="editRule">
          <img id="btn_edit" src="../assets/edit_btn.png" alt="edit button">
        </span>
      </div>

      <div class="rule_table">
        <table> <!--이 방법 말고 더 나은 방법이 있을텐데 시도해본 것 중에 이게 그나마 젤,,ㅠ-->
          <tr>
            <th id="first_rule">1. 요리를 할때는...</th>
          </tr>
          <tr>
            <td>1-1. 조리 후 바로바로 설거지하기</td>
          </tr>
          <tr>
            <td>1-2. 가스레인지에 흘린 거 바로 치우기</td>
          </tr>
          <tr>
            <td>1-3. 요리하고 환기하기</td>
          </tr>
          <tr>
            <td>1-4. 쓴 재료 제자리에 원위치하기</td>
          </tr>
          <tr>
            <td>1-5. 맛있는건 나눠먹기</td>
          </tr>
          <tr>
            <th>2. 우리들의 음주문화!</th>
          </tr>
          <tr>
            <td>2-1. 친목도모를 위해 주 1회 음주파티 필수 참석</td>
          </tr>
          <tr>
            <td>2-2. 안주는 퇴근하면서 각자 먹고싶은 거 배민으로 주문</td>
          </tr>
          <tr>
            <td>2-3. 외부인 초대 가능</td>
          </tr>
          <tr>
            <th>3. 외부인 관련</th>
          </tr>
          <tr>
            <td>3-1. 직계가족 방문 허용</td>
          </tr>
          <tr>
            <td>3-2. 이성 출입은 사전 협의하기</td>
          </tr>
          <tr>
            <td>3-3. 외부인의 숙박을 불가능하다</td>
          </tr>
        </table>
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

export default {
  name: 'HouseRule',
  components: {
    minilogo,
    househeader,
    rulemodal,
    navimenu,
    SubTitle,
    RedButton,
    editmodal
  },
  data() {
    return {
      modal: false,
      ismodal: false,
      message: ''
    }
  },
  methods: {
    addMate() {
      console.log();
    },
    addRule() {
      this.modal = true;

    },
    closeModal() {
      this.modal = false
    },
    editRule() {
      this.modal = true
    },
    cancel_modal() {
      this.modal = false
    },
    register_modal() {
      this.modal = false
    },
    delete_modal() {
      this.modal = false
    },
    update_modal() {
      this.modal = false
    }
  }
}
</script>

<style scoped>
  .ruletable {
    height: 100vh;
  }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
/*
  .sub-title {
    font-size: 16px;
    width: 611px;
  }
*/
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
