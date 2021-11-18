<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')">
    </div>
    <div class="modal-card">
      <slot />
    </div>
    <div class="modal-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RuleModal',
  }
</script>

<style scoped>
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: #5BB5B5;
}
.modal-card {
  position: relative;
  max-width: 80%;
  min-height: 330px;
  margin: auto;
  margin-top: 60%;
  padding-top: 30px;
  background-color: white;
  z-index: 10;
  opacity: 1;
  border-radius: 7%;
  background-color: #EABF3A;
  border: 3px solid black;
}
.modal-footer {
  text-align: left;
}
</style>
