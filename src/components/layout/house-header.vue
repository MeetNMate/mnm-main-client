<template>
  <div>
    <div class="page_header">
      <p id="house_name" style="display: inline">{{ housename }}</p>
      <p id="default_house" style="display: inline"> HOUSE</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'househeader',
  data() {
    return {
      housename: '',
    }
  },
  created() {
    axios.get('http://10.14.4.42:8080/house/1')
    .then((res)=> {
      console.log('status code:', res.status);
      console.log('data:', res.data);
      this.housename = res.data.data.name;
    })
  }
}
</script>

<style scoped>
  body {
    background-color: #5BB5B5;
  }
  .page_header {
    text-align: center;
    padding-bottom: 30px;
  }
  #house_name {
    font-family: a고딕19;
    font-size: 30px;
  }
  #default_house {
    font-family: a고딕14;
    font-size: 30px;
  }

</style>
