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
    name: 'ReportModal'
  }
</script>

<style>
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
  min-height: 150px;
  margin: auto;
  margin-top: 85%;
  padding-top: 20px;
  background-color: white;
  z-index: 10;
  opacity: 1;
  border-radius: 10%;
  background-color: #EABF3A;
  border: 3px solid black;
}
.modal-footer {
  text-align: left;
}
</style>
