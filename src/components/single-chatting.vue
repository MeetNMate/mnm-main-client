<template>
    <div class="balloon" id="shadow" >
        <img class= "mini-profile" src='../assets/profile_img.png'>
        <div class= "content" id="non-click">
            <p class="name">{{Username}}</p>
            <p>
                <slot></slot>
            </p>
        </div>
        <div class= "sub-content" id="non-click">
            <p class="time">{{LastTime}}</p>
            <button class="no-read">{{num}}</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Single-chatting',
  props: {
      Imgvalue: Image,
      Username: String,
      num: String,
      LastTime: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.balloon {
  display: flex;
  position:relative;
  width: 95vw;
  min-width: 250px;
  max-width: 400px;
  height: 78px;
  background: orange;
  border-radius: 6px 6px 0 6px;
  border: solid 2px black;
  z-index: 100;
  margin: 10px auto 25px;
}

.balloon:after {
    border-top: 12px solid orange;
    border-left: 40px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-12px;
    right: 0px;
    display: block;
    z-index: 1;
}

.balloon:before {
    border-top: 13px solid black;
    border-left: 42px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-15px;
    right: -2px;
    display: block;
    z-index: 0;
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

.sub-content {
    display:inline-block;
    text-align: right;
    height: 75px;
    margin-top: 3px;
    margin-right: 3px;
}

.time {
    font-size: 12px;
    color: white;
}

.no-read {
    border-radius: 50px;
    background-color: white;
    border: solid 2px black;
    padding: 2px 9px 2px;
    margin-top: 12px;
}

.name {
    font-weight: bold;
}
</style>