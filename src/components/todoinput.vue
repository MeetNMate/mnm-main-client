<template>
  <div class="todolist">
    <red-button class="pink-button">TODO LIST</red-button>
    <red-button class="addContainer" @click="isOpen =!isOpen">add</red-button>
    <input type="text" v-if="isOpen" v-model="newTodoItem" placeholder="추가하고 Enter 하쇼" v-on:keypress.enter="addTodo">
  </div>
</template>

<script>
import RedButton from '../components/red-button.vue'

export default {
  name: 'todoinput',
  components: {
    RedButton
  },
  data() {
    return {
      newTodoItem: '',
      isOpen: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value)
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
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
input {
  background: #5BB5B5;
  border: 1px solid black;
  width: 100%;
  font-size: 16px;
  font-family: a고딕14;
}
input:focus {
  outline: none;
}
.inputBox {
  background: #5BB5B5;
}
.addBtn {
  background-color: #268372;
  border-radius: 50px;
  width: 30px;
  height:30px;
}
.addContainer {
  font-size: 15px;
  background-color: #268372;
  float: right;
}
/* li {
  list-style-type: "\25cb";
  font-family: a고딕14;
  margin-bottom: 7px;
} */
</style>
