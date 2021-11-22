<template>
  <div id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader></househeader>
    <div class="lobby">
      <div class="explain_lobby">
        <explanation v-bind:Username="Username" v-bind:Housename="Housename" v-bind:date="date"></explanation>
      </div>

      <div class="todolist">
        <todoinput v-on:addTodo="addTodo"></todoinput>
        <todolist v-bind:propsdata="todoItems" @removeTodo="removeTodo"></todolist>
      </div>

      <red-button class="pink-button ruleB" @click="move_houserule">HOUSE RULE →</red-button>
      <red-button class="pink-button leaveB" @click="leave_house">Leaving this house</red-button>

    </div>
  </div>
</template>

<script>
import househeader from '../components/layout/house-header.vue'
import minilogo from '../components/mini-logo.vue'
import navimenu from  '../components/navigator.vue'
import RedButton from '../components/red-button.vue'
import explanation from '../components/lobby-explain.vue'
import todolist from '../components/todolist.vue'
import todoinput from '../components/todoinput.vue'

export default {
  name: 'HouseLobby',
  components: {
    househeader,
    minilogo,
    navimenu,
    RedButton,
    explanation,
    todolist,
    todoinput
  },
  data() {
    return {
      Username: 'Soyoung, Seoki, moosongsong',
      Housename: '연희동빨간지붕',
      date: '[2020.10.01~2021.09.30]',
      todoItems: []
      // todolist: '거실청소(무송)'
    }
  },
  methods: {
    // addMate() {
    //   console.log();
    // },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    move_houserule() {
        this.$router.push({ path: 'rule'})
    },
    leave_house() {
        this.$router.push({ path: 'report'})
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
</script>

<style scoped>
  .pink-button {
    background-color: #ED8883;
    width: 194px;
    height: 29px;
    padding-bottom: 5px;
    border-radius: 10px;
    text-align: left;
    font-family: 'Righteous-regular';
    margin-left: 0;
  }
  #change-color {
    background-color: #5BB5B5;
    text-align: left;
  }
  .lobby {
    padding-left: 20px;
    padding-right: 20px;
    height: 75vh;
  }
  /* .explain_house {
    padding-bottom: 3%;
    text-align: left;
  } */
  #house_name {
    font-family: a고딕19;
    font-size: 30px;
    text-align: center;
  }
  #house_title {
    font-size: 30px;
    text-align: center;
  }
  #subtitle,
  #guide_bar {
    width: 194px;
    height: 29px;
    padding-bottom: 5px;
  }
  #explanation {
    font-family: a고딕19;
  }

  #mate_add {
    width: 19px;
    height: 19px;
    position: absolute;
    left: 110px;
    margin-top: 8px;
    cursor: pointer;
  }
/** 프로필 이미지 겹치기 끝 **/

  @media screen and (min-width: 768px) and (max-width: 1024px){
    #house_pic {
      width: 470px;
    }
    .lobby {
      margin-left: 18%;
    }
    #profile_img2,
    #profile_img3 {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    #house_pic {
      width: 470px;
    }
    .lobby {
      height: 110vh;
      margin-left: 30%;
      margin-right: 35%;
    }
    #profile_img2,
    #profile_img3 {
      display: none;
    }
  }
</style>
