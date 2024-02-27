<template>
  <v-container>
    <h2>포트폴리오</h2>

    <div class="strong_font sub_title">포트폴리오용 사이트제작</div>

    <v-chip-group mandatory v-model="selectedTab" align-with-title>
      <v-chip @click="changeTab(0)" :class="{ active: selectedTab === 0 }"
        >난지캠핑장 예약앱</v-chip
      >
      <v-chip @click="changeTab(1)" :class="{ active: selectedTab === 1 }"
        >이력서 홈페이지</v-chip
      >
      <v-chip @click="changeTab(2)" :class="{ active: selectedTab === 2 }"
        >컴포즈커피 팀과제</v-chip
      >
    </v-chip-group>
    <div class="image_slide_margin">
      <div v-if="selectedTab === 0 || selectedTab === null">
        <!--여기가 이미지 슬라이드-->
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

        <div class="icon_text_wrap">
            <div class="icon_box">
             <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z" fill="black"/>
</svg>

          
            </div>
            빠른 예약완료를 목표로한 PWA 웹앱 사이트입니다.
          </div>

       

          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z" fill="black"/>
</svg>

          
            </div>
            HTML, CSS, JAVASCRIPT, VUE2
          </div>

           <div class="icon_text_con_box">
          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.57143 0C2.83862 0 3.05357 0.229883 3.05357 0.515625V1.375H5.94643V0.515625C5.94643 0.229883 6.16138 0 6.42857 0C6.69576 0 6.91071 0.229883 6.91071 0.515625V1.375H7.71429C8.42344 1.375 9 1.9916 9 2.75V3.09375V4.125V9.625C9 10.3834 8.42344 11 7.71429 11H1.28571C0.576563 11 0 10.3834 0 9.625V4.125V3.09375V2.75C0 1.9916 0.576563 1.375 1.28571 1.375H2.08929V0.515625C2.08929 0.229883 2.30424 0 2.57143 0ZM8.03571 4.125H0.964286V9.625C0.964286 9.81406 1.10893 9.96875 1.28571 9.96875H7.71429C7.89107 9.96875 8.03571 9.81406 8.03571 9.625V4.125ZM6.60938 6.38086L4.35938 8.78711C4.17054 8.98906 3.86518 8.98906 3.67835 8.78711L2.39263 7.41211C2.20379 7.21016 2.20379 6.88359 2.39263 6.68379C2.58147 6.48398 2.88683 6.48184 3.07366 6.68379L4.01786 7.69355L5.92634 5.65254C6.11518 5.45059 6.42054 5.45059 6.60737 5.65254C6.7942 5.85449 6.79621 6.18105 6.60737 6.38086H6.60938Z" fill="black"/>
              </svg>
          
            </div>
            2024.01.15 ~ 2024.02.14
          </div>

          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51889 11.9889L8.06722 9.47556C8.775 8.95556 9.26611 8.14667 9.36722 7.22222H12.2778C12.155 9.21556 11.0861 10.9489 9.51889 11.9889ZM7.22222 2.91056V0C10.3278 0.187778 12.8122 2.67222 13 5.77778H10.0894C9.92333 4.26833 8.73167 3.07667 7.22222 2.91056ZM2.88889 6.86111C2.88889 7.32333 2.98278 7.76389 3.16333 8.16111L0.65 9.61278C0.231111 8.78222 0 7.85056 0 6.86111C0 3.58944 2.55667 0.917222 5.77778 0.722222V3.63278C4.15278 3.81333 2.88889 5.18556 2.88889 6.86111ZM6.13889 13C3.99389 13 2.10889 11.9167 1.01111 10.2411L3.52444 8.78944C4.11667 9.59111 5.05556 10.1111 6.13889 10.1111C6.60111 10.1111 7.04167 10.0172 7.43889 9.83667L8.89056 12.35C8.06 12.7689 7.12833 13 6.13889 13Z" fill="black"/>
</svg>

          
            </div>
            개인 100%
          </div>

          

          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14 3C1.14 1.974 1.974 1.14 3 1.14H5.4V0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6H5.4V4.86H3C1.974 4.86 1.14 4.026 1.14 3ZM3.6 3.6H8.4V2.4H3.6V3.6ZM9 0H6.6V1.14H9C10.026 1.14 10.86 1.974 10.86 3C10.86 4.026 10.026 4.86 9 4.86H6.6V6H9C9.79565 6 10.5587 5.68393 11.1213 5.12132C11.6839 4.55871 12 3.79565 12 3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0Z" fill="black"/>
</svg>

          
            </div>
            <a href="https://nanji-b692a.web.app">사이트 바로가기</a>
          </div>










        </div>
      </div>

      <div v-else-if="selectedTab === 1">2</div>

      <div v-else-if="selectedTab === 2">3</div>
    </div>



      <div class="strong_font sub_title">실무 작업물</div>

    <v-chip-group mandatory v-model="selectedTab2" align-with-title>
      <v-chip @click="changeTab2(0)" :class="{ active: selectedTab2 === 0 }"
        >여행플랫폼 웹배너</v-chip
      >
      <v-chip @click="changeTab2(1)" :class="{ active: selectedTab2 === 1 }"
        >SNS카드뉴스</v-chip
      >
      <v-chip @click="changeTab2(2)" :class="{ active: selectedTab2 === 2 }"
        >G마켓 포스터</v-chip
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
    <div class="image_slide_margin">
      <div v-if="selectedTab2 === 0 || selectedTab2 === null">
        <!--여기가 이미지 슬라이드-->
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

        <div class="icon_text_con_box">
          <!-- <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.57143 0C2.83862 0 3.05357 0.229883 3.05357 0.515625V1.375H5.94643V0.515625C5.94643 0.229883 6.16138 0 6.42857 0C6.69576 0 6.91071 0.229883 6.91071 0.515625V1.375H7.71429C8.42344 1.375 9 1.9916 9 2.75V3.09375V4.125V9.625C9 10.3834 8.42344 11 7.71429 11H1.28571C0.576563 11 0 10.3834 0 9.625V4.125V3.09375V2.75C0 1.9916 0.576563 1.375 1.28571 1.375H2.08929V0.515625C2.08929 0.229883 2.30424 0 2.57143 0ZM8.03571 4.125H0.964286V9.625C0.964286 9.81406 1.10893 9.96875 1.28571 9.96875H7.71429C7.89107 9.96875 8.03571 9.81406 8.03571 9.625V4.125ZM6.60938 6.38086L4.35938 8.78711C4.17054 8.98906 3.86518 8.98906 3.67835 8.78711L2.39263 7.41211C2.20379 7.21016 2.20379 6.88359 2.39263 6.68379C2.58147 6.48398 2.88683 6.48184 3.07366 6.68379L4.01786 7.69355L5.92634 5.65254C6.11518 5.45059 6.42054 5.45059 6.60737 5.65254C6.7942 5.85449 6.79621 6.18105 6.60737 6.38086H6.60938Z" fill="black"/>
              </svg>
          
            </div>
            근무기간 : 2024.01.15 ~ 2024.02.14
          </div>

          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51889 11.9889L8.06722 9.47556C8.775 8.95556 9.26611 8.14667 9.36722 7.22222H12.2778C12.155 9.21556 11.0861 10.9489 9.51889 11.9889ZM7.22222 2.91056V0C10.3278 0.187778 12.8122 2.67222 13 5.77778H10.0894C9.92333 4.26833 8.73167 3.07667 7.22222 2.91056ZM2.88889 6.86111C2.88889 7.32333 2.98278 7.76389 3.16333 8.16111L0.65 9.61278C0.231111 8.78222 0 7.85056 0 6.86111C0 3.58944 2.55667 0.917222 5.77778 0.722222V3.63278C4.15278 3.81333 2.88889 5.18556 2.88889 6.86111ZM6.13889 13C3.99389 13 2.10889 11.9167 1.01111 10.2411L3.52444 8.78944C4.11667 9.59111 5.05556 10.1111 6.13889 10.1111C6.60111 10.1111 7.04167 10.0172 7.43889 9.83667L8.89056 12.35C8.06 12.7689 7.12833 13 6.13889 13Z" fill="black"/>
</svg>

          
            </div>
            개인 100%
          </div> -->
            <div class="icon_text_wrap">
            <div class="icon_box">
             <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z" fill="black"/>
</svg>

          
            </div>
            여행욕구를 자극하는 활기찬 느낌의 웹배너들을 제작했습니다.
          </div>


          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z" fill="black"/>
</svg>

          
            </div>
            Photoshop
          </div>

        

          









        </div>
      </div>
          <div v-else-if="selectedTab2 === 1">2</div>
              <div v-else-if="selectedTab2 === 2">3</div>
                  <div v-else-if="selectedTab2 === 3">4</div>

      <div v-else-if="selectedTab2 === 4">5</div>

      <div v-else-if="selectedTab2 === 5">6</div>
       
    </div>







  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedTab: 0, // 초기값을 0으로 설정
    images: [
      { src: "./images/pofolgif/nanji_ppt_1.gif", alt: "난지캠핑장ppt1" },
      { src: "../assets/logo.png", alt: "난지캠핑장ppt2" },
      // Add more image objects as needed
    ],
    selectedTab2: 0, 
    images2: [
      { src: "./images/pofolgif/nanji_ppt_1.gif", alt: "난지캠핑장ppt1" },
      { src: "../assets/logo.png", alt: "난지캠핑장ppt2" },
      // Add more image objects as needed
    ],
    
    dragging: false,
    startX: 0,
    currentIndex: 0,
    currentIndex2: 0,
  }),
  methods: {
    changeTab(index) {
      this.selectedTab = index;      
    },
   
    handleMouseDown(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX < -20) {
          // 드래그 거리가 -10px 이상일 때
          this.prevSlide();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX > +20) {
          // 드래그 거리가 -10px 이상일 때
          this.nextSlide();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp() {
      this.dragging = false;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide2() {
      this.currentIndex2 =
        (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
    },
    nextSlide2() {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    },

     changeTab2(index) {     
       this.selectedTab2 = index;
    },
    handleMouseDown2(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove2(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.startX;
        if (deltaX < -20) {
          // 드래그 거리가 -10px 이상일 때
          this.prevSlide2();
          this.dragging = false; // 드래그 후 재설정
        } else if (deltaX > +20) {
          // 드래그 거리가 -10px 이상일 때
          this.nextSlide2();
          this.dragging = false; // 드래그 후 재설정
        }
      }
    },
    handleMouseUp2() {
      this.dragging = false;
    },
  },
};
</script>

<style scoped>
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

@media (max-width: 600px) {
  .sub_title{
    margin-bottom: 5px;
  }



  /*이미지슬라이드 */
  .image_slide_margin {
    margin: 25px 0 50px;
  }
  .slider {
    display: flex;
    overflow-x: hidden;
  }
  /**icon과텍스트(포트폴리오설명) */
  .icon_box {
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;
    top: 1px;
  }
  .icon_box svg {
    height: 100%;
  }
  .icon_text_wrap {
    display: flex;
    align-items: center;
  }
}

/*태블릿 */

@media (min-width: 601px) {
   .sub_title{
    margin-bottom: 10px;
    text-align: center;
  }


  /*이미지슬라이드 */
  .image_slide_margin {
    margin: 35px 0 70px;
  }
  .slider {
    display: flex;
    overflow-x: hidden;
  }
  /**icon과텍스트(포트폴리오설명) */
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
  .icon_box svg {
    height: 80%;
  }
  .icon_text_wrap {
    display: flex;
    align-items: center;
  }
}

@media (min-width: 640px) {
  
 
  
   

}

/*PC 사이즈 */


@media (min-width: 1024px) {

 


}
</style>