<template>
  <div class="menu_drop">
    <button id="dropmenu" @click="isOpen = !isOpen"><img src="./arrow_down.png"></button>
    <nav class="navmenu" v-if="isOpen">
      <ul class="menu">
        <li id="navi_list"><a class="dropdown-item" href="/auth/matelist">mate list</a></li>
        <li id="navi_list"><a class="dropdown-item" href="/auth/chattinglist">chatting list</a></li>
        <li id="navi_list"><a class="dropdown-item" href="/auth/house/lobby">house list</a></li>
        <li id="navi_list"><a class="dropdown-item" href="/auth/mypage">my page</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
import barform from './bar.vue'

  export default {
    name: 'navimenu',
    components: {
      barform
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
</script>


<style scoped>
  .menu_drop {
    padding-bottom: 20px;
    text-align: center;
  }
  #dropmenu {
    width: 100%;
    height: 37px;
    background-color: #E88827;
    border: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .navmenu {
    background-color: #E88827;
  }
  #navi_list {
    height: 37px;
    list-style-type: none;
    /* line-height: 30%; */
    margin-right: 35px;

  }
  .dropdown-item {
    font-family: a고딕14;
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
  .dropdown-item:visited {
    color: black;
  }
  .dropdown-item:hover {
    color: black;
  }
  .dropdown-item:active {
    color: black;
  }
</style>
