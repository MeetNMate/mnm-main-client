<template>
  <div class="user_profile">
    <p class="user_info" id="gender">성별: {{ gender }}</p>
    <p class="user_info" id="age">나이: {{ age }}</p>
    <p class="user_info" id="MBTI">MBTI: {{ MBTI }}</p>
    <p class="user_info" id="smoking">흡연 여부: {{ smoking }}</p>
    <p class="user_info" id="with_pet">반려동물 유무: {{ with_pet }}</p>
    <p class="user_info" id="bug">벌레: {{ bug }}</p>
  </div>
</template>

<script>
export default {
  name: 'userinfo',
}
</script>

<style>
  .user_info {
    background-color: white;
    border-radius: 5px;
    width: 280px;
    text-align: left;
    padding-left: 7px;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
  }
</style>
