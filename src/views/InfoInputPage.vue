<template>
    <div id= "change-color">
        <div id="non-click"><mini-logo></mini-logo></div>
        <span class="title">info</span>
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
                            <p>Q4. 프로필 사진을 설정해주세요!(선택사항)</p>
                            <input @change="onInputImage" class="inputfile" ref="profileImage" accept="image/*" type="file"> 
                        </div>
                    </div>
                </div>
                <div v-else-if="number === 2">
                    <div><img class="paging" alt="Input Page 2" src="../assets/matching_page_num2.png"></div>
                    <p class="explain">이제, 매칭 정보를 수집할게요!</p>
                    <div class="main_content">
                        <div class="question">
                            <p>Q5. 당신의 MBTI를 선택해주세요!</p>
                            <select v-model="mainServer.mbti">
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
                                <input type="radio" id="smoker" value="1" v-model="mainServer.userSmoking">
                                <label for="smoker">흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="nonsmoker" value="0" v-model="mainServer.userSmoking">
                                <label for="nonsmoker">비흡연자</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q7. 메이트가 흡연을 해도 괜찮나요?</p>
                            <div class="answer">
                                <input type="radio" id="m_smoker" value="1" v-model="mainServer.mateSmoking">
                                <label for="m_smoker">흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="m_non" value="2" v-model="mainServer.mateSmoking">
                                <label for="m_non">비흡연자</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="nothing" value="3" v-model="mainServer.mateSmoking">
                                <label for="nothing">상관없다</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q8. 반려동물과 같이 살 예정이신가요?</p>
                            <div class="answer">
                                <input type="radio" id="p_yes" value="1" v-model="mainServer.userPet">
                                <label for="p_yes">네</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="p_no" value="0" v-model="mainServer.userPet">
                                <label for="p_no">아니요</label> 
                            </div>
                        </div>
                        <div class="question">
                            <div class="hide" v-if="show_userpet">
                                <p>Q8-1. 어떤 반려동물을 키울 것인지 모두 선택해주세요!</p>
                                <div class="answer">        
                                    <input type="checkbox" id="u_dog" true-value="1" false-value="0" v-model="mainServer.userPetDog">
                                    <label for="u_dog">강아지</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_cat" true-value="1" false-value="0" v-model="mainServer.userPetCat">
                                    <label for="u_cat">고양이</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_reptile" true-value="1" false-value="0" v-model="mainServer.userPetReptileFish">
                                    <label for="u_reptile">파충류, 어류</label>
                                </div>
                                <div class="answer">                                
                                    <input type="checkbox" id="u_rodent" true-value="1" false-value="0" v-model="mainServer.userPetRodent">
                                    <label for="u_rodent">설치류</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="u_bird" true-value="1" false-value="0" v-model="mainServer.userPetBird">
                                    <label for="u_bird">조류</label>
                                </div>
                                <div class="answer">
                                    <label for="u_etc">기타: </label>
                                    <input class="inputtext mini" type="text" id="u_etc" v-model="mainServer.userPetEtc"/>  
                                </div>
                            </div>
                        </div>
                        <div class="question">
                            <p >Q9. 메이트의 반려동물로 허용가능한 것은 무엇인가요?</p> 
                            <div class="answer">
                                <input type="radio" id="mate_yes" value="1" v-model="mainServer.matePet">
                                <label for="mate_yes">어떤 동물이든 모두 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mate_so" value="2" v-model="mainServer.matePet">
                                <label for="mate_so">특정 동물만 괜찮다</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="mate_no" value="3" v-model="mainServer.matePet">
                                <label for="mate_no">어떠한 동물도 안된다</label> 
                            </div>
                        </div>
                        <div class="question">
                            <div class="hide" v-if="show_matepet">
                                <p>Q9-1. 어떤 반려동물은 괜찮은 지 선택해주세요!</p>
                                <div class="answer">        
                                    <input type="checkbox" id="m_dog" true-value="1" false-value="0" v-model="mainServer.matePetDog">
                                    <label for="m_dog">강아지</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_cat" true-value="1" false-value="0" v-model="mainServer.matePetCat">
                                    <label for="m_cat">고양이</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_reptile" true-value="1" false-value="0" v-model="mainServer.matePetReptileFish">
                                    <label for="m_reptile">파충류, 어류</label>
                                </div>
                                <div class="answer">                                
                                    <input type="checkbox" id="m_rodent" true-value="1" false-value="0" v-model="mainServer.matePetRodent">
                                    <label for="m_rodent">설치류</label>
                                </div>
                                <div class="answer">
                                    <input type="checkbox" id="m_bird" true-value="1" false-value="0" v-model="mainServer.matePetBird">
                                    <label for="m_bird">조류</label>
                                </div>
                                <div class="answer">
                                    <label for="m_etc">기타: </label>
                                    <input class="inputtext mini" type="text" id="m_etc" v-model="mainServer.matePetEtc"/>  
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
                                <input type="radio" id="air_yes" value="1" v-model="mainServer.airLikeAirconditioner">
                                <label for="air_yes">항상 틀어놓는다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="air_so" value="2" v-model="mainServer.airLikeAirconditioner">
                                <label for="air_so">더울때만 가끔 틀고 끈다</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="air_no" value="3" v-model="mainServer.airLikeAirconditioner">
                                <label for="air_no">거의 안 튼다</label> 
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q11. 난방을 얼마나 자주 트나요?</p>
                            <div class="answer">
                                <input type="radio" id="heat_yes" value="1" v-model="mainServer.airLikeHeater">
                                <label for="heat_yes">항상 틀어놓는다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="heat_so" value="2" v-model="mainServer.airLikeHeater">
                                <label for="heat_so">추울때만 낮은 온도로 튼다.</label> 
                            </div>
                            <div class="answer">
                                <input type="radio" id="heat_no" value="3" v-model="mainServer.airLikeHeater">
                                <label for="heat_no">거의 안 튼다</label> 
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q12. 벌레를 잡을 수 있나요? (ex.바퀴벌레, 돈벌레, 지네)</p>
                            <div class="answer">
                                <input type="radio" id="ub_yes" value="1" v-model="mainServer.userBugKiller">
                                <label for="ub_yes">잡는데 거리낌이 없다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="ub_so" value="2" v-model="mainServer.userBugKiller">
                                <label for="ub_so">시키면 잡을 수 있다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="ub_no" value="3" v-model="mainServer.userBugKiller">
                                <label for="ub_no">절대 못잡는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q13. 메이트가 벌레를 잘 잡았으면 좋겠나요?</p> 
                            <div class="answer">
                                <input type="radio" id="mb_yes" value="1" v-model="mainServer.mateBugKiller">
                                <label for="mb_yes">벌레를 잡을 수 있어야만 한다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mb_no" value="0" v-model="mainServer.mateBugKiller">
                                <label for="mb_no">벌레를 못잡아도 상관없다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q14. 집에서 밥을 먹을 경우 무엇을 더 선호하나요?</p> 
                            <div class="answer">
                                <input type="radio" id="cook" value="0" v-model="mainServer.userCooking">
                                <label for="cook">직접 요리</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="pack" value="1" v-model="mainServer.userCooking">
                                <label for="pack">외부 음식(포장, 배달)</label> 
                            </div>
                        </div>
                        <div class="question">
                            <p>Q15. 메이트가 집에서 요리하는 게 불편한가요? (ex.냄새문제)</p>
                            <div class="answer">
                                <input type="radio" id="mc_yes" value="1" v-model="mainServer.mateCooking">
                                <label for="mc_yes">불편하다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="mc_no" value="0" v-model="mainServer.mateCooking">
                                <label for="mc_no">신경쓰지 않는다(불편하지 않다)</label>  
                            </div>
                        </div>
                        <div class="question">
                            <p>Q16. 선호하는 식사유형을 선택해주세요!</p>
                            <div class="answer">
                                <input type="radio" id="e_together" value="1" v-model="mainServer.eatTogether">
                                <label for="e_together">같이 먹는 걸 선호한다</label>
                            </div> 
                            <div class="answer">
                                <input type="radio" id="e_alone" value="0" v-model="mainServer.eatTogether">
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
                                <input type="radio" id="s_yes" value="1" v-model="mainServer.shareItem">
                                <label for="s_yes">말 안하고 사용해도 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="s_so" value="2" v-model="mainServer.shareItem">
                                <label for="s_so">사용하기 전 허락을 받으면 괜찮다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="s_no" value="3" v-model="mainServer.shareItem">
                                <label for="s_no">괜찮지 않다(안된다)</label>
                            </div>  
                        </div>
                        <div class="question">
                            <p>Q18. 메이트의 통화/게임 소음을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="talk_no" value="1" v-model="mainServer.noiseTalking">
                                <label for="talk_no">10분 이전의 소리도 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="talk_so" value="2" v-model="mainServer.noiseTalking">
                                <label for="talk_so">10분 이상의 소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="talk_yes" value="3" v-model="mainServer.noiseTalking">
                                <label for="talk_yes">별로 신경쓰이지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q19. 메이트의 동영상/음악 소음을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="music_no" value="1" v-model="mainServer.noiseMusic">
                                <label for="music_no">10분 이전의 소리도 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="music_so" value="2" v-model="mainServer.noiseMusic">
                                <label for="music_so">10분 이상의 소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="music_yes" value="3" v-model="mainServer.noiseMusic">
                                <label for="music_yes">별로 신경쓰이지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q20. 메이트의 알람소리를 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="alarm_no" value="1" v-model="mainServer.noiseAlarm">
                                <label for="alarm_no">지속적인 알람소리는 신경쓰인다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alarm_yes" value="0" v-model="mainServer.noiseAlarm">
                                <label for="alarm_yes">별로 신경쓰이지 않는다</label>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q21. 메이트의 음주를 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="alcohol_1" value="1" v-model="mainServer.mateAlcohol">
                                <label for="alcohol_1">메이트가 술 냄새를 풍기는 것도 싫다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_2" value="2" v-model="mainServer.mateAlcohol">
                                <label for="alcohol_2">메이트가 술을 많이 마신 것 같은 모습을 보이면 싫다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_3" value="3" v-model="mainServer.mateAlcohol">
                                <label for="alcohol_3">메이트가 술 주정만 하지 않으면 된다</label>
                            </div>
                            <div class="answer">
                                <input type="radio" id="alcohol_4" value="4" v-model="mainServer.mateAlcohol">
                                <label for="alcohol_4">메이트가 술 문제는 신경쓰지 않는다</label>
                            </div> 
                        </div>
                        <div class="question">
                            <p>Q22. 집의 정리정돈을 어느정도 신경쓰시나요?</p>
                            <div class="answer">
                                <input type="radio" id="c_no" value="1" v-model="mainServer.mateClean">
                                <label for="c_no">메이트의 공간까지 신경쓰인다</label>
                            </div> 
                            <div class="answer">
                                <input type="radio" id="c_so" value="2" v-model="mainServer.mateClean">
                                <label for="c_so">공유하는 공간의 경우 신경쓰인다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="c_yes" value="3" v-model="mainServer.mateClean">
                                <label for="c_yes">내 공간만 아니면 신경쓰이지 않는다</label><br>
                            </div>
                        </div>
                        <div class="question">
                            <p>Q23. 지인출입 문제에 대해 어떻게 생각하시나요?</p>
                            <div class="answer">
                                <input type="radio" id="en_no" value="1" v-model="mainServer.permissionToEnter">
                                <label for="en_no">누구든 데려오면 안된다</label>
                            </div>  
                            <div class="answer">
                                <input type="radio" id="en_so" value="2" v-model="mainServer.permissionToEnter">
                                <label for="en_so">미리 말만 하면 지인이 출입해도 상관없다</label><br>
                            </div>
                            <div class="answer">
                                <input type="radio" id="en_yes" value="3" v-model="mainServer.permissionToEnter">
                                <label for="en_yes">본인이 없을 때 말없이 지인이 잠깐 출입해도 상관없다</label><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Checkmodal v-show="show_modal" @modal-res="getresponse">정말 제출하시겠어요??</Checkmodal>
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
import Checkmodal from '../components/common/check-modal.vue'
import axios from 'axios'

export default {
  name: 'InfoInputPage',
  components: {
    MiniLogo, GreenButton, Checkmodal,
  },
  props: {
  },
  data() {
      return {
        //   mainserve: "http://ec2-15-164-40-127.ap-northeast-2.compute.amazonaws.com",
        //   matchingserve: "http://ec2-13-209-88-70.ap-northeast-2.compute.amazonaws.com",
        mainserve: "http://localhost:5000",
        matchingserve: "http://localhost:5555",
          number: 1,
          modal_response:'',
          show_userpet: false,
          show_matepet: false,
          show_modal: false,
          profile:{
              name: '',
              sex: '',
              age:'',
              image: '',
          },
          mainServer:{
              mbti:'',
              userSmoking:'',
              mateSmoking:'',
              userPet:'',
              userPetDog:'0',
              userPetCat:'0',
              userPetReptileFish:'0',
              userPetRodent:'0',
              userPetBird:'0',
              userPetEtc:'',
              matePet:'',
              matePetDog:'0',
              matePetCat:'0',
              matePetReptileFish:'0',
              matePetRodent:'0',
              matePetBird:'0',
              matePetEtc:'',
              airLikeAirconditioner:'',
              airLikeHeater:'',
              noiseTalking:'',
              noiseMusic:'',
              noiseAlarm:'',
              userBugKiller:'',
              mateBugKiller:'',
              userCooking:'',
              mateCooking:'',
              eatTogether:'',
              shareItem:'',
              mateAlcohol:'',
              mateClean:'',
              permissionToEnter:'',
          },
          matching_server:{
              uid:'',
              sex: '',
              age:'',
              mbti:'',
              user_smoking:'',
              mate_smoking:'',
              user_pet:'',
              user_pet_dog:'',
              user_pet_cat:'',
              user_pet_reptile_fish:'',
              user_pet_rodent:'',
              user_pet_bird:'',
              mate_pet:'',
              mate_pet_dog:'',
              mate_pet_cat:'',
              mate_pet_reptile_fish:'',
              mate_pet_rodent:'',
              mate_pet_bird:'',
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
          main_response: {
              response:'',
              message:'',
              data:'',
          },
          post: {
              response:'',
              message:'',
              data:'',
          },
          count: 0,
      }
  },
  watch: {
    mainServer: {
        deep: true,
        handler(){
            if(this.mainServer.userPet == '1'){
                this.show_userpet = true;
            }
            else{ this.show_userpet = false;}

            if(this.mainServer.matePet == '2'){
                this.show_matepet = true;
            }else{ this.show_matepet = false;}
        },
    }, 
  },
  methods: {
    getresponse(modal_res) {
        this.modal_response = modal_res
        if(this.modal_response == 'yes') {
            this.show_modal = false;
            
            //정보들 서버랑 매칭서버에 보내기, 모두 성공했으면 인증된 메인 페이지로 넘어가기
            console.log(this.mainServer, this.profile, this.matching_server);

            axios.post(this.mainserve+ '/user/matchinginfo', //메인서버에 매칭정보 전송
                this.mainServer, 
                { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}}
            )
            .then((res) => {
                console.log(`status code: ${res.status}`);
                console.log(`response: ${res.data.response}`);
                console.log(`message: ${res.data.message}`);
                console.log(`data: ${res.data.data}`);
                this.main_response.response = res.data.response;
                this.main_response.message = res.data.message;
                this.main_response.data = res.data.data;
                
            })
            .then(()=> {    //메인서버에 profile 전송    
                axios.post(this.mainserve + '/user/profile',
                    this.profile,
                    { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token')}
                })
                .then((res2) => {
                    console.log(`status code: ${res2.status}`);
                    console.log(`response: ${res2.data.response}`);
                    console.log(`message: ${res2.data.message}`);
                    console.log(`data: ${res2.data.data}`)
                    this.post.response = res2.data.response;
                    this.post.message = res2.data.message;
                    this.post.data = res2.data.data;
                });
            })
            .then(() => {   //matching server에 정보 전송
                console.log('serverURL:', this.matchingserve);
                axios.post(this.matchingserve + '/infos',
                    this.matching_server
                )
                .then((res) => {
                console.log(`matching status code: ${res.status}`);
                console.log(`matching data: ${res.data}`);
                })
            })
            .then(() => {
                this.$router.push({ path: '/matching/waiting'})
            })
        }
        else {
            this.show_modal = false;
        }
    },
    PrevB() {
        this.number--;
    },
    NextB() {
        this.number++;
    },
    SubB() {    //대답하지 않은 문항 있는 지 확인 & matching_server에도 값 넣어주기 그후 모달 창 띄우기
        
        if(this.mainServer.mbti != '') {this.count++; this.matching_server.mbti = this.mainServer.mbti;}
        if(this.mainServer.userSmoking != '') {this.count++; this.matching_server.user_smoking = this.mainServer.userSmoking; }
        if(this.mainServer.mateSmoking != '') {this.count++;  this.matching_server.mate_smoking = this.mainServer.mateSmoking; }
        if(this.mainServer.userPet != '') { this.count++; 
            this.matching_server.user_pet = this.mainServer.userPet;
            this.matching_server.user_pet_dog = this.mainServer.userPetDog;
            this.matching_server.user_pet_cat = this.mainServer.userPetCat;
            this.matching_server.user_pet_reptile_fish = this.mainServer.userPetReptileFish;
            this.matching_server.user_pet_rodent = this.mainServer.userPetRodent;
            this.matching_server.user_pet_bird = this.mainServer.userPetBird;
        }
        if(this.mainServer.matePet != '') { this.count++;
            this.matching_server.mate_pet = this.mainServer.matePet;
            this.matching_server.mate_pet_dog = this.mainServer.matePetDog;
            this.matching_server.mate_pet_cat = this.mainServer.matePetCat;
            this.matching_server.mate_pet_reptile_fish = this.mainServer.matePetReptileFish;
            this.matching_server.mate_pet_rodent = this.mainServer.matePetRodent;
            this.matching_server.mate_pet_bird = this.mainServer.matePetBird;
        }
        if(this.mainServer.airLikeAirconditioner != '') {this.count++; this.matching_server.air_like_airconditioner = this.mainServer.airLikeAirconditioner; }
        if(this.mainServer.airLikeHeater != '') {this.count++; this.matching_server.air_like_heater = this.mainServer.airLikeHeater; }
        if(this.mainServer.noiseTalking != '') {this.count++; this.matching_server.noise_talking = this.mainServer.noiseTalking; } 
        if(this.mainServer.noiseMusic != '') {this.count++; this.matching_server.noise_music = this.mainServer.noiseMusic; } 
        if(this.mainServer.noiseAlarm != '') {this.count++; this.matching_server.noise_alarm = this.mainServer.noiseAlarm; } 
        if(this.mainServer.userBugKiller != '') {this.count++; this.matching_server.user_bug_killer = this.mainServer.userBugKiller; } 
        if(this.mainServer.mateBugKiller != '') {this.count++; this.matching_server.mate_bug_killer = this.mainServer.mateBugKiller; }
        if(this.mainServer.userCooking != '') {this.count++; this.matching_server.user_cooking = this.mainServer.userCooking; }
        if(this.mainServer.mateCooking != '') {this.count++; this.matching_server.mate_cooking = this.mainServer.mateCooking; }
        if(this.mainServer.eatTogether != '') {this.count++; this.matching_server.eat_together = this.mainServer.eatTogether; }
        if(this.mainServer.shareItem != '') {this.count++; this.matching_server.share_item = this.mainServer.shareItem; }
        if(this.mainServer.mateAlcohol != '') {this.count++; this.matching_server.mate_alcohol = this.mainServer.mateAlcohol; }
        if(this.mainServer.mateClean != '') {this.count++; this.matching_server.mate_clean = this.mainServer.mateClean; }
        if(this.mainServer.permissionToEnter != '') {this.count++; this.matching_server.permission_to_enter = this.mainServer.permissionToEnter; }
        
        if(this.profile.name != '') { this.count++;}
        if(this.profile.sex != '') { this.count++; this.matching_server.sex = this.profile.sex;}
        if(this.profile.age != '') { this.count++; this.matching_server.age = this.profile.age;}

        if(this.count != 22) {  //대답을 다 안했으면
            console.log(this.count);
            this.count = 0;
            alert("답을 안한 질문이 있습니다!"); return;
        }
        else {  //대답을 다 했으면
            this.matching_server.uid = localStorage.getItem('uid');
            this.show_modal = true;
        }
    },
    onInputImage() {    //이미지 넣기
        console.log(this.$refs.profileImage.files);
        this.profile.image = this.$refs.profileImage.files[0];
        console.log(this.profile.image);
    },
  }
}
</script>

<style scoped>
#change-color {
  background-color: #CE9E92;
}

.upper_text {
    width: 100vw;
    max-width: 220px;
    object-fit: cover;
    padding: 20px;
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

.question {
    padding-bottom: 10px;
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

.title {
  background-color: #5C7D36;
  font-family: 'Righteous-Regular';
  font-size: 40px;
  color: black;
  border: solid 2px black;
  border-radius: 50px;
  width: 180px;
  height: 90px;
  padding: 8px 30px 8px;
  margin: 0px 5px 15px;
}

.paging {
    width: 100%;
    max-width: 388px;
    object-fit: cover;
    margin-top: 10px;
    margin-bottom: 10px;
}

.main_content {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 30px;
}
</style>
