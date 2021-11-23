<template>
  <div class="balloon">
    <img class= "mini-profile" src='../assets/profile_img.png'>
    <div class= "content" id="non-click">
        <p class="name">{{Username}}</p>
        <p>
            <slot></slot>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-yoso',
  props: {
      Imgvalue: Image,
      Username: String,
  },
}
</script>

<style scoped>
.balloon {
  display: flex;
  position:relative;
  width: 95vw;
  min-width: 250px;
  max-width: 400px;
  height: 78px;
  background-color: #EABF3A;
  border-radius: 6px 6px 6px 6px;
  border: solid 2px black;
  z-index: 100;
  margin: 10px auto 25px;
}

p {
    width: 100%;
    margin: 5px 0px 0px;
    white-space: nowrap;
}

.mini-profile {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: auto 5px;
}

.content {
    display: inline-block;
    width: 70%;
    height: 60px;
    overflow: hidden;
    text-align: left;
    margin-left: 5px;
    margin-top: 6px;
}

.name {
    font-weight: bold;
}
</style>
