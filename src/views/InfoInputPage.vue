<template>
    <div id= "change-color">
        <mini-logo></mini-logo>
        <div><img class="info_image" alt="Info image" src="../assets/info_image.png"></div>
        <div><img class="upper_text" alt="Who are you?" src="../assets/matching_upper_text1.png"></div>
        <div>
            <div class="change-part">
                <div v-if="number === 1">
                    <div><img class="paging" alt="Input Page 1" src="../assets/matching_page_num1.png"></div>
                    <p class="explain">먼저, 개인정보를 수집할게요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q1. 당신의 이름은 무엇인가요?</p>
                            <input type="text" @blur="FocusOut" v-model="name" placeholder="write here"/> 
                        </div>
                        <div class="question">
                            <p>Q2. 당신의 성별을 골라주세요!</p>
                            <input type="radio" id="male" value="Male" v-model="sex">
                            <label for="male">남자</label>
                            <input type="radio" id="female" value="FeMale" v-model="sex">
                            <label for="female">여자</label>
                        </div>
                        <div class="question">
                            <p>Q3. 당신의 나이대를 골라주세요!</p>
                            <select v-model="age">
                                <option>10대</option>
                                <option>20~23</option>
                                <option>24~26</option>
                                <option>27~29</option>
                                <option>30대</option>
                                <option>40대 이후</option>
                            </select>
                        </div>
                        <div class="question">
                            <p>Q4. 프로필 사진을 설정해주세요!</p> 
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 2">
                    <div><img class="paging" alt="Input Page 2" src="../assets/matching_page_num2.png"></div>
                    <p class="explain">이제, 매칭 정보를 수집할게요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q5. 당신의 MBTI를 선택해주세요!</p>
                            <select v-model="mbti">
                                <option>모른다</option>
                                <option>INTP</option>
                                <option>INTJ</option>
                                <option>INFP</option>
                                <option>INFJ</option>
                                <option>ISTP</option>
                                <option>ISTJ</option>
                                <option>ISFP</option>
                                <option>ISFJ</option>
                                <option>ENTP</option>
                                <option>ENTJ</option>
                                <option>ENFP</option>
                                <option>ENFJ</option>
                                <option>ESTP</option>
                                <option>ESTJ</option>
                                <option>ESFP</option>
                                <option>ESFJ</option>
                            </select> 
                        </div>
                        <div class="question">
                            <p>Q6. 당신은 흡연을 하시나요?</p>
                            <input type="radio" id="smoker" value="흡연자" v-model="userSmoking">
                            <label for="smoker">흡연자</label>
                            <input type="radio" id="nonsmoker" value="비흡연자" v-model="userSmoking">
                            <label for="nonsmoker">비흡연자</label>
                        </div>
                        <div class="question">
                            <p>Q7. 메이트가 흡연을 해도 괜찮나요?</p>
                            <input type="radio" id="m_smoker" value="흡연자" v-model="mateSmoking">
                            <label for="m_smoker">흡연자</label>
                            <input type="radio" id="m_non" value="비흡연자" v-model="mateSmoking">
                            <label for="m_non">비흡연자</label>
                            <input type="radio" id="nothing" value="상관없다" v-model="mateSmoking">
                            <label for="nothing">상관없다</label>
                        </div>
                        <div class="question">
                            <p>Q8. 반려동물과 같이 살 예정이신가요?</p>
                            <input type="radio" id="p_yes" value="true" v-model="userPet">
                            <label for="p_yes">네</label>
                            <input type="radio" id="p_no" value="false" v-model="userPet">
                            <label for="p_no">아니요</label> 
                        </div>
                        <div class="question">
                            <p v-if="show">Q8-1. 어떤 반려동물을 키울 것인가요?</p> 
                        </div>
                        <div class="question">
                            <p >Q9. 메이트의 반려동물로 허용가능한 것은 무엇인가요?</p> 
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 3">
                    <div><img class="paging" alt="Input Page 3" src="../assets/matching_page_num2.png"></div>
                    <p class="explain">거의 다 끝나가요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q10. 냉/난방 문제</p> 
                        </div>
                        <div class="question">
                            <p>Q11. 벌레를 잡을 수 있나요? (ex.바퀴벌레, 돈벌레, 지네)</p>
                            <input type="radio" id="ub_yes" value="1" v-model="userBugKiller">
                            <label for="ub_yes">잡는데 거리낌이 없다</label>
                            <input type="radio" id="ub_so" value="2" v-model="userBugKiller">
                            <label for="ub_so">시키면 잡을 수 있다</label>
                            <input type="radio" id="ub_no" value="3" v-model="userBugKiller">
                            <label for="ub_no">절대 못잡는다</label> 
                        </div>
                        <div class="question">
                            <p>Q11-1. 메이트가 벌레를 잘 잡았으면 좋겠나요?</p> 
                            <input type="radio" id="mb_yes" value="1" v-model="mateBugKiller">
                            <label for="mb_yes">벌레를 잡을 수 있어야만 한다</label>
                            <input type="radio" id="mb_no" value="3" v-model="mateBugKiller">
                            <label for="mb_no">벌레를 못잡아도 상관없다</label> 
                        </div>
                        <div class="question">
                            <p>Q12. 집에서 밥을 먹을 경우 무엇을 더 선호하나요?</p> 
                            <input type="radio" id="cook" value="1" v-model="userCooking">
                            <label for="cook">직접 요리</label>
                            <input type="radio" id="pack" value="3" v-model="userCooking">
                            <label for="pack">외부 음식(포장, 배달)</label> 
                        </div>
                        <div class="question">
                            <p>Q12-1. 메이트가 집에서 요리하는 게 불편한가요? (ex.냄새문제)</p>
                            <input type="radio" id="mc_yes" value="1" v-model="mateCooking">
                            <label for="mc_yes">불편하다</label>
                            <input type="radio" id="mc_no" value="3" v-model="mateCooking">
                            <label for="mc_no">신경쓰지 않는다(불편하지 않다)</label>  
                        </div>
                        <div class="question">
                            <p>Q13. 선호하는 식사유형을 선택해주세요!</p>
                            <input type="radio" id="e_alone" value="alone" v-model="eatTogether">
                            <label for="e_alone">혼자 먹는 걸 선호한다</label>
                            <input type="radio" id="e_together" value="together" v-model="eatTogether">
                            <label for="e_together">같이 먹는 걸 선호한다</label>   
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 4">
                    <div><img class="paging" alt="Input Page 4" src="../assets/matching_page_num2.png"></div>
                    <p class="explain">마지막 질문이에요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q14. 메이트와 물건을 공유해도 괜찮나요?</p>
                            <input type="radio" id="s_yes" value="1" v-model="shareItem">
                            <label for="s_yes">말 안하고 사용해도 괜찮다</label>
                            <input type="radio" id="s_so" value="2" v-model="shareItem">
                            <label for="s_so">사용하기 전 허락을 받으면 괜찮다</label>
                            <input type="radio" id="s_no" value="3" v-model="shareItem">
                            <label for="s_no">괜찮지 않다(안된다)</label>  
                        </div>
                        <div class="question">
                            <p>Q15. 메이트의 소음을 어느정도 신경쓰시나요?</p> 
                        </div>
                        <div class="question">
                            <p>Q16. 메이트의 음주를 어느정도 신경쓰시나요?</p> 
                        </div>
                        <div class="question">
                            <p>Q17. 집의 정리정돈을 어느정도 신경쓰시나요?</p>
                            <input type="radio" id="c_yes" value="1" v-model="clean">
                            <label for="c_yes">내 공간만 아니면 신경쓰이지 않는다</label>
                            <input type="radio" id="c_so" value="2" v-model="clean">
                            <label for="c_so">공유하는 공간의 경우 신경쓰인다</label>
                            <input type="radio" id="c_no" value="3" v-model="clean">
                            <label for="c_no">메이트의 공간까지 신경쓰인다</label>  
                        </div>
                        <div class="question">
                            <p>Q18. 지인출입 문제에 대해 어떻게 생각하시나요?</p>
                            <input type="radio" id="en_yes" value="1" v-model="enter">
                            <label for="en_yes">본인이 없을 때 말없이 지인이 잠깐 출입해도 상관없다</label>
                            <input type="radio" id="en_so" value="2" v-model="enter">
                            <label for="en_so">미리 말만 하면 지인이 출입해도 상관없다</label>
                            <input type="radio" id="en_no" value="3" v-model="enter">
                            <label for="en_no">누구든 데려오면 안된다</label>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-area">
                <green-button v-if="number != 1" @click="PrevB"> previous </green-button>
                <green-button v-if="number != 4" @click="NextB"> next </green-button>
                <green-button v-if="number === 4" @click="SubB"> submit </green-button>
            </div>     
        </div>      
    </div>     
</template>

<script>
import GreenButton from '../components/green-button.vue'
import MiniLogo from '../components/mini-logo.vue'

export default {
  name: 'InfoInputPage',
  components: {
    MiniLogo, GreenButton
  },
  data() {
      return {
          number: 1,
          show: true,
          sex: '',
          userSmoking: '',
          mateSmoking: '',
          userPet: '',
      }
  },
  methods: {
    PrevB() {
        this.number--;
    },
    NextB() {
        this.show = !this.show;
        this.number++;
    },
    SubB() {
        console.log(this.radioValues);
        this.$router.push({ path: 'waiting'})   //modal로 한번 checking하고 넘어가는 것으로 수정
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
    max-width: 185px;
    height: 22px;
    padding-bottom: 20px;
}

.button-area {
    justify-content: space-around;
}

.explain {
    padding-top: 1%;
    padding-bottom: 1%;
}

p {
    margin-bottom: 2px;
}

.qeustion {
    padding-bottom: 10px;
}
</style>
