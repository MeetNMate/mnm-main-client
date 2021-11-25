<template>
  <div class="overlay">
      <div class="modal-card">
            <div class="makehouse-modal">
                <div class="question">
                  <p>하우스 이름을 입력해 주세요!</p>
                  <input type="text" v-model="this.Input.housename">
                </div>
                <div class="question">
                  <p>하우스 소개를 적어주세요!</p>
                  <input type="text" v-model="this.Input.housedescription">
                </div>
                <div class="question">
                  <p>어느 곳에 사실 건가요?</p>
                  <input type="text" v-model="this.Input.location">
                </div>
                <div class="question">
                  <p>몇 명이서 사실 건가요?</p>
                  <input type="number" v-model="this.Input.capacity">
                </div>
                <div class="btn-area">
                  <RedButton @click="Clickyes">확인</RedButton>
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
        Input: {
          housename:'',
          housedescription:'',
          location:'',
          capacity:'',
        }
      };
    },
    methods: {
      Clickyes() {
        this.$emit('input_value', this.Input);
      },
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
  z-index: 100;
}

.modal-card {
  position: relative;
  width: 80%;
  max-width: 500px;
  margin: 40% auto 0;
}

.makehouse-modal {
  display: inline-flex;
  flex-direction: column;
  border-radius: 7%;
  background-color: #EABF3A;
  border: 3px solid black;
  padding: 10px 10px 3px;
  opacity: 1;
  z-index: 100;
  justify-content: center;
}

p{
  display: inline-block;
  padding-right: 15px;
  margin: 0px;
}

.question {
  display: flex;
  padding: 15px 0px 10px 0px;
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
