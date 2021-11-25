<template>
  <div id ="change-color">
    <minilogo></minilogo>
    <navimenu></navimenu>
    <househeader v-bind:housename="housename"></househeader>
    <div class="lobby">
      <div class="explain_lobby">
        <explanation v-bind:Username="Username" v-bind:housename="housename" v-bind:content="content" v-bind:location="location"></explanation>
      </div>

      <div class="todolist">
        <todoinput v-on:addTodo="addTodo"></todoinput>
        <todolist v-bind:todoItems="todoItems" @removeTodo="removeTodo"></todolist>
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
import axios from 'axios'

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
  // props: {
  //   houseid: {
  //     type: String,
  //     default: '',
  //   }
  // },
  data() {
    return {
      mainserve: "http://10.14.4.217:5000",
      Username: 'Soyoung, Seoki, moosongsong',
      housename: '연희동빨간지붕',
      todoItems: [],
      Itemnum:0,
      location: '광야로 걸어가 알아 니 홈그라운드~',
      // todolist: '거실청소(무송)'
      houseid:'',
      userid:'',
      Send: {
        houseId:'',
        userId:'',
        role:'',
        week:'',
        startAt:'',
        routine:'',
      }
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
    async addTodo(todoItem) {
      // 값 지정
      await localStorage.setItem(todoItem, todoItem);
      await this.todoItems.push(todoItem);

      // 보낼 값 지정
      this.Send.role = await this.todoItems[this.Itemnum];
      this.Send.houseId = await this.houseid;
      this.Send.userId = await this.userid;

      // 호출
      axios.post(this.mainserve + '/role/', this.Send)
      .then((res)=> { //수정해야함!!
        console.log('status code:', res.status);
        console.log('data:', res.data);
      });
    },
    // async addTodo(todoItem) {
      // this.Send.role = await this.todoItem[this.Itemnum];
      // this.Send.houseId = await this.houseid;
      // this.Send.userId = await this.userid;
      // await this.Itemnum++;
      // console.log("===========", this.Send);
      // axios.post(this.mainserve + '/role/', this.Send)
      // .then((res)=> { //수정해야함!!
      //   console.log('status code:', res.status);
      //   console.log('data:', res.data);
      //   })
      //
      // // localStorage.setItem(todoItem, todoItem);
      // this.todoItems.push(todoItem);
    // },
    removeTodo(todoItem, index) {

      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    move_houserule() {
      this.$router.push({
        name: 'HouseRule',
        query: {houseid: this.houseid}
      })
    },
    leave_house() {
        this.$router.push({ path: 'report'})
    },
  },
  created() {
    // this.houseid = localStorage.getItem('houseid');
    this.houseid = this.$route.query.houseid;
    this.userid = localStorage.getItem('uid');
    console.log('house id:', this.houseid);
    console.log('user id:', this.userid);

    axios.get(this.mainserve + '/house/'+ this.houseid,
    { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}})
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      this.housename = res.data.data.name;
      this.content = res.data.data.description;
      this.location = res.data.data.location;
      let userList =  res.data.data.users;
      let tempStr = ' ';
      for(let key in userList) {
        if (key == 0) {
          tempStr = tempStr + userList[key].name;
        }else{
          tempStr = tempStr + ', '+ userList[key].name;
        }
        this.Itemnum++;
      }
      this.Username = tempStr;
      console.log('result:', tempStr);
    });
    axios.get(this.mainserve + '/role/house/'+ this.houseid)
    .then((res)=> {

      // this.resList = res.data.data; // 가져온거
      const getData = res.data.data;
      let tempList = [];
      for(let key in getData){
        let tempStr = ` ${getData[key].role} (${getData[key].userName})`;
        tempList.push(tempStr);
      }
      // this.todoItems = this.resList; //
      this.todoItems = tempList
      console.log(tempList);


    });
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // }
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
    height: 80vh;
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
