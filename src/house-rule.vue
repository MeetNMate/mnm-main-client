<template>
  <div class="rule">
    <p id="logo"><img alt="mnm logo" src="./assets/logo.png"></p>  <!--나중에 mini-logo components로 수정-->

    <househeader></househeader>
    <div id="page_title">
      <img id="title" src="./assets/house_rule_title.png" alt="house rule title">
    </div>

    <button><img id="add_btn" src="./assets/add_btn.png" alt="add button"></button>
    <button><img id="edit_btn" src="./assets/edit_btn.png" alt="edit button"></button>

    <!--표-->
    <div class="overflow-auto">
      <table small>
        <colgroup><col><col></colgroup>
        <colgroup><col><col></colgroup>

        <thead>
          <tr>
            <th>1. 요리를 할 때는...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>조리 후 바로바로 설거지하기</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <!-- <b-table-simple small stacked>
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
            <b-td stacked-heading="1-2.">가스레인지에 흘린 거 바로 치우기</b-td>
            <b-td stacked-heading="1-3.">요리하고 환기하기</b-td>
            <b-td stacked-heading="1-4.">쓴 재료 제자리에 원위치하기</b-td>
            <b-td stacked-heading="1-5.">맛있는건 나눠먹기</b-td>
          </b-tr>
          <b-tr>
            <b-th>2. 우리들의 음주문화!</b-th>
            <b-td stacked-heading="2-1.">친목도모를 위해 주 1회 음주파티 필수 참석</b-td>
            <b-td stacked-heading="2-2.">안주는 퇴근하면서 각자 먹고싶은거 배민으로 주문</b-td>
            <b-td stacked-heading="2-3.">외부인 초대 가능</b-td>
          </b-tr>
          <b-tr>
            <b-th>3. 외부인 관련</b-th>
            <b-td stacked-heading="3-1.">직계가족 방문 허용</b-td>
            <b-td stacked-heading="3-2.">이성 출입은 사전 협의하기</b-td>
            <b-td stacked-heading="3-3.">외부인의 숙박은 불가능하다</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple> -->

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        prev-text="previous"
        next-text="next"
        aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>



      <!-- <b-button><b-img src="./assets/previous_btn.png" fluid alt="previous button"></b-img></b-button>
      <b-button><b-img src="./assets/next_btn.png" fluid alt="next button"></b-img></b-button> -->
    </div>
  </div>



</template>

<script>

export default {
  name: 'HouseRule'
  // data() {
  //   currentPage: 1
  // },
  // computed: {
  //   rows() {
  //     return this.items.length
  //   }
  // }
}
</script>

<style> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  #title {
    width: 211px;
    height: 40px;
  }
  #page_title {
    text-align: center;
  }
  #add_btn {
    width: 21px;
    height: 21px;
  }
  #edit_btn {
    width:37px;
    height: 21px;
  }

  #logo {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  img {
    width: 94px;
    height: 31px;
  }
</style>
