<template>
  <div class="menu_drop">
    <div class="overlay">
      <button id="dropmenu" @click="isOpen = !isOpen"><img src="../assets/arrow_down.png"></button>
      <nav class="navmenu" v-if="isOpen">
        <table class="dropdown">
          <tr>
            <td>
              <a class="dropdown-item" href="/auth/matelist">mate list</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="dropdown-item" href="/auth/chattinglist">chatting list</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="dropdown-item" href="/auth/house/lobby">house list</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="dropdown-item" href="/auth/mypage">my page</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="dropdown-item" href="/" @click="logout">log out</a>
            </td>
          </tr>
        </table>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navimenu',
    data() {
      return {
        isOpen: false,
        logout_response: '',
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        if (localStorage.getItem('token') === null) this.logout_response = "success";
        else this.logout_response = "failed";
        console.log("logout response:", this.logout_response)
      }
    }
  }
</script>


<style scoped>
  button {
    outline: none;
  }
  li {
    border-bottom: 1px solid black;
  }
  .dropdown {
    border-collapse: collapse;
    width: 100%;
  }
  tr {
    border-bottom: 1px solid black;
    height: 37px;
  }
  .overlay {
    width: 100%;
    position: absolute;
    z-index: 9999;
  }
  .menu_drop {
    padding-bottom: 60px;
    text-align: center;
  }
  #dropmenu {
    width: 100%;
    height: 37px;
    background-color: #E88827;
    border: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 0;
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
