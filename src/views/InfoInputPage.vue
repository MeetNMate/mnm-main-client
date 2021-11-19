<template>
    <div id= "change-color">
        <div id="non-click"><mini-logo></mini-logo></div>
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
                            <input class="inputtext" type="text" v-model="profile.name" placeholder="write name"/> 
                        </div>
                        <div class="question">
                            <p>Q2. 당신의 성별을 골라주세요!</p>
                            <div class="answer">
                                <input type="radio" id="male" value="0" v-model="profile.sex">
                                <label for="male">남자</label>
                            </div>
                            <div class="answer">
                            <input type="radio" id="female" value="1" v-model="profile.sex">
                            <label for="female">여자</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q3. 당신의 나이를 입력해주세요!</p>
                            <input class="inputtext" type="number" min='10' max='100' v-model="profile.age" placeholder="age"/>
                        </div>
                        <div class="question">
                            <p>Q4. 프로필 사진을 설정해주세요!</p>
                            <input class="inputfile" ref="profileImage" accept="image/*" type="file"/> 
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 2">
                    <div><img class="paging" alt="Input Page 2" src="../assets/matching_page_num2.png"></div>
                    <p class="explain">이제, 매칭 정보를 수집할게요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q5. 당신의 MBTI를 선택해주세요!</p>
                            <select v-model="matching_info.mbti">
                                <option value="모른다">모른다</option>
                                <option value="INTP">INTP</option>
                                <option value="INTJ">INTJ</option>
                                <option value="INFP">INFP</option>
                                <option value="INFJ">INFJ</option>
                                <option value="ISTP">ISTP</option>
                                <option value="ISTJ">ISTJ</option>
                                <option value="ISFP">ISFP</option>
                                <option value="ISFJ">ISFJ</option>
                                <option value="ENTP">ENTP</option>
                                <option value="ENTJ">ENTJ</option>
                                <option value="ENFP">ENFP</option>
                                <option value="ENFJ">ENFJ</option>
                                <option value="ESTP">ESTP</option>
                                <option value="ESTJ">ESTJ</option>
                                <option value="ESFP">ESFP</option>
                                <option value="ESFJ">ESFJ</option>
                            </select> 
                        </div>
                        <div class="question">
                            <p>Q6. 당신은 흡연을 하시나요?</p>
                            <div class="answer">
                                <input type="radio" id="smoker" value="1" v-model="matching_info.user_smoking">
                                <label for="smoker">흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="nonsmoker" value="0" v-model="matching_info.user_smoking">
                                <label for="nonsmoker">비흡연자</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q7. 메이트가 흡연을 해도 괜찮나요?</p>
                            <div class="answer">
                                <input type="radio" id="m_smoker" value="1" v-model="matching_info.mate_smoking">
                                <label for="m_smoker">흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="m_non" value="2" v-model="matching_info.mate_smoking">
                                <label for="m_non">비흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="nothing" value="3" v-model="matching_info.mate_smoking">
                                <label for="nothing">상관없다</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q8. 반려동물과 같이 살 예정이신가요?</p>
                            <div class="answer">
                                <input type="radio" id="p_yes" value="1" v-model="matching_info.user_pet">
                                <label for="p_yes">네</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="p_no" value="0" v-model="matching_info.user_pet">
                                <label for="p_no">아니요</label> 
                            </div>
                        </div>
                        <div class="question">
                            <div class="hide" v-if="show_userpet">
                                <p>Q8-1. 어떤 반려동물을 키울 것인가요?</p>
                                <div class="answer">        
                                    <input type="checkbox" id="u_dog" value="1" v-model="matching_info.user_pet_dog">
                                    <label for="u_dog">강아지</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_cat" value="1" v-model="matching_info.user_pet_cat">
                                    <label for="u_cat">고양이</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_reptile" value="1" v-model="matching_info.user_pet_reptile_fish">
                                    <label for="u_reptile">파충류, 어류</label>
                                </div>
                                <div class="answer">                                
                                    <input type="checkbox" id="u_rodent" value="1" v-model="matching_info.user_pet_rodent">
                                    <label for="u_rodent">설치류</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_bird" value="1" v-model="matching_info.user_pet_bird">
                                    <label for="u_bird">조류</label>
                                </div>
                                <div class="answer">
                                    <label for="u_etc">기타: </label>
                                    <input class="inputtext mini" type="text" id="u_etc" v-model="matching_info.user_pet_etc"/>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p >Q9. 메이트의 반려동물로 허용가능한 것은 무엇인가요?</p> 
                            <div class="answer">
                                <input type="radio" id="mate_yes" value="1" v-model="matching_info.mate_pet">
                                <label for="mate_yes">어떤 동물이든 모두 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mate_so" value="2" v-model="matching_info.mate_pet">
                                <label for="mate_so">특정 동물만 괜찮다</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="mate_no" value="3" v-model="matching_info.mate_pet">
                                <label for="mate_no">어떠한 동물도 안된다</label> 
                            </div>
                        </div>
                        <div class="question">
                            <div class="hide" v-if="show_matepet">
                                <p>Q9-1. 어떤 반려동물은 괜찮나요?</p>
                                <div class="answer">        
                                    <input type="checkbox" id="m_dog" value="1" v-model="matching_info.mate_pet_dog">
                                    <label for="m_dog">강아지</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_cat" value="1" v-model="matching_info.mate_pet_cat">
                                    <label for="m_cat">고양이</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_reptile" value="1" v-model="matching_info.mate_pet_reptile_fish">
                                    <label for="m_reptile">파충류, 어류</label>
                                </div>
                                <div class="answer">                                
                                    <input type="checkbox" id="m_rodent" value="1" v-model="matching_info.mate_pet_rodent">
                                    <label for="m_rodent">설치류</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_bird" value="1" v-model="matching_info.mate_pet_bird">
                                    <label for="m_bird">조류</label>
                                </div>
                                <div class="answer">
                                    <label for="m_etc">기타: </label>
                                    <input class="inputtext mini" type="text" id="m_etc" v-model="matching_info.mate_pet_etc"/>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 3">
                    <div><img class="paging" alt="Input Page 3" src="../assets/matching_page_num3.png"></div>
                    <p class="explain">거의 다 끝나가요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q10. 에어컨을 얼마나 자주 트나요?</p>
                            <div class="answer">
                                <input type="radio" id="air_yes" value="1" v-model="matching_info.air_like_airconditioner">
                                <label for="air_yes">항상 틀어놓는다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="air_so" value="2" v-model="matching_info.air_like_airconditioner">
                                <label for="air_so">더울때만 가끔 틀고 끈다</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="air_no" value="3" v-model="matching_info.air_like_airconditioner">
                                <label for="air_no">거의 안 튼다</label> 
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q11. 난방을 얼마나 자주 트나요?</p>
                            <div class="answer">
                                <input type="radio" id="heat_yes" value="1" v-model="matching_info.air_like_heater">
                                <label for="heat_yes">항상 틀어놓는다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="heat_so" value="2" v-model="matching_info.air_like_heater">
                                <label for="heat_so">추울때만 낮은 온도로 튼다.</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="heat_no" value="3" v-model="matching_info.air_like_heater">
                                <label for="heat_no">거의 안 튼다</label> 
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q12. 벌레를 잡을 수 있나요? (ex.바퀴벌레, 돈벌레, 지네)</p>
                            <div class="answer">
                                <input type="radio" id="ub_yes" value="1" v-model="matching_info.user_bug_killer">
                                <label for="ub_yes">잡는데 거리낌이 없다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="ub_so" value="2" v-model="matching_info.user_bug_killer">
                                <label for="ub_so">시키면 잡을 수 있다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="ub_no" value="3" v-model="matching_info.user_bug_killer">
                                <label for="ub_no">절대 못잡는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q13. 메이트가 벌레를 잘 잡았으면 좋겠나요?</p> 
                            <div class="answer">
                                <input type="radio" id="mb_yes" value="1" v-model="matching_info.mate_bug_killer">
                                <label for="mb_yes">벌레를 잡을 수 있어야만 한다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mb_no" value="0" v-model="matching_info.mate_bug_killer">
                                <label for="mb_no">벌레를 못잡아도 상관없다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q14. 집에서 밥을 먹을 경우 무엇을 더 선호하나요?</p> 
                            <div class="answer">
                                <input type="radio" id="cook" value="0" v-model="matching_info.user_cooking">
                                <label for="cook">직접 요리</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="pack" value="1" v-model="matching_info.user_cooking">
                                <label for="pack">외부 음식(포장, 배달)</label> 
                            </div>
                        </div>
                        <div class="question">
                            <p>Q15. 메이트가 집에서 요리하는 게 불편한가요? (ex.냄새문제)</p>
                            <div class="answer">
                                <input type="radio" id="mc_yes" value="1" v-model="matching_info.mate_cooking">
                                <label for="mc_yes">불편하다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mc_no" value="0" v-model="matching_info.mate_cooking">
                                <label for="mc_no">신경쓰지 않는다(불편하지 않다)</label>  
                            </div>
                        </div>
                        <div class="question">
                            <p>Q16. 선호하는 식사유형을 선택해주세요!</p>
                            <div class="answer">
                                <input type="radio" id="e_together" value="1" v-model="matching_info.eat_together">
                                <label for="e_together">같이 먹는 걸 선호한다</label>
                            </div> 
                            <div class="answer">
                                <input type="radio" id="e_alone" value="0" v-model="matching_info.eat_together">
                                <label for="e_alone">혼자 먹는 걸 선호한다</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 4">
                    <div><img class="paging" alt="Input Page 4" src="../assets/matching_page_num4.png"></div>
                    <p class="explain">마지막 페이지에요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q17. 메이트와 물건을 공유해도 괜찮나요?</p>
                            <div class="answer">
                                <input type="radio" id="s_yes" value="1" v-model="matching_info.share_item">
                                <label for="s_yes">말 안하고 사용해도 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="s_so" value="2" v-model="matching_info.share_item">
                                <label for="s_so">사용하기 전 허락을 받으면 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="s_no" value="3" v-model="matching_info.share_item">
                                <label for="s_no">괜찮지 않다(안된다)</label>
                            </div>  
                        </div>
                        <div class="question">
                            <p>Q18. 메이트의 통화/게임 소음을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="talk_no" value="1" v-model="matching_info.noise_talking">
                                <label for="talk_no">10분 이전의 소리도 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="talk_so" value="2" v-model="matching_info.noise_talking">
                                <label for="talk_so">10분 이상의 소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="talk_yes" value="3" v-model="matching_info.noise_talking">
                                <label for="talk_yes">별로 신경쓰이지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q19. 메이트의 동영상/음악 소음을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="music_no" value="1" v-model="matching_info.noise_music">
                                <label for="music_no">10분 이전의 소리도 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="music_so" value="2" v-model="matching_info.noise_music">
                                <label for="music_so">10분 이상의 소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="music_yes" value="3" v-model="matching_info.noise_music">
                                <label for="music_yes">별로 신경쓰이지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q20. 메이트의 알람소리를 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="alarm_no" value="1" v-model="matching_info.noise_alarm">
                                <label for="alarm_no">지속적인 알람소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alarm_yes" value="0" v-model="matching_info.noise_alarm">
                                <label for="alarm_yes">별로 신경쓰이지 않는다</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q21. 메이트의 음주를 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="alcohol_1" value="1" v-model="matching_info.mate_alcohol">
                                <label for="alcohol_1">메이트가 술 냄새를 풍기는 것도 싫다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_2" value="2" v-model="matching_info.mate_alcohol">
                                <label for="alcohol_2">메이트가 술을 많이 마신 것 같은 모습을 보이면 싫다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_3" value="3" v-model="matching_info.mate_alcohol">
                                <label for="alcohol_3">메이트가 술 주정만 하지 않으면 된다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_4" value="4" v-model="matching_info.mate_alcohol">
                                <label for="alcohol_4">메이트가 술 문제는 신경쓰지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q22. 집의 정리정돈을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="c_no" value="1" v-model="matching_info.mate_clean">
                                <label for="c_no">메이트의 공간까지 신경쓰인다</label>
                            </div> 
                            <div class="answer">
                                <input type="radio" id="c_so" value="2" v-model="matching_info.mate_clean">
                                <label for="c_so">공유하는 공간의 경우 신경쓰인다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="c_yes" value="3" v-model="matching_info.mate_clean">
                                <label for="c_yes">내 공간만 아니면 신경쓰이지 않는다</label><br>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q23. 지인출입 문제에 대해 어떻게 생각하시나요?</p>
                            <div class="answer">
                                <input type="radio" id="en_no" value="1" v-model="matching_info.permission_to_enter">
                                <label for="en_no">누구든 데려오면 안된다</label>
                            </div>  
                            <div class="answer">
                                <input type="radio" id="en_so" value="2" v-model="matching_info.permission_to_enter">
                                <label for="en_so">미리 말만 하면 지인이 출입해도 상관없다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="en_yes" value="3" v-model="matching_info.permission_to_enter">
                                <label for="en_yes">본인이 없을 때 말없이 지인이 잠깐 출입해도 상관없다</label><br>
                            </div>
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
          show_userpet: false,
          show_matepet: false,
          profile: {
              uid:'',
              image: '',
              name: '',
              sex: '',
              age:'',
              score:'',
          },
          matching_info:{
              uid:'',
              mbti:'',
              user_smoking:'',
              mate_smoking:'',
              user_pet:'',
              user_pet_dog: 0,
              user_pet_cat: 0,
              user_pet_reptile_fish: 0,
              user_pet_rodent: 0,
              user_pet_bird: 0,
              user_pet_etc: 0,
              mate_pet:'',
              mate_pet_dog: 0,
              mate_pet_cat: 0,
              mate_pet_reptile_file: 0,
              mate_pet_rodent: 0,
              mate_pet_bird: 0,
              mate_pet_etc:'',
              air_like_airconditioner:'',
              air_like_heater:'',
              noise_talking:'',
              noise_music:'',
              noise_alarm:'',
              user_bug_killer:'',
              mate_bug_killer:'',
              user_cooking:'',
              mate_cooking:'',
              eat_together:'',
              share_item:'',
              mate_alcohol:'',
              mate_clean:'',
              permission_to_enter:'',
          },
      }
  },
  watch: {
    matching_info: {
        deep: true,
        handler(){
            if(this.matching_info.user_pet == '1'){
                this.show_userpet = true;
            }
            else{ this.show_userpet = false;}

            if(this.matching_info.mate_pet == '2'){
                this.show_matepet = true;
            }else{ this.show_matepet = false;}
        },
    }, 
  },
  methods: {
    PrevB() {
        this.number--;
    },
    NextB() {
        this.number++;
    },
    SubB() {
        if(this.profile.image == ''){
            this.profileImage = './assets/profile_img.png';
        }
        console.log(this.profile.image, this.profileImage);
        this.profile.image = this.$refs.profileImage.files[0];
        console.log(this.profile, this.matching_info);
//        this.$router.push({ path: 'waiting'})   //modal로 한번 checking하고 넘어가는 것으로 수정
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
    display: flex;
    flex-flow: wrap;
}

.answer {
    display: inline-block;
    padding-right: 10px;
}

.inputtext {
    border: solid 1px black;
    border-radius: 6px;
    padding-left: 5px;
    margin-top: 3px;
}

.inputfile {
    width: 180px;
}

.mini {
    width: 80px;
}
</style>
