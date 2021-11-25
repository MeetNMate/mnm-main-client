<template>
    <div class= "full-chat">
        <div class="sendtime">
            <p class="sendat"> {{this.month}}-{{this.day}} {{this.hour}}:{{this.min}} </p>
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
  name: 'user-chatting',
  props: {
      Time: String,
  },
  data() {
      return {
        month:'',
        day:'',
        hour:'',
        min:'',
      }
  },
  created() {
    const sendAt = this.Time;
    const date = new Date(sendAt); // Date 형식으로 변환
    this.month = date.getMonth()+1;
    this.day = date.getDate();
    this.hour = date.getHours();
    this.min = date.getMinutes();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-chat {
    width: 98%;
    display: flex;
    justify-content: right;
}

.balloon {
  display: inline-block;
  position:relative;
  max-width: 420px;
  background: orange;
  border-radius: 6px;
  border: solid 2px black;
  z-index: 10;
  margin: 10px 8px 10px;
}

.balloon:after {
    border-top: 0px solid transparent;
    border-left: 10px solid orange;
    border-right: 0px solid transparent;
    border-bottom: 10px solid transparent;
    content:"";
    position:absolute;
    top: 4px;
    right: -10px;
    display: block;
    z-index: 1;
}

.balloon:before {
    border-top: 0px solid transparent;
    border-left: 14px solid black;
    border-right: 0px solid transparent;
    border-bottom: 14px solid transparent;
    content:"";
    position:absolute;
    top: 2px;
    right: -14px;
    display: block;
    z-index: 0;
}

.msg {
    max-width: 400px;
    text-align: left;
    height: 100%;
    min-height: 14px;
    margin: 3px 3px 3px 5px;
}

.mini-profile {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin: 10px 5px 0px;
}

.sendtime .sendat {
    display: inline-block;
    font-size: 10px;
    overflow: hidden;
}
</style>