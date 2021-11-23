<template>
  <div class="rule_table">
    <table>
      <tr v-for="row in rows" :key="row.number">
        <td><span v-html="row.number"></span></td>
        <td><span v-html="row.rule"></span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          'number': 1,
          'rule': '조리 후 바로바로 설거지하기'
        },
        {
          'number' : 2,
          'rule' : '가스레인지에 흘린 거 바로 치우기'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>


<!-- <template>
  <div class="rule_table">
    <table>
      <tr v-for="row in rows">
        <td>{{ row.rulenum }}</td>
        <td>{{ row.ruleitem }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tablerow',
  data: {
    rows: [
      {
        rulenum: '1',
        ruleitem: '조리 후 바로바로 설거지하기'
      },
      {
        rulenum: '2',
        ruleitem: '가스레인지에 흘린 거 바로 치우기'
      }
    ]
  }
}
</script>

<style scoped>

</style> -->



<!-- <template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(message, index) in propsdata" :key="message" class="tablerow">
        {{ message }}
      </li>
      <span class="removeBtn" type="button" @click="removeRule(message, index)">
        <i class="far fa-trash-alt" aria-hidden="true"></i>
      </span>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'tablerow',
  props: ['propsdata'],
  methods: {
    removeRule(message, index) {
      this.$emit('removeRule', message, index);
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
}
.removeBtn {
  float: right
}
</style>
