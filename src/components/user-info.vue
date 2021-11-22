<template>
  <div class="user_profile">
    <!-- <div class="user_info">성별: <p id="gender">{{ gender }}</p>
</div> -->
    <p class="user_info" id="gender">성별: {{ gender }}</p>
    <p class="user_info" id="age">나이: {{ age }}</p>
    <p class="user_info" id="MBTI">MBTI: {{ MBTI }}</p>
    <p class="user_info" id="smoking">흡연 여부: {{ smoking }}</p>
    <p class="user_info" id="with_pet">반려동물 유무: {{ with_pet }}</p>
    <p class="user_info" id="bug">벌레: {{ bug }}</p>
    <!-- <p class="user_info">성별: </p>
    <p id="gender">{{ gender }}</p>
    <div class="user_info">나이: <p id="age">{{ age }}</p></div>
    <div class="user_info">MBTI: <p id="MBTI">{{ MBTI }}</p></div>
    <div class="user_info">흡연 여부: <p id="smoking">{{ smoking }}</p></div>
    <div class="user_info">반려동물 유무: <p id="with_pet">{{ with_pet }}</p></div>
    <div class="user_info">벌레: <p id="bug">{{ bug }}</p></div> -->

    <!-- <p class="user_info" id="gender">성별: </p>
    <p></p>
    <p class="user_info" id="age">나이: </p>
    <p></p>
    <p class="user_info" id="MBTI">MBTI: </p>
    <p></p>
    <p class="user_info" id="smoking">흡연 여부: </p>
    <p></p>
    <p class="user_info" id="with_pet">반려동물 유무: </p>
    <p></p>
    <p class="user_info" id="bug">벌레: </p>
    <p></p> -->
  </div>
</template>

<script>
export default {
  name: 'userinfo',
  props: {
    gender: String,
    age: String,
    MBTI: String,
    smoking: String,
    with_pet: String,
    bug: String
  }
}
</script>

<style>
  .user_info {
    background-color: white;
    border-radius: 5px;
    width: 280px;
    text-align: left;
    padding-left: 7px;
    margin-bottom: 7px;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
    height: 23px;
  }
</style>
