<template>
    <div class= "full-chat">
        <div class="balloon" id="shadow" >
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user-chatting',
  props: {
      Imgvalue: Image,
      matename: String,
      num: String,
      LastTime: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-chat {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
}

.balloon {
  display: inline-block;
  position:relative;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: orange;
  border-radius: 6px;
  border: solid 2px black;
  z-index: 100;
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

p {
    width: 98%;
    max-width: 400px;
    height: 100%;
    margin: 5px 5px 0px;
    text-align: left;
}

</style>