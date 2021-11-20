<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img id="navbar" src='./arrow_down.png'>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li id="navi_list"><a class="dropdown-item" href="#">mate list</a></li>
      <li id="navi_list"><a class="dropdown-item" href="#">chatting list</a></li>
      <li id="navi_list"><a class="dropdown-item" href="#">house list</a></li>
      <li id="navi_list"><a class="dropdown-item" href="#">my page</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'dropdown'
  }
</script>

<style scoped>
  .dropdown {
    padding-bottom: 30px;
  }
  #navbar {
    width: 25px;
    height: 19px;
    text-align: center;
    padding: none;
  }
  .dropdown-menu {
    width: 100%;
    border-radius: 0;
  }
  .dropdown-menu,
  #navi_list {
    background-color: #E88827;
  }
  #navi_list {
    list-style-type: none;
    border-bottom: 1px solid black;
  }
  #navi_list:focus {
    text-decoration: none;
  }
  button {
    background-color: #E88827;
    border-radius: 0;
  }
  .btn {
    width: 100%;
    height: 37px;
    padding-left: 0;
    padding-right: 0;
  }
  button:focus {
    box-shadow: none;
  }
  a {
    font-family: a고딕14;
    font-size: 20px;
    text-align: center;
  }
  a.over {
    text-decoration: none;
    background-color: #E88827;
  }
</style>
