<template>
  <div>
    <!-- <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav> -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
    <div class="page_header">
      <p id="house_name" style="display: inline">연희동빨간지붕</p>
      <p id="default_house" style="display: inline"> HOUSE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'househeader'
}
</script>

<style> /** scoped : 뷰에서 지원하는 속성으로 스타일 정의를 해당 컴포넌트에만 적용하겠다는 의미 **/
  body {
    background-color: #5BB5B5;
  }
  .page_header {
    text-align: center;
    padding-bottom: 30px;
  }
  #house_name {
    font-family: a고딕19;
    font-size: 30px;
  }
  #default_house {
    font-family: a고딕14;
    font-size: 30px;
  }

</style>
