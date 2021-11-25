<template>
    <div class= "full-chat">
        <div>
            <img class= "mini-profile" src='../assets/profile_img.png'>
            <p class="person-name">{{matename}}</p>
        </div>
        <div class="balloon" id="shadow" >
            <p class="msg">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'person-review',
  props: {
      Img: Image,
      matename: String,
      Time: String,
  },
  data() {
      return {
        month:'',
        day:'',
        hour:'',
        min:'',
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-chat {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
}

.balloon {
  display: inline-block;
  position:relative;
  max-width: 420px;
  background: orange;
  border-radius: 6px;
  border: solid 2px black;
  z-index: 100;
  margin: 10px 8px 10px;
}

.balloon:after {
    border-top: 0px solid transparent;
    border-left: 0px solid transparent;
    border-right: 10px solid orange;
    border-bottom: 10px solid transparent;
    content:"";
    position:absolute;
    top: 4px;
    left: -10px;
    display: block;
    z-index: 1;
}

.balloon:before {
    border-top: 0px solid transparent;
    border-left: 0px solid transparent;
    border-right: 14px solid black;
    border-bottom: 14px solid transparent;
    content:"";
    position:absolute;
    top: 2px;
    left: -14px;
    display: block;
    z-index: 0;
}

.msg {
    max-width: 400px;
    height: 100%;
    text-align: center;
    min-height: 14px;
    margin: 3px 5px 3px 3px;
}

.mini-profile {
    display: block;
    width: 35px;
    height: 35px;
    margin: 10px 5px 0px;
}

.name {
    font-weight: bold;
}

.person-name {
    max-width: 35px;
    height: inherit;
    margin: 1px auto;
    font-size: 12px;
    text-align: center;
}
</style>