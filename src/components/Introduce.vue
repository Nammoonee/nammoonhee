<template>
  <v-container>
    
    <section id="section_intro">
      <h2>자기소개</h2>
      <v-card>
        <v-tabs color="white" v-model="tab">
          <div class="tab_wrap">
            <v-tab class="tab" value="profile">프로필</v-tab>
            <v-tab class="tab"  value="skill" @click="SkillGage">스킬</v-tab>
            <v-tab class="tab"  value="edu">학력/교육</v-tab>
          </div>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="profile">
              <div class="profile_photo_wrap">
                <div class="profile">
                  <img src="./images/me.jpg" alt="">
                </div>
              </div>

              <div class="icon_text_con_wrap">
                <div class="icon_text_con1">
                  <div class="icon_text_con_box">
                    <div class="icon_text_wrap">
                      <div class="icon_box">
                        <svg
                         
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.4 6C6.21838 6 7.00325 5.68393 7.58193 5.12132C8.16061 4.55871 8.48571 3.79565 8.48571 3C8.48571 2.20435 8.16061 1.44129 7.58193 0.87868C7.00325 0.316071 6.21838 0 5.4 0C4.58162 0 3.79675 0.316071 3.21807 0.87868C2.63939 1.44129 2.31429 2.20435 2.31429 3C2.31429 3.79565 2.63939 4.55871 3.21807 5.12132C3.79675 5.68393 4.58162 6 5.4 6ZM4.2983 7.125C1.92375 7.125 0 8.99531 0 11.3039C0 11.6883 0.320625 12 0.715982 12H10.084C10.4794 12 10.8 11.6883 10.8 11.3039C10.8 8.99531 8.87625 7.125 6.5017 7.125H4.2983Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      남문희
                    </div>
                    <div class="icon_text_wrap">
                      <div class="icon_box">
                        <svg
                          
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.08193 0.128906L1.48916 1.11562C1.39759 1.26797 1.3494 1.44375 1.3494 1.62187V1.6875C1.3494 2.20547 1.78072 2.625 2.31325 2.625C2.84578 2.625 3.27711 2.20547 3.27711 1.6875V1.62187C3.27711 1.44375 3.22892 1.27031 3.13735 1.11562L2.54458 0.128906C2.49639 0.0492187 2.40964 0 2.31325 0C2.21687 0 2.13012 0.0492187 2.08193 0.128906ZM5.16626 0.128906L4.57349 1.11562C4.48193 1.26797 4.43373 1.44375 4.43373 1.62187V1.6875C4.43373 2.20547 4.86506 2.625 5.39759 2.625C5.93012 2.625 6.36145 2.20547 6.36145 1.6875V1.62187C6.36145 1.44375 6.31325 1.27031 6.22169 1.11562L5.62892 0.128906C5.58072 0.0492187 5.49398 0 5.39759 0C5.3012 0 5.21446 0.0492187 5.16626 0.128906ZM7.65783 1.11562C7.56626 1.26797 7.51807 1.44375 7.51807 1.62187V1.6875C7.51807 2.20547 7.9494 2.625 8.48193 2.625C9.01446 2.625 9.44578 2.20547 9.44578 1.6875V1.62187C9.44578 1.44375 9.39759 1.27031 9.30602 1.11562L8.71325 0.128906C8.66506 0.0492187 8.57831 0 8.48193 0C8.38554 0 8.29879 0.0492187 8.2506 0.128906L7.65783 1.11562ZM3.08434 4.125C3.08434 3.71016 2.73976 3.375 2.31325 3.375C1.88675 3.375 1.54217 3.71016 1.54217 4.125V5.25C0.691566 5.25 0 5.92266 0 6.75V8.41406C0.2 8.53594 0.436145 8.625 0.693976 8.625C1.01928 8.625 1.3494 8.48203 1.61928 8.31094C1.7494 8.22891 1.85783 8.14453 1.93253 8.08359C1.96867 8.05312 1.99759 8.02734 2.01687 8.01094C2.02651 8.00156 2.03373 7.99688 2.03614 7.99219L2.03855 7.98984C2.11325 7.91484 2.21687 7.875 2.3253 7.87734C2.43373 7.87969 2.53253 7.92656 2.60482 8.00391L2.60723 8.00625C2.60964 8.00859 2.61687 8.01562 2.6241 8.02266C2.64096 8.03906 2.66506 8.0625 2.6988 8.09297C2.76626 8.15391 2.86265 8.23594 2.98313 8.31562C3.22892 8.48203 3.53735 8.62266 3.85783 8.62266C4.17831 8.62266 4.48675 8.48203 4.73253 8.31562C4.85301 8.23359 4.9494 8.15391 5.01687 8.09297C5.0506 8.0625 5.0747 8.03906 5.09157 8.02266C5.0988 8.01562 5.10602 8.00859 5.10843 8.00625L5.11084 8.00391C5.18313 7.92188 5.28916 7.87734 5.4 7.87734C5.51084 7.87734 5.61687 7.92422 5.68916 8.00391L5.69157 8.00625C5.69398 8.00859 5.7012 8.01562 5.70843 8.02266C5.7253 8.03906 5.7494 8.0625 5.78313 8.09297C5.8506 8.15391 5.94699 8.23594 6.06747 8.31562C6.31325 8.48203 6.62169 8.62266 6.94217 8.62266C7.26265 8.62266 7.57108 8.48203 7.81687 8.31562C7.93735 8.23359 8.03373 8.15391 8.1012 8.09297C8.13494 8.0625 8.15904 8.03906 8.1759 8.02266C8.18313 8.01562 8.19036 8.00859 8.19277 8.00625L8.19518 8.00391C8.26506 7.92422 8.36627 7.87969 8.4747 7.87734C8.58313 7.875 8.68434 7.91484 8.76145 7.98984L8.76386 7.99219C8.76867 7.99688 8.77349 8.00156 8.78313 8.01094C8.80241 8.02734 8.82892 8.05312 8.86747 8.08359C8.94217 8.14453 9.04819 8.22891 9.18072 8.31094C9.4506 8.48203 9.78072 8.625 10.106 8.625C10.3639 8.625 10.6 8.53359 10.8 8.41406V6.75C10.8 5.92266 10.1084 5.25 9.25783 5.25V4.125C9.25783 3.71016 8.91325 3.375 8.48675 3.375C8.06024 3.375 7.71566 3.71016 7.71566 4.125V5.25H6.16867V4.125C6.16867 3.71016 5.8241 3.375 5.39759 3.375C4.97108 3.375 4.62651 3.71016 4.62651 4.125V5.25H3.08434V4.125ZM10.7952 9.24844C10.5904 9.32578 10.3566 9.375 10.1012 9.375C9.55904 9.375 9.07952 9.14297 8.75663 8.93906C8.65783 8.87578 8.56867 8.8125 8.49398 8.75625C8.42651 8.8125 8.34699 8.87344 8.25783 8.93203C7.94699 9.14063 7.48434 9.375 6.93976 9.375C6.39518 9.375 5.93253 9.14063 5.6241 8.93203C5.53976 8.87578 5.46265 8.81719 5.39759 8.76328C5.33253 8.81719 5.25542 8.87344 5.17108 8.93203C4.86265 9.14063 4.4 9.375 3.85542 9.375C3.31084 9.375 2.84819 9.14063 2.53976 8.93203C2.4506 8.87109 2.37108 8.81016 2.30361 8.75625C2.22892 8.8125 2.13976 8.87578 2.04096 8.93906C1.71566 9.14297 1.23614 9.375 0.693976 9.375C0.438554 9.375 0.204819 9.32344 0 9.24844V11.25C0 11.6648 0.344578 12 0.771084 12H10.0241C10.4506 12 10.7952 11.6648 10.7952 11.25V9.24844Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      1992.11.10 <span class="small_text ml-1">(만 31세)</span>
                    </div>
                  </div>
                </div>
                

                <div class="icon_text_con2">
                  <div class="icon_text_con_box">
                    <div class="icon_text_wrap">
                      <div class="icon_box">
                        <svg
                          
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.35714 0C1.0558 0 0 1.00781 0 2.25V8.25C0 9.375 0.864286 10.3055 1.99129 10.4742L0.86183 11.5523C0.689955 11.7164 0.812723 12 1.0558 12H2.03058C2.23929 12 2.43817 11.9203 2.58549 11.7797L3.92857 10.5H7.07143L8.41205 11.7797C8.55937 11.9203 8.75826 12 8.96696 12H9.9442C10.1897 12 10.3125 11.7164 10.1382 11.5523L9.00871 10.4742C10.1382 10.3078 11 9.375 11 8.25V2.25C11 1.00781 9.9442 0 8.64286 0H2.35714ZM1.57143 3C1.57143 2.58516 1.92254 2.25 2.35714 2.25H4.32143C4.75603 2.25 5.10714 2.58516 5.10714 3V5.25C5.10714 5.66484 4.75603 6 4.32143 6H2.35714C1.92254 6 1.57143 5.66484 1.57143 5.25V3ZM6.67857 2.25H8.64286C9.07746 2.25 9.42857 2.58516 9.42857 3V5.25C9.42857 5.66484 9.07746 6 8.64286 6H6.67857C6.24397 6 5.89286 5.66484 5.89286 5.25V3C5.89286 2.58516 6.24397 2.25 6.67857 2.25ZM1.57143 8.25C1.57143 8.05109 1.65421 7.86032 1.80156 7.71967C1.94891 7.57902 2.14876 7.5 2.35714 7.5C2.56553 7.5 2.76538 7.57902 2.91273 7.71967C3.06008 7.86032 3.14286 8.05109 3.14286 8.25C3.14286 8.44891 3.06008 8.63968 2.91273 8.78033C2.76538 8.92098 2.56553 9 2.35714 9C2.14876 9 1.94891 8.92098 1.80156 8.78033C1.65421 8.63968 1.57143 8.44891 1.57143 8.25ZM8.64286 7.5C8.85124 7.5 9.05109 7.57902 9.19844 7.71967C9.34579 7.86032 9.42857 8.05109 9.42857 8.25C9.42857 8.44891 9.34579 8.63968 9.19844 8.78033C9.05109 8.92098 8.85124 9 8.64286 9C8.43447 9 8.23462 8.92098 8.08727 8.78033C7.93992 8.63968 7.85714 8.44891 7.85714 8.25C7.85714 8.05109 7.93992 7.86032 8.08727 7.71967C8.23462 7.57902 8.43447 7.5 8.64286 7.5Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      사당역
                    </div>

                    <div class="icon_text_wrap">
                      <div class="icon_box">
                        <svg
                         
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.54262 0.528977C3.3772 0.129385 2.94108 -0.083301 2.5243 0.0305612L0.633761 0.546164C0.25995 0.649284 0 0.988722 0 1.37542C0 6.69042 4.30958 11 9.62458 11C10.0113 11 10.3507 10.7401 10.4538 10.3662L10.9694 8.4757C11.0833 8.05892 10.8706 7.62281 10.471 7.45738L8.40861 6.59805C8.05843 6.45196 7.6524 6.55293 7.41393 6.84725L6.546 7.90639C5.03357 7.19099 3.80901 5.96643 3.09361 4.454L4.15275 3.58822C4.44707 3.3476 4.54804 2.94371 4.40195 2.59353L3.54262 0.531125V0.528977Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      010-4342-4356
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile_text">
                
              
                  <span class="strong_font">6년의 웹디자이너 경력</span>을
                  토대로<br>
               
             
                웹디자인, SNS 콘텐츠, SVG 아이콘 제작에 대한 실무 지식을 보유하고 있습니다.<br>
                2024년 봄, 직업능력개발 과정을 통해
                   <span class="strong_font not_enter">퍼블리싱</span>
                 
                
                  능력을 강화하여 코딩까지가능합니다.
              
              </div>
            </v-window-item>

            <v-window-item value="skill">
              <div class="skill_gages">
                <div class="skill_gage_wrap">
                  <div class="gage_box">
                    <div class="skill_icon_wrap">
                      <div class="skill_icon">
                        <v-badge color="info" content="+">
                          <svg
                            class="mb-3"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M48.8638 1.13647H1.13647V48.8638H48.8638V1.13647Z"
                              fill="url(#paint0_radial_51_80)"
                            />
                            <path
                              d="M50 50H0V0H50V50ZM2.27273 47.7273H47.7273V2.27273H2.27273V47.7273Z"
                              fill="#00B5EF"
                            />
                            <path
                              d="M15.909 38.6363H11.3635V11.3635L17.7766 11.3635C22.5218 11.3635 26.7674 14.8234 27.2282 19.5461C27.7569 24.9649 23.494 29.5453 18.1817 29.5453H15.909V38.6363ZM15.909 24.9999H18.1817C20.6886 24.9999 22.7272 22.9613 22.7272 20.4544C22.7272 17.9476 20.6886 15.909 18.1817 15.909H15.909V24.9999Z"
                              fill="#00B5EF"
                            />
                            <path
                              d="M32.3571 38.5846C29.6431 38.349 27.6389 37.3834 27.3926 37.2602L29.4257 33.1942C29.4323 33.1981 31.2904 34.0909 33.5372 34.0909C34.4694 34.0909 35.2274 33.3329 35.2274 32.4007C35.2274 31.6728 34.7635 31.028 34.0721 30.7983L32.9758 30.4332C30.6568 29.6608 28.802 27.7163 28.4696 25.2948C27.9443 21.4685 30.9184 18.1818 34.6448 18.1818C37.942 18.1818 40.5078 19.4171 40.7893 19.5578L38.7663 23.6283C38.7492 23.6198 36.8913 22.7272 34.6448 22.7272C33.7126 22.7272 32.9546 23.4852 32.9546 24.4173C32.9546 25.1453 33.4185 25.7901 34.1099 26.0198L35.5092 26.4859C38.2578 27.4021 40.0344 30.0921 39.7412 33.0332C39.3864 36.5935 35.9216 38.894 32.3571 38.5846Z"
                              fill="#00B5EF"
                            />
                            <path
                              d="M50 50H0V0H50V50Z"
                              fill="url(#paint1_linear_51_80)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_51_80"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17.8031 11.7425) scale(39.9733)"
                              >
                                <stop
                                  stop-color="#193458"
                                  stop-opacity="0.98"
                                />
                                <stop offset="0.933387" stop-color="#210021" />
                              </radialGradient>
                              <linearGradient
                                id="paint1_linear_51_80"
                                x1="-5.1104"
                                y1="10.9593"
                                x2="55.1104"
                                y2="39.0407"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="white" stop-opacity="0.2" />
                                <stop
                                  offset="1"
                                  stop-color="white"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </v-badge>
                      </div>

                      <v-progress-linear
                        class="mb-3"
                        color="grey-lighten-1"
                        rounded
                        v-model="value1"
                        :buffer-value="bufferValue"
                      ></v-progress-linear>

                      <div>포토샵</div>
                    </div>
                  </div>

                  <div class="gage_box">
                    <div class="skill_icon_wrap">
                       <div class="skill_icon">
                        <v-badge color="info" content="+">
                         <svg class="mb-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8636 1.13635H1.13635V48.8636H48.8636V1.13635Z" fill="url(#paint0_radial_51_86)"/>
<path d="M50 50H0V0H50V50ZM2.27273 47.7273H47.7273V2.27273H2.27273V47.7273Z" fill="#F47521"/>
<path d="M26.1364 27.2727H17.0455V31.8182H26.1364V27.2727Z" fill="#F47521"/>
<path d="M39.7727 21.5909H35.2273V38.6364H39.7727V21.5909Z" fill="#F47521"/>
<path d="M37.5 20.4545C38.7552 20.4545 39.7727 19.437 39.7727 18.1818C39.7727 16.9266 38.7552 15.9091 37.5 15.9091C36.2448 15.9091 35.2273 16.9266 35.2273 18.1818C35.2273 19.437 36.2448 20.4545 37.5 20.4545Z" fill="#F47521"/>
<path d="M19.2044 11.3636L10.477 38.6364H15.2503L21.5909 18.821L27.9315 38.6364H32.7049L23.9774 11.3636H19.2044Z" fill="#F47521"/>
<path d="M50 50H0V0H50V50Z" fill="url(#paint1_linear_51_86)"/>
<defs>
<radialGradient id="paint0_radial_51_86" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.803 11.7424) scale(39.9733)">
<stop stop-color="#3C1605" stop-opacity="0.98"/>
<stop offset="1" stop-color="#1A1107"/>
</radialGradient>
<linearGradient id="paint1_linear_51_86" x1="-5.1104" y1="10.9593" x2="55.1104" y2="39.0407" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

                        </v-badge>
                      </div>
                    <v-progress-linear  class="mb-3"
                      rounded
                      v-model="value2"
                      :buffer-value="bufferValue"
                      color="grey-lighten-1"
                    ></v-progress-linear>
                        <div>일러스트</div>
                    </div>
                  </div>

                  <div class="gage_box">
                     <div class="skill_icon_wrap">
                       <div class="skill_icon">
                        <v-badge color="info" content="+">
                          <svg class="mb-3" width="34" height="50" viewBox="0 0 34 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 49.9999C12.9333 49.9999 16.6667 46.2666 16.6667 41.6666V33.3333H8.33333C3.73333 33.3333 0 37.0666 0 41.6666C0 46.2666 3.73333 49.9999 8.33333 49.9999Z" fill="#0ACF83"/>
<path d="M0 25C0 20.4 3.73333 16.6666 8.33333 16.6666H16.6667V33.3333H8.33333C3.73333 33.3333 0 29.6 0 25Z" fill="#A259FF"/>
<path d="M0 8.33333C0 3.73333 3.73333 0 8.33333 0H16.6667V16.6667H8.33333C3.73333 16.6667 0 12.9333 0 8.33333Z" fill="#F24E1E"/>
<path d="M16.6666 0H25C29.6 0 33.3333 3.73333 33.3333 8.33333C33.3333 12.9333 29.6 16.6667 25 16.6667H16.6666V0Z" fill="#FF7262"/>
<path d="M33.3333 25C33.3333 29.6 29.6 33.3333 25 33.3333C20.4 33.3333 16.6666 29.6 16.6666 25C16.6666 20.4 20.4 16.6666 25 16.6666C29.6 16.6666 33.3333 20.4 33.3333 25Z" fill="#1ABCFE"/>
</svg>

                        </v-badge>
                      </div>
                    <v-progress-linear class="mb-3"
                      rounded
                      v-model="value3"
                      :buffer-value="bufferValue"
                      color="grey-lighten-1"
                    ></v-progress-linear>
                     <div>피그마</div>
                  </div>
                  </div>
                </div>

                <div class="skill_gage_wrap">
                  <div class="gage_box">
                    <div class="skill_icon_wrap">
                       <div class="skill_icon">
                        <v-badge color="info" content="+">
                        <svg class="mb-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7766 45.1391L25.0016 50L7.22656 45.1391L3.125 0H46.8781L42.7766 45.1391Z" fill="#E44D26"/>
<path d="M25 3.125V46.4844L39.425 42.2L43.2625 3.125H25Z" fill="#FF6C39"/>
<path d="M38.0672 9.375H11.8859L12.5 15.625L13.4672 26.5625H30.4734L29.9187 32.7875L25 34.3594L20.0891 32.7875L19.7625 29.6875H13.7547L14.4719 37.4797L25 40.6094L35.5125 37.4781L37.0594 20.3125H19.1437L18.7531 15.625H37.5L38.0672 9.375Z" fill="white"/>
</svg>

                        </v-badge>
                      </div>
                    <v-progress-linear class="mb-3"
                      rounded
                      v-model="value2"
                      :buffer-value="bufferValue"
                      color="grey-lighten-1"
                    ></v-progress-linear>
                         <div>HTML5</div>
                  </div>
                  </div>

                  <div class="gage_box">
                          <div class="skill_icon_wrap">
                       <div class="skill_icon">
                        <v-badge color="info" content="+">
                        <svg class="mb-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7766 45.1391L25.0016 50L7.22656 45.1391L3.125 0H46.8781L42.7766 45.1391Z" fill="#1F62AE"/>
<path d="M25 3.125V46.4844L39.425 42.2L43.2625 3.125H25Z" fill="#347DC6"/>
<path d="M38.0672 9.375H11.8859L12.5 15.625H25L12.8906 20.2969L13.4672 26.5625H30.4719L29.9344 32.8125L25 34.3594L20.0953 32.7875L19.5828 29.6875H13.7547L14.4719 37.4797L25 40.6094L35.5125 37.4781L37.0609 20.2969H25.0406L37.5 15.625L38.0672 9.375Z" fill="white"/>
</svg>

                        </v-badge>
                      </div>
                    <v-progress-linear class="mb-3"
                      rounded
                      v-model="value4"
                      :buffer-value="bufferValue"
                      color="grey-lighten-1"
                    ></v-progress-linear>
                          <div>CSS3</div>
                  </div>
                  
                  </div>

                  <div class="gage_box">
                      <div class="skill_icon_wrap">
                       <div class="skill_icon">
                        <v-badge color="info" content="+">
                       <svg class="mb-3" width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.2345 13.7409L21.5051 0H10.4409L29.2345 33.4109L48.0281 0H36.964L29.2345 13.7409Z" fill="black"/>
<path d="M47.2967 0L28.8663 31.9216L10.4359 0H0L28.8663 50L57.7326 0H47.2967Z" fill="#49BD85"/>
</svg>


                        </v-badge>
                      </div>
                    <v-progress-linear class="mb-3"
                      rounded
                      v-model="value3"
                      :buffer-value="bufferValue"
                      color="grey-lighten-1"
                    ></v-progress-linear>
                      <div>VUE</div>
                  </div>
                  
                  
                  </div>
                </div>
              </div>
            </v-window-item>

            <v-window-item value="edu">
         

           
  <v-timeline side="end" truncate-line="start"  :direction="timelineDirection">
    <v-timeline-item
      dot-color="#dbd5ad"
      size="x-small"
    >
      <div class="d-flex">
       <dl>
                 <dt class="strong_font">프론트앤드개발자양성과정 수료</dt>
                 <dd>그린컴퓨터아카데미 강남</dd>
                 <dd class="small_text">2023.09 ~ 2024.03</dd>
               </dl>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#8d8cce96"
      size="x-small"
    >
      <div class="d-flex">
         <dl>
                 <dt class="strong_font">커뮤니케이션디자인과 졸업</dt>
                 <dd>명지전문대학교</dd>
                 <dd class="small_text">2018.03 ~ 2020.03</dd>
               </dl>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="#8d8cce96"
      size="x-small"
    >
      <div class="d-flex">
         <dl>
                 <dt class="strong_font">관광경영과 졸업</dt>
                 <dd>일산국제컨벤션고등학교</dd>
                 <dd class="small_text">2008.03 ~ 2010.03</dd>
               </dl>
      </div>
    </v-timeline-item>

 
  </v-timeline>

            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>

      <v-card>
        <v-tabs color="white" v-model="tab2">
          <div class="tab_wrap">
            <v-tab class="tab" value="i_am">자기소개서</v-tab>
            <v-tab class="tab" value="i_will">입사포부</v-tab>          
          </div>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab2">
            <v-window-item value="i_am">
              <div class="i_am_align">
                <p>
                  디자이너에게 있어서 중요한 역량은 시각적으로 직관적이면서
                  보기좋고 아름다운 콘텐츠를 만들어내는것이며 그것보다 더 중요한
                  것은 클라이언트나 팀원들과의 커뮤니케이션을 얼마나 잘 적용할
                  수 있는가에 달렸다고 생각합니다.
                </p>
                <p>
                  저는 6년간 웹디자이너로 재직하며 어도비 포토샵과 일러스트를
                  활용하여 디자인의 기초를 탄탄히 다지며 사용자들이 즐거움을
                  느끼고 편리한 경험을 제공할 수 있는 콘텐츠를 만들어왔습니다.
                  사이트의 메인 배너, 이벤트 배너, 팝업 배너 등을 디자인하고 SNS
                  이미지 콘텐츠 제작, 사이트 로고 제작, 인쇄물 스티커 제작 등의
                  경험을 쌓았습니다.
                </p>

                <p>
                  이와 같이 정적인 디자인 업무를 맡아오다가 코딩의 필요성을
                  느끼게된 경험이 있습니다. 앱 개발 프로젝트에서 디자이너로
                  참여하여 사이트 시안 및 아이콘 디자인을 담당하게 됐는데
                  웹접근성이나 개발에 대한 지식이 전혀 없었던 저는 개발팀과의
                  협업을 수월하게 진행할 수 없었습니다.
                </p>
                <p>
                  그 후 직업능력개발 프로젝트개발자 양성 6개월과정을 성실히
                  수료받아 단순히 디자인만 할줄 알던 우물 안 개구리였던 제가
                  협업에 있어서 가장 중요한 '웹표준'을 알게되었고 이제는 원하는
                  디자인에 숨을 불어넣을 수 있는 코딩이 가능한 디자이너가
                  되었습니다.
                </p>

                이 모든 경험과 역량을 바탕으로 사용자들에게 더욱 흥미로운 경험을
                제공하고 동시에 커뮤니케이션이 녹아있는 디자인을 제공할 것을
                약속드립니다.
              </div>
            </v-window-item>

            <v-window-item value="i_will">
              <div class="i_am_align">
                <p>
                  저는 성인이 되자마자 회사를 다니며 학원, 대학교 등의 학업을
                  병행했습니다. 시간이 걸리더라도 자기 발전을 게을리하지 않고,
                  스스로 일궈온 제 자신이 자랑스럽습니다.이와 같이 결심한 일은
                  끝까지 책임감 있게 완수하는 것이 제 성격입니다.
                </p>
                <p>
                  디자인은 경력직이지만 코딩은 신입인만큼 항상 초심을 잃지 않고
                  발전하는 모습을 보여드리고 싶습니다.
                </p>
                <p>
                  최신 트렌드를 놓치지 않고 세련된 디자인을 선보이기 위해
                  동료들과 소통하여 서로의 작업물을 피드백해주고 업계 동향을
                  주시하는것을 소홀히하지 않으며, 지속적인 자기계발을 통해
                  멈추지 않고 성장하는 디자이너의 모습을 보여드리겠습니다.
                </p>
                <p>
                  마지막으로, 모든 일에 대한 결과는 생각의 결과라고 생각합니다.
                </p>
                긍정적인 마음가짐으로 문제에 직면했을 때 감정에 휩싸이지 않고
                합리적인 사고로 해결책을 모색하는 것이 옳다고 믿습니다. 맡은
                직무에 대해 욕심을 가지고 열정적으로 임하며, 강인한 책임감을
                보여드리겠습니다.
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    
    </section>
    
  
  </v-container>
</template>

<script>
export default {
  data: () => ({
    timelineDirection: "vertical",
    tab: null,
    tab2: null,
    value1: 10,
    value2: 10,
    value3: 10,
    value4: 10,
    bufferValue: 0,

    interval: null,
    maxValue1: 95, // 최대 값 설정
    maxValue2: 85,
    maxValue3: 50,
    maxValue4: 70,
  }),
 

  mounted() {
    this.startBuffer();
     this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
   destroyed() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
     checkScreenSize() {
      if (window.innerWidth >= 820) {
        this.timelineDirection = "horizontal";
      } else {
        this.timelineDirection = "vertical";
      }
    },
    SkillGage() {
      // SkillGage 메소드의 내용을 여기에 추가
      clearInterval(this.interval);
      this.value1 = 10;
      this.value2 = 10;
      this.value3 = 10;
      this.value4 = 10;
      this.bufferValue1 = 0;
      this.bufferValue2 = 0;
      this.bufferValue3 = 0;
      this.bufferValue4 = 0;
      this.bufferValue5 = 0;
      this.bufferValue6 = 0;
      this.startBuffer();
    },
    startBuffer() {
      this.interval = setInterval(() => {
        this.value1 = Math.min(
          this.value1 + Math.random() * 40,
          this.maxValue1
        );
        this.value2 = Math.min(
          this.value2 + Math.random() * 40,
          this.maxValue2
        );
        this.value3 = Math.min(
          this.value3 + Math.random() * 40,
          this.maxValue3
        );
        this.value4 = Math.min(
          this.value4 + Math.random() * 40,
          this.maxValue4
        );
        this.bufferValue = Math.min(
          this.bufferValue + Math.random() * 1,
          this.maxValue1
        );
        this.bufferValue = Math.min(
          this.bufferValue + Math.random() * 1,
          this.maxValue2
        );
        this.bufferValue = Math.min(
          this.bufferValue + Math.random() * 1,
          this.maxValue3
        );
        this.bufferValue = Math.min(
          this.bufferValue + Math.random() * 1,
          this.maxValue4
        );
      }, 100);
    },
  },
};
</script>

<style scoped>



@media (max-width: 600px) {
  .edu_conts{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .skill_icon_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .i_am_align {
    
    text-align: justify;
    margin: 7px 0 0;
  }
  .i_am_align p {
    margin-bottom: 25px;
  }
  .gage_box {
    width: 30%;
  }
  .skill_gage_wrap {
    display: flex;
    margin: 25px 0;
    justify-content: space-between;
  }


  #section_intro{
    padding: 60px 12px 30px;

    box-sizing: border-box;
    background: #fff;


    width: calc(100% + 24px);
    margin: 0 -12px;
  
 



  }


  /*상단 탭 */
  .v-slide-group__content {
    justify-content: center !important;
  }
  .v-card--variant-elevated {
    box-shadow: none;
    background: rgba(255, 255, 255, 0);
    margin-top: 25px;
  }
  .v-tab.v-tab.v-btn {  
    border-radius: 30px;
    height: 30px;
  }
  /*탭 제목(버튼) */
  .tab_wrap {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  
  }
  .tab {
    font-size: 15px;
  }
  /*탭컨텐츠-프로필 */
  .profile_photo_wrap {
    display: flex;
    justify-content: center;
    margin-top: 7px;
  }
  .profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: pink;
      overflow: hidden; /* 이미지가 원형 모양에 맞게 잘려 나오도록 설정 */
    display: flex; /* 내부 요소들을 가로로 정렬하기 위해 flex 사용 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: flex-start; /* 세로 중앙 정렬 */
}

.profile img {
  text-align: center;
    max-width: 100%; /* 이미지가 부모 요소에 맞게 최대 너비로 설정 */
}
  .icon_box {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
   position: relative;
    top: 1px;
  }
  .icon_box svg{
    height: 100%;

}
  .icon_text_wrap {
    display: flex;
    align-items: baseline;

  }
  
  .icon_text_con_wrap {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 25px auto 0;
  }
  .icon_text_con_box {
    display: flex;
    flex-direction: column;
  }
  .icon_text_con1,
  .icon_text_con2 {
    width: 45%;
    display: flex;
    justify-content: center;
  }
 
  .icon_text_con2 {
    padding-right: 7%;
  }

  .icon_text_con2::before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    right: 50%;
    width: 1px;
    height: 50px;
    background: #79797950;
  }

 

  .profile_text {
    width: 80%;
    margin: 25px auto;
    text-align: center;
  
  }


}

/*태블릿사이즈 */

@media (min-width: 601px) {
  .intro_bg{
    background: #fff;
    width: calc(100% + 60px);
    margin-left: -30px;
    margin-right: -30px;
    height: calc(145px + 0px);
    margin-bottom: -34px;

  }
     #section_intro{
     padding-top: 70px;
     padding-bottom: 35px;
    box-sizing: border-box;
    background: #fff;


    width: calc(100% + 60px);
    margin: 0 -30px;
  
 



  }


 
  .skill_gages{
    width: 100%;
    margin: auto;
  }
  .not_enter{
  white-space: nowrap;
}
  .introduce_ment_align{
    display: flex;
    justify-content: center;
  }
  .edu_conts{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .skill_icon_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .i_am_align {     
    width: 100%;
    padding: 0 30px;
    text-align: justify;
    margin: 20px auto 0;
  }
  .i_am_align p {
    margin-bottom: 25px;
  }
  .gage_box {
    width: 28%;
  }
  .skill_gage_wrap {
    display: flex;
    margin: 35px 0;
    justify-content: space-between;
  }


  /*상단 탭 */
  .v-slide-group__content {
    justify-content: center !important;
  }
  .v-card--variant-elevated {
    box-shadow: none;
    background: rgba(255, 255, 255, 0);
    margin-top: 35px;
  }
  .v-tab.v-tab.v-btn {
   
    border-radius: 30px;
    height: 35px;
    min-width: 117px
  }
  /*탭 제목(버튼) */
  .tab_wrap {
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  .tab {
    font-size: 18px;
  }
  /*탭컨텐츠-프로필 */
  .profile_photo_wrap {
    display: flex;
    justify-content: center;
    margin-top: 22px;
  }
  .profile {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: pink;
    overflow: hidden; /* 이미지가 원형 모양에 맞게 잘려 나오도록 설정 */
    display: flex; /* 내부 요소들을 가로로 정렬하기 위해 flex 사용 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: flex-start; /* 세로 중앙 정렬 */
  }


.profile img {
  text-align: center;
    max-width: 100%; /* 이미지가 부모 요소에 맞게 최대 너비로 설정 */
}


  .icon_box {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    position: relative;
    top: 1px;
  }
  .icon_box svg{
    height: 80%;

}
  .icon_text_wrap {
    display: flex;
    align-items: baseline;
  
  }
  
  .icon_text_con_wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin: 35px auto 0;
  }
  .icon_text_con_box {
    display: flex;
    flex-direction: column;
    
  }
  .icon_text_con1{
     width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    box-sizing: border-box;
  }
  .icon_text_con2 {
    width: 50%;
    display: flex;
  justify-content: flex-start;
   
  }

  
    .icon_text_con2::before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    right: 50%;
    width: 1px;
    height: 70px;
    background: #79797950;
  }

 


  .profile_text {
   
    margin: 35px 0;
    padding: 0 30px;
    text-align: center;
  }
     v-timeline {
        /* 수직 방향의 스타일 */
        display: flex;
        flex-direction: column;
    }


}


/*태블릿사이즈 미디어쿼리 추가 */

@media (min-width: 820px) {
  d-flex dt, dd{
    text-align: center ;
  }
  .strong_font{
    text-align: center;
  }
  .v-timeline--horizontal.v-timeline--justify-auto {
    grid-template-rows: 30px min-content auto;
    margin: 22px auto 35px;
    width: 765px;
}
 .skill_gages{
    width: 765px;
    margin: auto;
  }






}


/*pc */
@media (min-width: 1024px) {
  .i_am_align{
    width: 1024px;
    padding: 0;
  }
  #section_intro{



    width: calc(100% + 100%);
  
 
  margin-left: -50%; /* 너비의 절반을 왼쪽으로 이동하여 가운데 정렬 */
  margin-right: -50%;


  }

  @media (min-width: 1024px) and (max-width: 1098px) {
    .i_am_align {     
    width: 100%;
    padding: 0 20px;
    text-align: justify;
    margin: 20px auto 0;
  }
    

  }



 

 
}
</style>