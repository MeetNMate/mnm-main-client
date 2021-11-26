<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
        <!-- <i class="checkBtn far fa-heart" aria-hidden="true"></i> -->
        {{ todoItem.content }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'todolist',
  props: ['todoItems'],
  data() {
    return {
      resList: [],
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    }
  },
  created() {
    //
  },
}
</script>

<style scoped>
li {
  list-style-type: "\25cb";
  padding-bottom: 5px;
  margin-left: 0;
}
.far {
  padding-right: 15px;
}
.removeBtn {
  float: right;
}
</style>