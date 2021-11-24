<template>
  <div class="rule_table">
    <table>
      <tbody>
        <tr v-for="(row, index) in rows" :key="row">
          <td class="index">{{ index+1 }}</td>
          <td id="content">{{ row }}</td>
          <td><span class="removeBtn" type="button" @click="removeRule(row, index)">
            <i class="fas fa-times" aria-hidden="true"></i>
            <!-- far fa-trash-alt -->
          </span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'tablerow',
  props: ['rows'],
  methods: {
    removeRule(row, index) {
      this.$emit('removeRule', row, index);
    }
  },
}
</script>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    width: 100%;
  }
  td {
    padding-bottom: 5px;
  }
  tr {
    /* border-bottom: 1px solid black; */
    text-align: left;
  }
  #content {
    float: left;
    padding-left: 5px;
  }
  .removeBtn {
    float: right;
  }
  .fas {
    font-size: 10px;
  }
  /* @media screen and () */
</style>
