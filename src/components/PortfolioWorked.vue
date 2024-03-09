<template>
  <v-container>
    <section id="section_portfolio_worked">
      <div class="portfolio_worked_wrap">
        <div class="strong_font sub_title">실무 작업물</div>

        <v-chip-group
          color="white"
          mandatory
          v-model="selectedTab2"
          align-with-title
        >
          <v-chip @click="changeTab2(0)" :class="{ active: selectedTab2 === 0 }"
            >여행플랫폼 웹배너</v-chip
          >
          <v-chip @click="changeTab2(1)" :class="{ active: selectedTab2 === 1 }"
            >여행플랫폼 SNS</v-chip
          >
          <v-chip @click="changeTab2(2)" :class="{ active: selectedTab2 === 2 }"
            >SNS 카드뉴스</v-chip
          >
          <v-chip @click="changeTab2(3)" :class="{ active: selectedTab2 === 3 }"
            >쇼핑몰 합성&누끼</v-chip
          >
          <v-chip @click="changeTab2(4)" :class="{ active: selectedTab2 === 4 }"
            >상세페이지</v-chip
          >
          <v-chip @click="changeTab2(5)" :class="{ active: selectedTab2 === 5 }"
            >인쇄물</v-chip
          >
        </v-chip-group>

        <div class="image_slide_margin2">
          <div v-if="selectedTab2 === 0 || selectedTab2 === null">
           <!--글씨넣을거면여기에-->
           1. 메인 배너



            <!--여기가 이미지 슬라이드1-->
            <div class="slider">
              <div
                class="slide"
                v-for="(image, index) in images"
                :key="index"
                v-show="currentIndex === index"
                @mousedown="handleMouseDown"
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
              >
                <img class="slide_img_box" :src="image.src" :alt="image.alt" />
              </div>



              
            </div>
            <div class="prev_next_btn_wrap">
              <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide"
                ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
              >
              <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide"
                ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
              >
            </div>

           
             <!--글씨넣을거면여기에-->
             2. 추천여행 배너



            <!--여기가 이미지 슬라이드2-->
            <div class="slider">
              <div
                class="slide"
                v-for="(image, index) in images2"
                :key="index"
                v-show="currentIndex2 === index"
                @mousedown="handleMouseDown2"
                @mousemove="handleMouseMove2"
                @mouseup="handleMouseUp2"
              >
                <img class="slide_img_box" :src="image.src" :alt="image.alt" />
              </div>
            </div>
            <div class="prev_next_btn_wrap">
              <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide2"
                ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
              >
              <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide2"
                ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
              >
            </div>


             <!--글씨넣을거면여기에-->
             3. 맛집 배너

           

            
            <!--여기가 이미지 슬라이드3-->
            <div class="slider">
              <div
                class="slide"
                v-for="(image, index) in images3"
                :key="index"
                v-show="currentIndex3 === index"
                @mousedown="handleMouseDown3"
                @mousemove="handleMouseMove3"
                @mouseup="handleMouseUp3"
              >
                <img class="slide_img_box" :src="image.src" :alt="image.alt" />
              </div>
            </div>
            <div class="prev_next_btn_wrap">
              <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide3"
                ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
              >
              <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide3"
                ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
              >
            </div>

                  <!--글씨넣을거면여기에-->
                  4. 중간 배너

           

            
<!--여기가 이미지 슬라이드4-->
<div class="slider">
  <div
    class="slide"
    v-for="(image, index) in images4"
    :key="index"
    v-show="currentIndex4 === index"
    @mousedown="handleMouseDown4"
    @mousemove="handleMouseMove4"
    @mouseup="handleMouseUp4"
  >
    <img class="slide_img_box" :src="image.src" :alt="image.alt" />
  </div>
</div>
<div class="prev_next_btn_wrap">
  <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide4"
    ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
  >
  <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide4"
    ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
  >
</div>

  <!--글씨넣을거면여기에-->
  5. 하단 배너

           

            
<!--여기가 이미지 슬라이드5-->
<div class="slider">
  <div
    class="slide"
    v-for="(image, index) in images5"
    :key="index"
    v-show="currentIndex5 === index"
    @mousedown="handleMouseDown5"
    @mousemove="handleMouseMove5"
    @mouseup="handleMouseUp5"
    @touchstart="handleTouchStart5"
  @touchmove="handleTouchMove5"
  @touchend="handleTouchEnd5"
  >
    <img class="slide_img_box" :src="image.src" :alt="image.alt" />
  </div>
</div>
<div class="prev_next_btn_wrap">
  <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide5"
    ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
  >
  <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide5"
    ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
  >
</div>













            <div class="icon_text_con_box">
              <div class="icon_text_wrap">
                <div class="icon_box">
                  <svg
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z"
                      fill="black"
                    />
                  </svg>
                </div>
                여행욕구를 자극하는 활기찬 느낌의 웹배너들을 제작했습니다.
              </div>

              <div class="icon_text_wrap">
                <div class="icon_box">
                  <svg
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Photoshop
              </div>
            </div>




          </div>
          <div v-else-if="selectedTab2 === 1">
            <PortfolioMINSSNS />
          </div>
          <div v-else-if="selectedTab2 === 2">
             <PortfolioSNS />
          </div>
          <div v-else-if="selectedTab2 === 3">4</div>

          <div v-else-if="selectedTab2 === 4">5</div>

          <div v-else-if="selectedTab2 === 5">6</div>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
import PortfolioMINSSNS from './PortfolioMINSSNS.vue';
import PortfolioSNS from './PortfolioSNS.vue';
export default {
  components: {
  PortfolioMINSSNS,
PortfolioSNS
  },
  data: () => ({
    chipSize: "x-small",
    isDisabled: false,
    selectedTab2: 0,
    images: [
      { src: "./images/tai/top/1.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/tai/top/2.jpg", alt: "난지캠핑장ppt2" },
      { src: "./images/tai/top/3.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/tai/top/4.jpg", alt: "난지캠핑장ppt2" },

      { src: "./images/vietnam_banner/top/1.jpg", alt: "난지캠핑장ppt3" },
      { src: "./images/vietnam_banner/top/2.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/top/3.jpg", alt: "난지캠핑장ppt5" },

      { src: "./images/tteonaja_banner/top/1.jpg", alt: "난지캠핑장ppt6" },
      { src: "./images/tteonaja_banner/top/2.jpg", alt: "난지캠핑장ppt7" },
      { src: "./images/tteonaja_banner/top/3.jpg", alt: "난지캠핑장ppt8" },
      { src: "./images/tteonaja_banner/top/4.jpg", alt: "난지캠핑장ppt8" },
      { src: "./images/tteonaja_banner/top/5.jpg", alt: "난지캠핑장ppt8" },



      // 첫번째이미지슬라이드(이미지 총10장)
    ],
  
    images2: [
    { src: "./images/tteonaja_banner/top/11.jpg", alt: "난지캠핑장ppt9" },

    { src: "./images/tai/top/11.png", alt: "난지캠핑장ppt1" },
      { src: "./images/tai/top/22.jpg", alt: "난지캠핑장ppt2" },
      { src: "./images/tai/top/33.jpg", alt: "난지캠핑장ppt3" },
      { src: "./images/tai/top/44.jpg", alt: "난지캠핑장ppt10" },
      { src: "./images/tai/top/55.jpg", alt: "난지캠핑장ppt10" },

  
      { src: "./images/tteonaja_banner/top/22.jpg", alt: "난지캠핑장ppt10" },

      { src: "./images/vietnam_banner/top/11.jpg", alt: "난지캠핑장ppt10" },
      { src: "./images/vietnam_banner/top/22.jpg", alt: "난지캠핑장ppt10" },
      { src: "./images/vietnam_banner/top/33.jpg", alt: "난지캠핑장ppt10" },
    
      // 두번째이미지슬라이드
    ],
 
    images3: [
    { src: "./images/tai/top/a.jpg", alt: "난지캠핑장ppt5" },
      { src: "./images/tai/top/b.jpg", alt: "난지캠핑장ppt6" },  
      

      { src: "./images/vietnam_banner/top/a.jpg", alt: "난지캠핑장ppt3" },
      { src: "./images/vietnam_banner/top/b.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/top/c.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/top/d.jpg", alt: "난지캠핑장ppt4" },

 

      // 세번째이미지슬라이드
    ],

    images4: [  
      { src: "./images/tteonaja_banner/middle/1.jpg", alt: "난지캠핑장ppt3" },
    
      { src: "./images/tteonaja_banner/middle/3.jpg", alt: "난지캠핑장ppt4" },
    

      { src: "./images/tai/middle/1.jpg", alt: "난지캠핑장ppt4" },

      { src: "./images/vietnam_banner/middle/1.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/middle/2.jpg", alt: "난지캠핑장ppt4" },

      { src: "./images/tteonaja_banner/middle/2.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/tteonaja_banner/middle/4.jpg", alt: "난지캠핑장ppt4" },

      { src: "./images/vietnam_banner/middle/3.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/middle/4.jpg", alt: "난지캠핑장ppt4" },
      { src: "./images/vietnam_banner/middle/5.jpg", alt: "난지캠핑장ppt4" },

 

      // 네번째이미지슬라이드
    ],

    images5: [  
      { src: "./images/tteonaja_banner/bottom/2.jpg", alt: "난지캠핑장ppt3" },

      { src: "./images/vietnam_banner/bottom/1.jpg", alt: "난지캠핑장ppt3" },    
      { src: "./images/vietnam_banner/bottom/2.jpg", alt: "난지캠핑장ppt3" },
    
    
   

 

      // 5번째이미지슬라이드
    ],


    dragging: false,
    startX: 0,
    currentIndex: 0,
    currentIndex2: 0,
    currentIndex3: 0,
    currentIndex4: 0,
    currentIndex5: 0,
  }),

  methods: {
    changeTab2(index) {
      this.selectedTab2 = index;
    },
 
 
 

    handleMouseDown(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp() {
      this.dragging = false;
    },
    // 터치 이벤트 핸들러
    handleTouchStart(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      if (this.dragging) {
        const deltaX = event.touches[0].clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleTouchEnd() {
      this.dragging = false;
    },

    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    //여기까지 슬라이드1





    handleMouseDown2(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove2(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide2();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide2();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp2() {
      this.dragging = false;
    },
    // 터치 이벤트 핸들러
    handleTouchStart2(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove2(event) {
      if (this.dragging) {
        const deltaX = event.touches[0].clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide2();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide2();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleTouchEnd2() {
      this.dragging = false;
    },

    prevSlide2() {
      this.currentIndex2 =
        (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
    },
    nextSlide2() {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    },
    //여기까지 슬라이드2



    

    handleMouseDown3(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove3(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide3();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide3();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp3() {
      this.dragging = false;
    },
    // 터치 이벤트 핸들러
    handleTouchStart3(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove3(event) {
      if (this.dragging) {
        const deltaX = event.touches[0].clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide3();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide3();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleTouchEnd3() {
      this.dragging = false;
    },

    prevSlide3() {
      this.currentIndex3 =
        (this.currentIndex3 - 1 + this.images3.length) % this.images3.length;
    },
    nextSlide3() {
      this.currentIndex3 = (this.currentIndex3 + 1) % this.images3.length;
    },
    //여기까지 슬라이드3


    

    handleMouseDown4(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove4(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide4();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide4();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp4() {
      this.dragging = false;
    },
    // 터치 이벤트 핸들러
    handleTouchStart4(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove4(event) {
      if (this.dragging) {
        const deltaX = event.touches[0].clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide4();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide4();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleTouchEnd4() {
      this.dragging = false;
    },

    prevSlide4() {
      this.currentIndex4 =
        (this.currentIndex4 - 1 + this.images4.length) % this.images4.length;
    },
    nextSlide4() {
      this.currentIndex4 = (this.currentIndex4 + 1) % this.images4.length;
    },
    //여기까지 슬라이드4


    

    handleMouseDown5(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove5(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide5();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide5();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp5() {
      this.dragging = false;
    },
    // 터치 이벤트 핸들러
    handleTouchStart5(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove5(event) {
      if (this.dragging) {
        const deltaX = event.touches[0].clientX - this.startX;
        if (deltaX > 20) {
          // 드래그 거리가 20px 이상일 때
          this.prevSlide5();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX < -20) {
          // 드래그 거리가 -20px 이상일 때
          this.nextSlide5();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleTouchEnd5() {
      this.dragging = false;
    },

    prevSlide5() {
      this.currentIndex5 =
        (this.currentIndex5 - 1 + this.images5.length) % this.images5.length;
    },
    nextSlide5() {
      this.currentIndex5 = (this.currentIndex5 + 1) % this.images5.length;
    },
    //여기까지 슬라이드5

















    





  }
};

</script>

<style scoped>


.icon_text_wrap a {
  text-decoration: underline #797979;
}
/*이미지슬라이드 */
.v-row {
  margin: 0 !important;
}
.slide_img_box {
  border-radius: 8px;
}

.slide {
  flex: 0 0 auto;
  width: 100%;

  cursor: pointer;
}

.slide img {
  width: 100%;
  height: auto;
}

.point_color {
  margin-left: 4px;
}

/*모바일 */

@media (max-width: 600px) {
 
  #section_portfolio_worked {
    padding: 0 12px 50px;
    box-sizing: border-box;
  }
  .portfolio_worked_wrap {
    padding: 25px 0 0 0;
    border-top: 1px solid #79797935;
  }

  .sub_title {
    margin-bottom: 5px;
  }

  /*이미지슬라이드 */
  .image_slide_margin {
    margin: 25px 0;
  }
  .image_slide_margin2 {
    margin: 25px 0 0;
  }
  .slider {
    display: flex;
    overflow-x: hidden;
  }
  /**icon과텍스트(포트폴리오설명) */
  .icon_text_con_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .icon_text_wrap {
    display: flex;
    align-items: flex-start;
    text-align: justify;
  }
  .icon_box {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    position: relative;
    top: 6px;
  }
  .icon_box svg {
    height: 100%;
  }

  .icon_page_wrap {
    position: relative;
    left: 2px;
  }

  .page_text_align {
    position: relative;
    left: 2px;
  }
}

/*태블릿 */

@media (min-width: 601px) {
  #section_portfolio_worked {
    padding: 0 30px 70px;
    box-sizing: border-box;
  }
  .portfolio_worked_wrap {
    padding: 30px 0 0 0;
    border-top: 1px solid #79797935;
  }



  .sub_title {
    margin: 35px 0 10px 0;
    text-align: center;
  }

  /*이미지슬라이드 */
  .image_slide_margin {
    margin: 35px 0 0px;
  }
  .image_slide_margin2 {
    margin: 35px 0 0px;
  }
  .slider {
    display: flex;
    overflow-x: hidden;
  }
  /**icon과텍스트(포트폴리오설명) */

  .icon_text_wrap {
    display: flex;
    align-items: flex-start;
  }

  .icon_box {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    position: relative;
    top: 8px;
  }
  .icon_box svg {
    height: 80%;
  }
  .icon_page_wrap {
    position: relative;
    left: 3px;
  }

  .page_text_align {
    position: relative;
    left: 2px;
  }
}

/*pc추가 */
@media (min-width: 1024px) and (max-width: 1098px) {
  .icon_page_wrap {
    position: relative;
    left: 0;
  }

  .page_text_align {
    position: relative;
    left: 0px;
  }

  #section_portfolio {
    width: 100%;
    padding: 70px 30px;
    box-sizing: border-box;
    margin: auto;
  }
  .slider {
    width: 100%;
  }
}

/*PC 사이즈 */

@media (min-width: 1098px) {
  .icon_page_wrap {
    position: relative;
    left: 0;
  }

  .page_text_align {
    position: relative;
    left: 0px;
  }

  #section_portfolio {
    width: 1024px;
    padding: 70px 0;
    box-sizing: border-box;
    margin: auto;
  }
  .slider {
    width: 100%;
  }
}
</style>