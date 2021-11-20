<template>
    <div class="balloon" id="shadow" >
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
  name: 'subtitle',
  props: {
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.balloon {
  display: block;
  position:relative;
  width: 95vw;
  max-width: 400px;
  height: 100%;
  background: white;
  border-radius: 10px 10px 0 10px;
  border: solid 2px black;
  z-index: 100;
  margin: 10px auto 25px;
  text-align: center;
}

.balloon:after {
    border-color: white;
    border-top: 12px solid white;
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
    border: solid 2px black;
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
    margin: 5px 10px 5px;
}
</style>