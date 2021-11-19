<template>
  <div class="background-image">
    <div class="left-side">
      <img src='../assets/profile_img.png'>
    </div>
    <div class="right-side">
      <p class="large-size">{{name}}({{age}})</p>
      <p class="mid-size">
        <slot></slot>
      </p>
      <red-button @click="ProfilePage" class="mini-button bt1">profile</red-button>
      <red-button @click="ChatPage" class="mini-button bt2">chat!</red-button>
    </div>
  </div>
</template>

<script>
import redButton from './red-button.vue'
export default {
  components: { redButton },
  name: 'matelist-single',
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
.mini-button {
  position: absolute;
  bottom: 0px;
  font-size: 16px;
  margin: 5px 20px 2px 5px;
}

.bt1 {
  right: 80px;
}
.bt2 {
  right: 15px;
}

.background-image {
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 350px;
  max-width: 388px;
  height: 141px;
  background-image: url("../assets/speakbox_image.png");
  background-size: contain;
  background-repeat: no-repeat;
}
img {
  width: 80%;
  vertical-align: center;
}

p {
  display: inline-block;
  width: 100%;
  margin: 2px 0px 3px;
}

.left-side {
  display: inline-block;
  position: absolute;
  width: 29%;
  height: 70%;
  top: 8px;
  left: 0px;
  vertical-align: center;
}

.right-side {
  display: inline-block;
  position: absolute;
  width: 70%;
  height: 70%;
  top: 8px;
  right: 10px;
  vertical-align: center;
}

.large-size {
  font-size: 20px;
  font-weight: bold;
}

.mid-size {
  font-size: 16px;
}
</style>