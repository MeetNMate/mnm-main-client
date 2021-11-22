<template>
  <div class="report_mem" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <div class="profile">
      <img id="profile_img" src="../assets/profile_2.png">
      <p id="user_name">seoki</p>
    </div>

    <div class="change-part">
      <div v-if="number === 1">
        <!-- <div class="rule_table"> -->
          <table>
            <tr>
              <th id="first_rule">1. 요리를 할때는...</th>
            </tr>
            <tr>
              <td>1-1. 조리 후 바로바로 설거지하기</td>
            </tr>
            <tr>
              <Rating :grade="0" :maxStars="5" :hasCounter="true" />
            </tr>
            <tr>
              <td>1-2. 가스레인지에 흘린 거 바로 치우기</td>
            </tr>
            <tr>
              <Rating :grade="0" :maxStars="5" :hasCounter="true" />
            </tr>
            <tr>
              <td>1-3. 요리하고 환기하기</td>
            </tr>
            <tr>
              <Rating :grade="0" :maxStars="5" :hasCounter="true" />
            </tr>
            <tr>
              <td>1-4. 쓴 재료 제자리에 원위치하기</td>
            </tr>
            <tr>
              <Rating :grade="0" :maxStars="5" :hasCounter="true" />
            </tr>
            <tr>
              <td>1-5. 맛있는건 나눠먹기</td>
            </tr>
            <tr>
              <Rating :grade="0" :maxStars="5" :hasCounter="true" />
            </tr>
          </table>
      </div>

      <div v-else-if="number === 2">
        <table>
          <tr>
            <th>2. 우리들의 음주문화!</th>
          </tr>
          <tr>
            <td>2-1. 친목도모를 위해 주 1회 음주파티 필수 참석</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>2-2. 안주는 퇴근하면서 각자 먹고싶은 거 배민으로 주문</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>2-3. 외부인 초대 가능</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
        </table>
      </div>

      <div v-else-if="number === 3">
        <table>
          <tr>
            <th>3. 외부인 관련</th>
          </tr>
          <tr>
            <td>3-1. 직계가족 방문 허용</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>3-2. 이성 출입은 사전 협의하기</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>3-3. 외부인의 숙박을 불가능하다</td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
        </table>
      </div>

      <div v-else-if="number === 4">
        <div class="ask_user">
          <p id="question_user">연희동빨간지붕 HOUSE에서 seoki 님과 함께 한 시간은 어땠나요?</p>
          <textarea v-model="message1" rows="8"></textarea>
        </div>
        <reportmodal v-if="modal" @close-modal="modal=false">
        </reportmodal>
      </div>
    </div>

    <div class="button-group">
      <red-button class="white-button prevB" v-if="number != 1" @click="PrevBtn">previous</red-button>
      <red-button class="white-button nextB" v-if="number != 4" @click="NextBtn">next</red-button>
      <red-button class="white-button finishB" v-if="number === 4" @click="SubmitBtn">finish!</red-button>
    </div>
  </div>
</template>

<script>
import minilogo from '../components/mini-logo.vue'
import househeader from '../components/layout/house-header.vue'
import Rating from '../components/Rating.vue'
import RedButton from '../components/red-button.vue'
import reportmodal from '../components/common/Modal_2.vue'
import navimenu from '../components/navigator.vue'


export default {
  name: 'HouseMemReport',
  components: {
    minilogo,
    househeader,
    Rating,
    RedButton,
    reportmodal,
    navimenu
    },
    methods: {
      PrevBtn() {
        this.number--;
      },
      NextBtn() {
        this.number++;
      },
      SubmitBtn() {
        this.modal = true;
      }
    },
  data() {
    return {
      number: 1,
      modal: false,
      message1: "",
    }
  }
}

</script>

<style scoped>
  .white-button {
    display: block;
    background-color: white;
    font-weight: bold;
    font-size: 18px;
    margin: auto;
    width: 104px;
    display: inline;
    cursor: pointer;
  }
  .nextB,
  .finishB {
    float: right;
  }
  .button-group {
    padding: 30px 20px 0 20px;
    justify-content: space-between;
  }
  .change-part {
    margin-left: 20px;
    margin-right: 20px;
  }

  #change-color {
    background-color: #5BB5B5;
  }
  .report_mem {
    text-align: left;
    height: 100vh;
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
  #report_question {
    background-color: #268372;
  }
 /** 마지막 페이지 **/
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

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    table {
      width: 388px;
      margin-left: auto;
      margin-right: auto;
    }
    textarea {
      width: 388px;
    }
    #question_user {
      width: 388px;
      margin-left: auto;
      margin-right: auto;
    }
    .ask_user {
      text-align: center;
    }
  }

  @media screen and (min-width: 1025px) {
    table {
      width: 35%;
      margin-left: auto;
      margin-right: auto;
    }
    textarea {
      width: 35%;

    }
    #question_user {
      width: 35%;
      margin-left: auto;
      margin-right: auto;
    }
    .ask_user {
      text-align: center;
    }
    .report_mem {
      height: 135vh;
    }
  }
</style>
