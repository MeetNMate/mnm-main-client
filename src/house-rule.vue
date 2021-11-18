<template>
  <div class="rule">
    <minilogo></minilogo>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/house_rule_title.png" alt="house rule title">
    </div>

    <!--모달-->
    <!-- <div class="btn_group">
      <div class="rule_add">
        <rulemodal v-if="isModal" @close-modal="isModal=false">
          <div class="add_rule_content">
            <table class="addrule_table">
              <thead id="add_rule_head">새로운 규칙 등록하기</thead>
              <tbody>
                <tr>
                  <th id="table_first">대분류</th>
                </tr>
                <tr>
                  <td>
                    <input v-model="message">
                  </td>
                </tr>
                <tr>
                  <th id="table_first">소분류</th>
                </tr>
                <tr>
                  <td>
                    <input v-model="message">
                  </td>
                </tr>
                <tr>
                  <th id="table_first">내용</th>
                </tr>
                <tr>
                  <td>
                    <textarea v-model="message" rows="5"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </rulemodal>
        <span class="add_btn" v-on:click="addRule">
          <img id="btn_add" src="./assets/add_btn.png" alt="add button">
        </span>
      </div>

      <div class="rule_edit">
        <editmodal v-if="isModal" @close-modal="isModal=false">
          <div class="edit_rule_content">
            <table class="editrule_table">
              <thead id="edit_rule_head">규칙 추가하기</thead>
              <tbody>
                <tr>
                  <th id="table_first">대분류</th>
                </tr>
                <tr>
                  <td>
                    <input v-model="message">
                  </td>
                </tr>
                <tr>
                  <th id="table_first">소분류</th>
                </tr>
                <tr>
                  <td>
                    <input v-model="message">
                  </td>
                </tr>
                <tr>
                  <th id="table_first">내용</th>
                </tr>
                <tr>
                  <td>
                    <textarea v-model="message" rows="5"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </editmodal>
        <span class="edit_btn" v-on:click="editRule">
          <img id="btn_edit" src="./assets/edit_btn.png" alt="edit button">
        </span>
      </div>
    </div> -->
    <!--모달 끝-->


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

    <div class="page_btn">
      <span class="prev" v-on:click="addMate">
        <img id="prev_btn" src="./assets/previous_btn.png" alt="previous button">
      </span>
      <span class="next" v-on:click="addMate">
        <img id="next_btn" src="./assets/next_btn.png" alt="next button">
      </span>
    </div>

  </div>
</template>

<script>
import minilogo from './components/mini-logo.vue'
import househeader from './components/layout/house-header.vue'
// import rulemodal from './components/common/Modal.vue'
// import editmodal from './components/modal_rule/Modal_edit.vue'

export default {
  name: 'HouseRule',
  components: {
    minilogo,
    househeader,
    // rulemodal,
    // editmodal
  },
  data() {
    return {
      isModal: false,
      message: ''
    }
  },
  methods: {
    addMate() {
      console.log();
    },
    addRule() {
      this.isModal = true
    },
    closeModal() {
      this.isModal = false
    },
    editRule() {
      this.isModal = true
    }
  }
}
</script>

<style scoped>
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
    padding-bottom: 20%;
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
  .btn_group {
    text-align: right;
    padding-right: 5px;
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
  .page_btn {
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

  /**모달**/
  #table_first {
    background-color: #EABF3A;
    font-family: a고딕14;
    font-size: 14px;
  }
  .addrule_table, .editrule_table {
    background-color: #EABF3A;
  }
  #add_rule_head, #edit_rule_head {
    border-bottom: 2px solid black;
    font-family: a고딕19;
    text-align: center;
    font-size: 20px;
  }
</style>
