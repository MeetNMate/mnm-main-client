<template>
  <div>
    <div class="page_header">
      <p id="house_name" style="display: inline">{{ housename }}</p>
      <p id="default_house" style="display: inline"> HOUSE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'househeader',
  props: {
    housename: String,
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
