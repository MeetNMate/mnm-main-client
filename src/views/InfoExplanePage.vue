<template>
    <div id="change-color">
        <div id="non-click"><mini-logo></mini-logo></div>
        <div><img class="info_image" alt="Info image" src="../assets/info_image.png"></div>
        <div><img class="upper_text" alt="Before Matching" src="../assets/matching_upper_text.png"></div>
        <div><img class="paging" alt="Input Page Number" src="../assets/matching_page_num.png"></div>
        <div>
            <div class="main_content">
                <img class="dobby_img" alt="Dobby image" src="../assets/dobby_image.png">
                <img class="dobby_name" alt="Dobby name" src="../assets/dobby_name.png">
                <p>저는 당신의 하우스메이트를 찾아드리는 도비엠입니다.<br>
                질문에 답해주시면 알맞은 메이트를 추천해드릴게요!<br><br>
                정확한 매칭을 위해 성실히 답변해주세요~ <br><br>
                mnm의 모든 서비스는 매칭 정보 입력 후에 이용 가능합니다.
                </p>  
            </div>
            <div class="button-area">
                <green-button @click="NextB"> start </green-button>
            </div>
        </div>  
    </div>      
</template>

<script scoped>
import GreenButton from '../components/green-button.vue'
import MiniLogo from '../components/mini-logo.vue'

export default {
  name: 'InfoExplanePage',
  components: {
    MiniLogo, GreenButton 
  },
  methods: {
    NextB() {
        this.$router.push({ path: '/matching/survey'})
    },
  },
}
</script>

<style scoped>
#change-color {
  background-color: #CE9E92;
}

.upper_text {
    width: 100%;
    max-width: 308px;
    height: 22px;
    padding-bottom: 20px;
}

.dobby_img {
    display: block;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 6px;
    width: 117px;
    height: 166px;
}

.dobby_name {
    display: block;
    margin: auto;
    margin-bottom: 40px;
    width: 76px;
    height: 20px;
}

.button-area {
    justify-content: right;
}

p {
    padding-top: 1%;
    padding-bottom: 1%;
}
</style>

<style>
.info_image {
    width: 164px;
    height: 84px;
    padding-bottom: 15px;
}

.paging {
    width: 100%;
    max-width: 388px;
    height: 27px;
}

.main_content {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 35px;
}
</style>
