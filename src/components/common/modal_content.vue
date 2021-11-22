<template>
  <div class="content">
    <table>
      <tbody>
        <tr>
          <th>대분류</th>
        </tr>
        <tr>
          <td>
            <input v-model="message1">
          </td>
        </tr>
        <tr>
          <th>소분류</th>
        </tr>
        <tr>
          <td>
            <input v-model="message2">
          </td>
        </tr>
        <tr>
          <th>내용</th>
        </tr>
        <tr>
          <td>
            <textarea v-model="message3" rows="5"></textarea>
          </td>
        </tr>
      </tbody>
      <footer class="footer_btn">
        <slot></slot>
      </footer>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'modalcontent',
    props: {
      msg: String,
    },
    data() {
      return {
        message1: "",
      }
    },

  }
</script>

<style scoped>
  table {
    background-color: #EABF3A;
  }
  thead {
    border-bottom: 2px solid black;
    font-family: a고딕19;
    text-align: center;
    font-size: 20px;
  }
  th {
    background-color: #EABF3A;
    font-family: a고딕14;
    font-size: 14px;
  }
  input {
    float: left;
    width: 90%;
    border: none;
    background-color: #EABF3A;
  }
  textarea {
    float: left;
    width: 90%;
    resize: none;
    border: none;
    background-color: #EABF3A;
  }
  .content {
    background: #EABF3A;
  }
</style>
