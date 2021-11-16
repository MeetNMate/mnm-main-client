<template>
  <div class="report">
    <minilogo></minilogo>
    <househeader></househeader>

    <div id="page_title">
      <img id="title" src="./assets/assessment_title.png">
    </div>

    <div class="list_table">
      <table>
        <colgroup>
          <col width="20%">
          <col width="60%">
          <col width="20%">
        </colgroup>
        <tbody>
          <tr v-for="item in items" :key="item.profile">
            <td><img v-bind:src="item.profile">{{ item.link }}</td>
            <td><span v-html="item.user"></span></td>
            <!-- <td><span class="plusMate" v-on:click="addMate">{{ item.link }}</span></td> -->
            <td><span v-on:click="startReport"><img v-bind:src="item.button">{{ item.link }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import househeader from './components/layout/house-header.vue'
import minilogo from './components/mini-logo.vue'

export default {
  name: 'HouseReport',
  components: {
    househeader,
    minilogo
  },
  methods: {
    startReport() {
      console.log();
    }
  },
  data() {   //수정 필수 !! //
    return {
      items: [
        {
          "profile": "https://ww.namu.la/s/89b05ae4e797bc096c37dd2d872ca37830de5804b01d209f77efa10661cba9243bc4b2f88f97a0832bba69c2b95deb59fafe8571adaf8439244b46da5cde129067742b3bf0a72cb97c568f20f0d9a6a52fe93929137161c13cab8b5c71a02605bbceb53cf0b1b168fda31a3e56605248",
          "user" : "moosongsong << 평가 완료 >>",
          "button" : "https://ww.namu.la/s/89b05ae4e797bc096c37dd2d872ca37830de5804b01d209f77efa10661cba9243bc4b2f88f97a0832bba69c2b95deb59fafe8571adaf8439244b46da5cde129067742b3bf0a72cb97c568f20f0d9a6a52fe93929137161c13cab8b5c71a02605bbceb53cf0b1b168fda31a3e56605248"
        },
        {
          "profile": "https://w.namu.la/s/116f07b5cfaf907bad8e0652f3b576e5e77caa2bf9d2a6679e0d1c3a27034142fee25fd6ea95bee99811e4de63ff9be7eb194f1d3a2dd392dc12227a58f00a23d3373957e76b4b644aecf75938a22d2272094585c176cdee1c5d6a2c72881775c71219cb10265e4acacf50e03f679820",
          "user" : "seoki << 평가 대기 중... >>",
          "button" : "https://w.namu.la/s/116f07b5cfaf907bad8e0652f3b576e5e77caa2bf9d2a6679e0d1c3a27034142fee25fd6ea95bee99811e4de63ff9be7eb194f1d3a2dd392dc12227a58f00a23d3373957e76b4b644aecf75938a22d2272094585c176cdee1c5d6a2c72881775c71219cb10265e4acacf50e03f679820"
        }
      ]
    }
  }
}
</script>

<style>
  img {
    width: 70px;
    height: 70px;
    padding: 0 10px 0 10px;
  }
  table {
    border-collapse: collapse;
    border-top: 1px solid black;
    margin-left: auto;
    margin-right: auto;
  }
  tr {
    border-bottom: 1px solid black;
  }
  td {
    padding: 10px 0 10px 0;
  }
  span {
    font-family: a고딕19;
  }
  #page_title {
    text-align: center;
    padding-bottom: 30px;
  }
  #title {
    width: 218px;
    height: 40px;
  }
  .list_table {
    padding: 0 10px 0 10px;

  }

</style>
