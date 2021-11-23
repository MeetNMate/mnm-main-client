<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <!-- <i class="checkBtn far fa-heart" aria-hidden="true"></i> -->
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'todolist',
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    }
  }
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
