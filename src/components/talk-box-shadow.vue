<template>
    <div class="balloon-shadow" id="shadow" >
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
.balloon-shadow {
  display: block;
  position:relative;
  width: 95vw;
  max-width: 400px;
  height: 100%;
  background: white;
  border-radius: 10px 10px 0 10px;
  border: solid 2px black;
  box-shadow: 5px 9px 0px pink;
  z-index: 100;
  margin: 0px;
}

.balloon-shadow:after {
    border: solid 2px black;
    border-color: white;
    border-top: 15px solid white;
    border-left: 30px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-15px;
    right: 0px;
    display: block;
    z-index: 2;
}

.balloon-shadow:before {
    border: solid 2px black;
    border-top: 20px solid pink;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    bottom:-26px;
    right: -7px;
    display: block;
    z-index: 0;
}

</style>