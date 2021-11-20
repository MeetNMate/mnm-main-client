<template>
    <div class="balloon-shadow" id="shadow" >
        <img class= "mini-profile" src='../assets/profile_img.png'>
        <div class= "content">
            <p class="large-size">{{name}}({{age}})</p>
            <p class="user-text">
                <slot></slot>
            </p>
            <div class= "bt-area">
            <red-button @click="ProfilePage" class="mini-button bt1">profile</red-button>
            <red-button @click="ChatPage" class="mini-button bt2">chat!</red-button>
        </div>
        </div>
    </div>
</template>

<script>
import redButton from './red-button.vue'

export default {
  components: { redButton },
  name: 'single-matelist',
  props: {
    name: String,
    age: String,
  },
  methods: {
    ProfilePage() {
        this.$router.push({ path: '/auth/userprofile'})
    },
    ChatPage() {
        this.$router.push({ path: '/auth/chatting'})
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.balloon-shadow {
  display: flex;
  position:relative;
  width: 95vw;
  min-width: 250px;
  max-width: 400px;
  height: 100%;
  background: pink;
  border-radius: 10px 10px 0 10px;
  border: solid 2px rgb(235, 21, 57);
  box-shadow: 5px 9px 0px rgb(235, 21, 57);
  z-index: 100;
  margin: 10px auto 25px;
}

.balloon-shadow:after {
    border-top: 15px solid pink;
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
    border-top: 20px solid rgb(235, 21, 57);
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

.large-size {
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
}

.mini-profile {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: auto 5px;
}

.content {
    display: inline-block;
    width: 80%;
    text-align: left;
    margin: 6px 6px;
}

.user-text {
  margin-top: 3px;
  margin-bottom:10px;
  max-height: 50px;
  overflow: hidden;
}

.mini-button {
  margin-bottom: 0px;
  font-size: 16px;
}

.bt-area {
  text-align: right;
}
</style>