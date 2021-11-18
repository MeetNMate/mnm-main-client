<template>
  <div class="report_mem">
    <minilogo></minilogo>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/assessment_title.png">
    </div>

    <div class="profile">
      <img id="profile_img" src="./assets/profile_2.png">
      <p id="user_name">seoki</p>
    </div>

    <!--평가 표-->
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
        <!-- <tr>
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
        </tr> -->
      </table>
    </div>

    <!--평가 표-->
    <!-- <div class="overflow-auto">
      <b-table-simple small stacked>
        <colgroup><col><col></colgroup>
        <colgroup><col><col></colgroup>

        <b-thead>
          <b-tr>
            <b-th colspan="2"></b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr>
            <b-th rowspan="1">1. 요리를 할 때는...</b-th>
            <b-td stacked-heading="1-1.">조리 후 바로바로 설거지하기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="1-2.">가스레인지에 흘린 거 바로 치우기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="1-3.">요리하고 환기하기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="1-4.">쓴 재료 제자리에 원위치하기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="1-5.">맛있는건 나눠먹기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
          </b-tr>
          <b-tr>
            <b-th>2. 우리들의 음주문화!</b-th>
            <b-td stacked-heading="2-1.">친목도모를 위해 주 1회 음주파티 필수 참석</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="2-2.">안주는 퇴근하면서 각자 먹고싶은거 배민으로 주문</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="2-3.">외부인 초대 가능</b-td>
            <b-form-rating v-model="value"></b-form-rating>
          </b-tr>
          <b-tr>
            <b-th>3. 외부인 관련</b-th>
            <b-td stacked-heading="3-1.">직계가족 방문 허용</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="3-2.">이성 출입은 사전 협의하기</b-td>
            <b-form-rating v-model="value"></b-form-rating>
            <b-td stacked-heading="3-3.">외부인의 숙박은 불가능하다</b-td>
            <b-form-rating v-model="value"></b-form-rating>
          </b-tr>
        </b-tbody>
      </b-table-simple> -->

      <!-- <div>
        <p id="report_question">연희동빨간지붕 House에서 seoki 님과 함께 한 시간은 어땠나요?</p>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div> -->

      <!--pagination 수정-->
      <!-- <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        prev-text="previous"
        next-text="next"
        last-text="finish"
        aria-controls="my-table"
      ></b-pagination>

      <modal v-if="showModal" @close="showModal = false">
        <span></span>
      </modal> -->

        <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
    <!-- </div> -->

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

export default {
  name: 'HouseMemReport',
  components: {
    minilogo,
    househeader
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scopeds> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  .report_mem {
    padding: 0 20px 0 20px;
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
</style>
