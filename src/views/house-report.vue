<template>
  <div class="report" id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="housename"></househeader>

    <div id="page_title">
      <img id="title" src="../assets/assessment_title.png">
    </div>

    <reportlist v-bind:user_name="user_name" v-bind:status="status"></reportlist>
    <reportlist v-bind:user_name="user_name" v-bind:status="status"></reportlist>

  </div>

</template>

<script>
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import GreenButton from '../components/green-button.vue'
import navimenu from '../components/navigator.vue'
import reportlist from '../components/report_list.vue'

export default {
  name: 'HouseReport',
  components: {
    househeader,
    minilogo,
    GreenButton,
    navimenu,
    reportlist
  },
  data() {
    return {
      user_name: 'moosongsong',
      status: '<<평가 대기 중...>>',
      housename: '연희동빨간지붕'
    }
  }
}
</script>

<style scoped>
  .report {
    height: 100vh;
    }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
  #page_title {
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }
  #title {
    width: 218px;
    height: 40px;
  }

  #btn_report {
    width: 63px;
    height: 25px;
    padding-right: 20px;
    cursor: pointer;
  }
</style>
