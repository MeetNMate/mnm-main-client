<template>
  <div class="overlay">
      <div class="modal-card">
            <div class="checking-modal">
                <p>
                  <slot></slot>
                </p>
                <div class="btn-area">
                  <RedButton @click="Clickyes">네</RedButton>
                  <RedButton @click="Clickno">아니요</RedButton>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import RedButton from '../red-button.vue'
  export default {
    name: 'Checkmodal',
    components: {
        RedButton,
    },
    data() {
      return {
      };
    },
    methods: {
      Clickyes() {
        this.$emit('modal-res', "yes");
      },
      Clickno() {
        this.$emit('modal-res', "no");
      }
    }
  }

</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.modal-card {
  position: relative;
  width: 80%;
  max-width: 500px;
  margin: 40% auto 0;
}

.checking-modal {
  display: inline-flex;
  flex-direction: column;
  border-radius: 7%;
  background-color: #EABF3A;
  border: 3px solid black;
  padding: 30px 30px 5px;
  opacity: 1;
  z-index: 10;
}

p{
  display: inline-block;
}

.btn-area {
  width: 100%;
  max-width: 388px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  padding-top: 10px;
}
</style>
