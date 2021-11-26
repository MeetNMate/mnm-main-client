<template>
  <div class="rating">
    <ul class="list">
      <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['grade', 'maxStars', 'hasCounter'],
  data() {
    return {
      stars: this.grade
    }
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
      this.$emit("score", star);
    }
  },
}
</script>

<style scoped>
  .rating {
    display: flex;
    margin: auto;
    align-items: center;
    border-bottom: 1px solid black;
  }
  .list {
    padding-left: 20px;
    margin: 0 20px 0 0;
    /* margin-left: auto;
    margin-right: auto; */
    display:inline-block;
  }
  .star {
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    padding-left: 10px;
  }
  .info {
    text-align: center;
    display: table;
  }
</style>
