<template>
  <div class="report_mem" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="houseName"></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <div class="profile">
      <img id="profile_img" src="../assets/profile_2.png">
      <p id="user_name">{{this.userName}}</p>
    </div>

    <div class="change-part">
      <div v-if="number === 1">
        <table>
          <tr>
            <td>
              하우스 룰을 잘 지켰나요?
            </td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>
              하우스 Todo List를 잘 수행했나요?
            </td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
          <tr>
            <td>
              같이 지내는데 큰 불편함은 없었나요?
            </td>
          </tr>
          <tr>
            <Rating :grade="0" :maxStars="5" :hasCounter="true" />
          </tr>
        </table>
      </div>

      <div v-else-if="number === 2">
        <div class="ask_user">
          <p id="question_user">{{ this.houseName }} HOUSE에서 "{{ this.userName }}"님과 함께 한 시간은 어땠나요?</p>
          <textarea v-model="message1" rows="8"></textarea>
        </div>
        <reportmodal v-if="modal" @close-modal="modal=false">{{ this.userName }}
        </reportmodal>
      </div>
    </div>

    <div class="button-group">
      <red-button class="white-button prevB" v-if="number != 1" @click="PrevBtn">previous</red-button>
      <red-button class="white-button nextB" v-if="number != 2" @click="NextBtn">next</red-button>
      <red-button class="white-button finishB" v-if="number === 2" @click="SubmitBtn">finish!</red-button>
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
// import axios from 'axios'


export default {
  name: 'HouseMemReport',
  components: {
    minilogo,
    househeader,
    Rating,
    RedButton,
    reportmodal,
    navimenu,
  },
  data() {
    return {
      houseName: this.$route.query.houseName, 
      userName: this.$route.query.userName, 
      number: 1,
      modal: false,
      message1: "",
    }
  },
  created() {
    console.log(this.userName, this.houseName);
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
    },

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
    /* background-color: #268372; */
  }
  td {
    padding: 5px 0 5px 15px;
    border-bottom: 1px solid black;
    background-color: #268372;
    font-family: a고딕15;
    font-size: 14px;
  }
  /* th, td {
    font-size: 14px;
    font-family: a고딕14;
  } */
  table {
    border-collapse: collapse;
    width: 100%;
    /* text-align: center; */
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