<template>
  <div class="report">
    <p id="logo"><img alt="mnm logo" src="./assets/logo.png"></p>

    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/assessment_title.png">
    </div>

    <div>
      <table>
        <colgroup>
          <col width="20%">
          <col width="30%">
          <col width="30%">
          <col width="20%">
        </colgroup>
        <tbody>
          <tr v-for="item in items" :key="item.profile">
            <td><img v-bind:src="item.profile">{{ item.link }}</td>
            <td><span v-html="item.name"></span></td>
            <td><span id="report_status" v-html="item.status"></span></td>
            <td><button v-on:src="item.button">{{ item.link }}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <b-table :items="items">
    </b-table> -->
  </div>
</template>

<script>
import househeader from './components/layout/house-header.vue'

export default {
  name: 'HouseReport',
  components: {
    househeader
  },
  data() {   //수정 필수 !! 표 만들어서 프로필 이미지 넣고 이름 넣고 버튼 넣고 하고 싶었지만,,대충,,,뭐 되는 건지 아닌지 모르겠음ㅎㅎ//
    return {
      items: [
        {
          "profile": "",
          "name" : "moosongsong",
          "status" : "<< 평가 완료 >>",
          "button" : "./assets/report_btn.png"
        },
        {
          "profile": "",
          "name" : "seoki",
          "status" : "<< 평가 대기 중... >>",
          "button" : "./assets/report_btn.png"
        }
      ]
    }
  }
}
</script>

<style> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  #title {
    width: 218px;
    height: 40px;
  }
  #page_title {
    text-align: center;
  }
  #profile {
    width: 70px;
    height: 70px;
  }
  span {
    font-family: a고딕19;
  }
  #report_status {
    font-family: a고딕14;
  }

img {
  width: 94px;
  height: 31px;
}
#logo {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>
