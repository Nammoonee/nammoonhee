<template>
     <v-parallax
    src="../../public/images/bg/bg1.jpg"
  >
  <v-container>

   
    <section id="section_portfolio">
    <h2>포트폴리오</h2>

    <div class="strong_font sub_title">포트폴리오용 사이트제작</div>

    <v-chip-group color="white" mandatory v-model="selectedTab" align-with-title>
      <v-chip @click="changeTab(0)" :class="{ active: selectedTab === 0 }"
        >이력서 홈페이지</v-chip
      >
      <v-chip @click="changeTab(1)" :class="{ active: selectedTab === 1 }"
        >난지캠핑장 예약앱</v-chip
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
            v-for="(image, index) in images0"
            :key="index"
            v-show="currentIndex0 === index"
            @mousedown="handleMouseDown0"
            @mousemove="handleMouseMove0"
            @mouseup="handleMouseUp0"
            @touchstart="handleTouchStart0"
  @touchmove="handleTouchMove0"
  @touchend="handleTouchEnd0"
          >
            <img class="slide_img_box" :src="image.src" :alt="image.alt" />
          </div>
        </div>
        <div class="prev_next_btn_wrap">
          <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide0"
            ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
          >
          <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide0"
            ><v-icon class="btn_next_mdi">mdi-chevron-right</v-icon></v-btn
          >
        </div>




        <!--과제소개-->
<div class="icon_text_con_box">

<div class="icon_text_wrap">
    <div class="icon_box">
     <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z" fill="black"/>
</svg>

  
    </div>
    포트폴리오가 포함된 개인 이력서 반응형 홈페이지입니다.<br>
    Figma를 사용해 심플하면서 가독성이 좋게 디자인하고 VUE3 프로젝트로 제작했습니다.<br>
Firebase에 호스팅해 로컬PC가 아닌 환경에서도 사이트를 열어볼 수 있습니다.

  </div>



  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z" fill="black"/>
</svg>

  
    </div>
    Figma, HTML, CSS, VUE3, GIT hub, Firebase
  </div>

   
  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.57143 0C2.83862 0 3.05357 0.229883 3.05357 0.515625V1.375H5.94643V0.515625C5.94643 0.229883 6.16138 0 6.42857 0C6.69576 0 6.91071 0.229883 6.91071 0.515625V1.375H7.71429C8.42344 1.375 9 1.9916 9 2.75V3.09375V4.125V9.625C9 10.3834 8.42344 11 7.71429 11H1.28571C0.576563 11 0 10.3834 0 9.625V4.125V3.09375V2.75C0 1.9916 0.576563 1.375 1.28571 1.375H2.08929V0.515625C2.08929 0.229883 2.30424 0 2.57143 0ZM8.03571 4.125H0.964286V9.625C0.964286 9.81406 1.10893 9.96875 1.28571 9.96875H7.71429C7.89107 9.96875 8.03571 9.81406 8.03571 9.625V4.125ZM6.60938 6.38086L4.35938 8.78711C4.17054 8.98906 3.86518 8.98906 3.67835 8.78711L2.39263 7.41211C2.20379 7.21016 2.20379 6.88359 2.39263 6.68379C2.58147 6.48398 2.88683 6.48184 3.07366 6.68379L4.01786 7.69355L5.92634 5.65254C6.11518 5.45059 6.42054 5.45059 6.60737 5.65254C6.7942 5.85449 6.79621 6.18105 6.60737 6.38086H6.60938Z" fill="black"/>
      </svg>
  
    </div>
    2023.02.20 ~ 2023.03.10

  </div>

  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51889 11.9889L8.06722 9.47556C8.775 8.95556 9.26611 8.14667 9.36722 7.22222H12.2778C12.155 9.21556 11.0861 10.9489 9.51889 11.9889ZM7.22222 2.91056V0C10.3278 0.187778 12.8122 2.67222 13 5.77778H10.0894C9.92333 4.26833 8.73167 3.07667 7.22222 2.91056ZM2.88889 6.86111C2.88889 7.32333 2.98278 7.76389 3.16333 8.16111L0.65 9.61278C0.231111 8.78222 0 7.85056 0 6.86111C0 3.58944 2.55667 0.917222 5.77778 0.722222V3.63278C4.15278 3.81333 2.88889 5.18556 2.88889 6.86111ZM6.13889 13C3.99389 13 2.10889 11.9167 1.01111 10.2411L3.52444 8.78944C4.11667 9.59111 5.05556 10.1111 6.13889 10.1111C6.60111 10.1111 7.04167 10.0172 7.43889 9.83667L8.89056 12.35C8.06 12.7689 7.12833 13 6.13889 13Z" fill="black"/>
</svg>

  
    </div>
   <div>
     개인<span class="point_color">100%</span>
   </div>
  </div>



  

  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14 3C1.14 1.974 1.974 1.14 3 1.14H5.4V0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6H5.4V4.86H3C1.974 4.86 1.14 4.026 1.14 3ZM3.6 3.6H8.4V2.4H3.6V3.6ZM9 0H6.6V1.14H9C10.026 1.14 10.86 1.974 10.86 3C10.86 4.026 10.026 4.86 9 4.86H6.6V6H9C9.79565 6 10.5587 5.68393 11.1213 5.12132C11.6839 4.55871 12 3.79565 12 3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0Z" fill="black"/>
</svg>

  
    </div>
    <a href="https://portfol-ee841.web.app/">사이트 바로가기</a>
  </div>










</div>






      </div>

      <div v-else-if="selectedTab === 1">
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
            @touchstart="handleTouchStart"
  @touchmove="handleTouchMove"
  @touchend="handleTouchEnd"
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
        <!--과제소개-->
        <div class="icon_text_con_box">

        <div class="icon_text_wrap">
            <div class="icon_box">
             <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z" fill="black"/>
</svg>

          
            </div>
            빠른 예약완료가 가능한 캠징장 예약앱입니다.<br>
            직관적이고 심플하게 디자인하고 VUE2 프로젝트로 제작했습니다.<br>            
            Firebase에 호스팅해 로컬PC가 아닌 환경에서도 사이트를 열어볼 수 있습니다.<br>
            ServiceWorker, Manifest를 사용해 PC나 모바일에 PWA웹앱을 설치할 수 있습니다.
          </div>

       

          <div class="icon_text_wrap">
            <div class="icon_box">
              <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z" fill="black"/>
</svg>

          
            </div>
            HTML, CSS, JAVASCRIPT, VUE2, GIT hub, Firebase
          </div>

           
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
            개인<span class="point_color">100%</span>
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

      <div v-else-if="selectedTab === 2">

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
            @touchstart="handleTouchStart2"
  @touchmove="handleTouchMove2"
  @touchend="handleTouchEnd2"
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




<!--과제소개-->
<div class="icon_text_con_box">

<div class="icon_text_wrap">
    <div class="icon_box">
     <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.17188 11.1562H7.96875V9.03125H7.17188C6.73027 9.03125 6.375 8.67598 6.375 8.23438C6.375 7.79277 6.73027 7.4375 7.17188 7.4375H8.76562C9.20723 7.4375 9.5625 7.79277 9.5625 8.23438V11.1562H9.82812C10.2697 11.1562 10.625 11.5115 10.625 11.9531C10.625 12.3947 10.2697 12.75 9.82812 12.75H7.17188C6.73027 12.75 6.375 12.3947 6.375 11.9531C6.375 11.5115 6.73027 11.1562 7.17188 11.1562ZM8.5 4.25C8.78179 4.25 9.05204 4.36194 9.2513 4.5612C9.45056 4.76046 9.5625 5.03071 9.5625 5.3125C9.5625 5.59429 9.45056 5.86454 9.2513 6.0638C9.05204 6.26306 8.78179 6.375 8.5 6.375C8.21821 6.375 7.94796 6.26306 7.7487 6.0638C7.54944 5.86454 7.4375 5.59429 7.4375 5.3125C7.4375 5.03071 7.54944 4.76046 7.7487 4.5612C7.94796 4.36194 8.21821 4.25 8.5 4.25Z" fill="black"/>
</svg>

  
    </div>
    팀프로젝트로 제작한 컴포즈커피 리뉴얼 사이트입니다.<br>
    기존 사이트의 가독성, 디자인, 기능 등의 단점을 보완했습니다.<br>
    3명의 멤버가 파트를 분배해 Google 시트를 통해 작업 진행상황을 공유하고 Git hub를 통해 병합했습니다.<br>

  </div>



  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17944 4.1748C6.68982 4.25918 6.16894 4.11152 5.79043 3.72832L5.12892 3.05859C4.86848 2.79492 4.72263 2.43984 4.72263 2.06719V1.85449L3.33883 1.08984C3.24681 1.03887 3.18951 0.938672 3.19472 0.831445C3.19993 0.724219 3.26244 0.629297 3.35967 0.585352L4.17918 0.216211C4.49865 0.0738281 4.84417 0 5.1949 0H5.50916C6.14637 0 6.75927 0.246094 7.22285 0.687305L7.99722 1.42559C8.4174 1.82637 8.57366 2.40469 8.45907 2.9373L8.7334 3.2168L8.8723 3.07617C9.03551 2.91094 9.29942 2.91094 9.46089 3.07617L9.87759 3.49805C10.0408 3.66328 10.0408 3.93047 9.87759 4.09395L8.34968 5.64082C8.18647 5.80605 7.92256 5.80605 7.76109 5.64082L7.34439 5.21895C7.18118 5.05371 7.18118 4.78652 7.34439 4.62305L7.48329 4.48242L7.17944 4.1748ZM0.475736 6.62871L4.52991 3.20977C4.59068 3.2959 4.66013 3.37852 4.73479 3.45586L5.3963 4.12559C5.50048 4.23105 5.6116 4.32246 5.72966 4.40156L2.34222 8.51836C2.09046 8.82422 1.71716 9 1.32477 9C0.592065 9 0 8.39883 0 7.65879C0 7.26152 0.175362 6.88359 0.475736 6.62871Z" fill="black"/>
</svg>

  
    </div>
    HTML, CSS, JAVASCRIPT, JQWERY, GIT hub
  </div>

   
  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.57143 0C2.83862 0 3.05357 0.229883 3.05357 0.515625V1.375H5.94643V0.515625C5.94643 0.229883 6.16138 0 6.42857 0C6.69576 0 6.91071 0.229883 6.91071 0.515625V1.375H7.71429C8.42344 1.375 9 1.9916 9 2.75V3.09375V4.125V9.625C9 10.3834 8.42344 11 7.71429 11H1.28571C0.576563 11 0 10.3834 0 9.625V4.125V3.09375V2.75C0 1.9916 0.576563 1.375 1.28571 1.375H2.08929V0.515625C2.08929 0.229883 2.30424 0 2.57143 0ZM8.03571 4.125H0.964286V9.625C0.964286 9.81406 1.10893 9.96875 1.28571 9.96875H7.71429C7.89107 9.96875 8.03571 9.81406 8.03571 9.625V4.125ZM6.60938 6.38086L4.35938 8.78711C4.17054 8.98906 3.86518 8.98906 3.67835 8.78711L2.39263 7.41211C2.20379 7.21016 2.20379 6.88359 2.39263 6.68379C2.58147 6.48398 2.88683 6.48184 3.07366 6.68379L4.01786 7.69355L5.92634 5.65254C6.11518 5.45059 6.42054 5.45059 6.60737 5.65254C6.7942 5.85449 6.79621 6.18105 6.60737 6.38086H6.60938Z" fill="black"/>
      </svg>
  
    </div>
    2023.11.30 ~ 2023.12.28

  </div>

  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51889 11.9889L8.06722 9.47556C8.775 8.95556 9.26611 8.14667 9.36722 7.22222H12.2778C12.155 9.21556 11.0861 10.9489 9.51889 11.9889ZM7.22222 2.91056V0C10.3278 0.187778 12.8122 2.67222 13 5.77778H10.0894C9.92333 4.26833 8.73167 3.07667 7.22222 2.91056ZM2.88889 6.86111C2.88889 7.32333 2.98278 7.76389 3.16333 8.16111L0.65 9.61278C0.231111 8.78222 0 7.85056 0 6.86111C0 3.58944 2.55667 0.917222 5.77778 0.722222V3.63278C4.15278 3.81333 2.88889 5.18556 2.88889 6.86111ZM6.13889 13C3.99389 13 2.10889 11.9167 1.01111 10.2411L3.52444 8.78944C4.11667 9.59111 5.05556 10.1111 6.13889 10.1111C6.60111 10.1111 7.04167 10.0172 7.43889 9.83667L8.89056 12.35C8.06 12.7689 7.12833 13 6.13889 13Z" fill="black"/>
</svg>

  
    </div>
   <div>
     개인<span class="point_color">33%</span>
   </div>
  </div>

  <div class="icon_text_wrap icon_page_wrap">
    <div class="icon_box">
      <svg class="icon_page" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 10.1875V11.2812C11.25 11.5547 11.0156 11.75 10.7812 11.75H4.21875C3.94531 11.75 3.75 11.5547 3.75 11.2812V10.1875C3.75 9.95312 3.94531 9.71875 4.21875 9.71875H10.7812C11.0156 9.71875 11.25 9.95312 11.25 10.1875ZM10.7812 13C11.0156 13 11.25 13.2344 11.25 13.4688V14.5625C11.25 14.8359 11.0156 15.0312 10.7812 15.0312H4.21875C3.94531 15.0312 3.75 14.8359 3.75 14.5625V13.4688C3.75 13.2344 3.94531 13 4.21875 13H10.7812ZM15 5.65625V18.625C15 19.6797 14.1406 20.5 13.125 20.5H1.875C0.820312 20.5 0 19.6797 0 18.625V2.375C0 1.35938 0.820312 0.5 1.875 0.5H9.84375C10.3125 0.5 10.8203 0.734375 11.1719 1.08594L14.4141 4.32812C14.7656 4.67969 15 5.1875 15 5.65625ZM10 2.53125V5.5H12.9688L10 2.53125ZM13.125 18.625V7.375H9.0625C8.51562 7.375 8.125 6.98438 8.125 6.4375V2.375H1.875V18.625H13.125Z" fill="black"/>
</svg>



  
    </div>
   <div class="page_text_align">
     
     1.로고 리뉴얼 2.헤더 3.메인(SNS섹션) 4.서브페이지(고객의소리, 프랜차이즈, 로그인, 회원가입) 5.PPT탬플릿 디자인 <v-chip class="mb-1 sub_btn" :size="chipSize" @click="slideMoon">담당 페이지</v-chip>
   </div>
  </div>

  

  <div class="icon_text_wrap">
    <div class="icon_box">
      <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14 3C1.14 1.974 1.974 1.14 3 1.14H5.4V0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3C0 3.79565 0.316071 4.55871 0.87868 5.12132C1.44129 5.68393 2.20435 6 3 6H5.4V4.86H3C1.974 4.86 1.14 4.026 1.14 3ZM3.6 3.6H8.4V2.4H3.6V3.6ZM9 0H6.6V1.14H9C10.026 1.14 10.86 1.974 10.86 3C10.86 4.026 10.026 4.86 9 4.86H6.6V6H9C9.79565 6 10.5587 5.68393 11.1213 5.12132C11.6839 4.55871 12 3.79565 12 3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0Z" fill="black"/>
</svg>

  
    </div>
    <a href="https://nuriif.github.io/compose/html/">사이트 바로가기</a>
  </div>










</div>
        
      
      
      
      </div>
    </div>



   
 

    </section>

 






   <PortfolioWorked />




  </v-container>
</v-parallax>
</template>

<script>
import PortfolioWorked from './PortfolioWorked.vue';

export default {
    components: {
PortfolioWorked
  },
  data: () => ({
    scrollY: 0,
    chipSize: 'x-small' ,
    isDisabled: false,
    selectedTab: 0, // 초기값을 0으로 설정
     images0: [
      { src: "./images/ppt/1.jpg", alt: "포트폴리오사이트ppt" },
      { src: "./images/ppt/2.jpg", alt: "포트폴리오사이트ppt" },
        { src: "./images/ppt/3.jpg", alt: "포트폴리오사이트ppt" },
          { src: "./images/ppt/5.jpg", alt: "포트폴리오사이트ppt" },
            { src: "./images/ppt/6.jpg", alt: "포트폴리오사이트ppt" },
              { src: "./images/ppt/7.jpg", alt: "포트폴리오사이트ppt" },
                { src: "./images/ppt/8.jpg", alt: "포트폴리오사이트ppt" },
                  { src: "./images/ppt/9.jpg", alt: "포트폴리오사이트ppt" },
                 
      
     
// 0번째이미지슬라이드
    ],

    images: [
      { src: "./images/pofolgif/nanji_ppt_1.gif", alt: "난지캠핑장ppt1" },
      { src: "./images/pofolgif/nanji_ppt_2.jpeg", alt: "난지캠핑장ppt2" },
      { src: "./images/pofolgif/nanji_ppt_3.jpeg", alt: "난지캠핑장ppt3" },
      { src: "./images/pofolgif/nanji_ppt_4.jpeg", alt: "난지캠핑장ppt4" },
      { src: "./images/pofolgif/nanji_ppt_5.jpeg", alt: "난지캠핑장ppt5" },
      { src: "./images/pofolgif/nanji_ppt_6.jpeg", alt: "난지캠핑장ppt6" },
      { src: "./images/pofolgif/nanji_ppt_7.jpeg", alt: "난지캠핑장ppt7" },
      { src: "./images/pofolgif/nanji_ppt_8.jpeg", alt: "난지캠핑장ppt8" },
      { src: "./images/pofolgif/nanji_ppt_9.jpeg", alt: "난지캠핑장ppt9" },
   
      { src: "./images/pofolgif/nanji_ppt_11.jpeg", alt: "난지캠핑장ppt11" },     
      { src: "./images/pofolgif/nanji_ppt_12.gif", alt: "난지캠핑장ppt12" },
      { src: "./images/pofolgif/nanji_ppt_13.gif", alt: "난지캠핑장ppt13" },
      { src: "./images/pofolgif/nanji_ppt_14.gif", alt: "난지캠핑장ppt14" },
      { src: "./images/pofolgif/nanji_ppt_15.gif", alt: "난지캠핑장ppt15" },
      { src: "./images/pofolgif/nanji_ppt_16.gif", alt: "난지캠핑장ppt16" },
      { src: "./images/pofolgif/nanji_ppt_17.gif", alt: "난지캠핑장ppt17" },
      { src: "./images/pofolgif/nanji_ppt_18.gif", alt: "난지캠핑장ppt18" },
      { src: "./images/pofolgif/nanji_ppt_19.gif", alt: "난지캠핑장ppt19" },
      { src: "./images/pofolgif/nanji_ppt_20.jpeg", alt: "난지캠핑장ppt20" },
      { src: "./images/pofolgif/nanji_ppt_21.gif", alt: "난지캠핑장ppt21" },
      // 첫번째이미지슬라이드(이미지 총20장)
    ],
   
    images2: [
      { src: "./images/nanjigif/1.jpeg", alt: "컴포즈커피ppt1" },
      { src: "./images/nanjigif/2.jpeg", alt: "컴포즈커피ppt2" },
      { src: "./images/nanjigif/3.jpeg", alt: "컴포즈커피ppt3" },
      { src: "./images/nanjigif/4.gif", alt: "컴포즈커피ppt4" },
      { src: "./images/nanjigif/5.gif", alt: "컴포즈커피ppt5" },
      { src: "./images/nanjigif/6.jpeg", alt: "컴포즈커피ppt6" },
      { src: "./images/nanjigif/7.gif", alt: "컴포즈커피ppt7" },
      { src: "./images/nanjigif/8.jpeg", alt: "컴포즈커피ppt8" },
      { src: "./images/nanjigif/9.gif", alt: "컴포즈커피ppt9" },
      { src: "./images/nanjigif/10.gif", alt: "컴포즈커피ppt10" },
      { src: "./images/nanjigif/11.gif", alt: "컴포즈커피ppt10" },
      { src: "./images/nanjigif/12.gif", alt: "컴포즈커피ppt10" },
      { src: "./images/nanjigif/13.jpeg", alt: "컴포즈커피ppt10" },
      
     
// 두번째이미지슬라이드
    ],



    
    dragging: false,
    startX: 0,
    currentIndex0: 0,
    currentIndex: 0,
    currentIndex2: 0,
  }),
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize(); // 초기에 한 번 호출하여 현재 창 크기에 맞게 설정
  },
  destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
     slideMoon: function() {
     this.currentIndex2 = 5;
        
      }
    ,

     handleResize() {
      // 현재 창의 너비를 확인하여 chipSize 업데이트
      const screenWidth = window.innerWidth;
      this.chipSize = screenWidth <= 600 ? 'x-small' : 'small';
    },
    handleScroll() {
            this.scrollY = window.scrollY;
        },
 

    changeTab(index) {
      this.selectedTab = index;      
    },




    
  
    prevSlide0() {
      this.currentIndex0 =
        (this.currentIndex0 - 1 + this.images0.length) % this.images0.length;
    },
    nextSlide0() {
      this.currentIndex0 = (this.currentIndex0 + 1) % this.images0.length;
    },

 
    handleMouseDown0(event) {
      this.dragging = true;
      this.startX = event.clientX;
    },
    handleMouseMove0(event) {
    if (this.dragging) {
    const deltaX = event.clientX - this.startX;
    if (deltaX > 20) {
      // 드래그 거리가 20px 이상일 때
      this.prevSlide0();
      this.dragging = false; // 드래그 후 재설정
    } else if (deltaX < -20) {
      // 드래그 거리가 -20px 이상일 때
      this.nextSlide0();
      this.dragging = false; // 드래그 후 재설정
    }
      }
      
    },
     // 터치 이벤트 핸들러
  handleTouchStart0(event) {
    this.dragging = true;
    this.startX = event.touches[0].clientX;
  },
  handleTouchMove0(event) {
    if (this.dragging) {
      const deltaX = event.touches[0].clientX - this.startX;
      if (deltaX > 20) {
        // 드래그 거리가 20px 이상일 때
        this.prevSlide0();
        this.dragging = false; // 드래그 후 재설정
      } else if (deltaX < -20) {
        // 드래그 거리가 -20px 이상일 때
        this.nextSlide0();
        this.dragging = false; // 드래그 후 재설정
      }
    }
  },
  handleTouchEnd0() {
    this.dragging = false;
  },
    handleMouseUp0() {
      this.dragging = false;
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








    prevSlide2() {
      this.currentIndex2 =
        (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
    },
    nextSlide2() {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    },

  
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
    handleMouseUp2() {
      this.dragging = false;
    },
  },






};
</script>

<style scoped>




.icon_text_wrap a{
  text-decoration: underline #797979
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

.point_color{
    margin-left: 4px;
  }

/*모바일 */

@media (max-width: 600px) {
  #section_portfolio{
  
   padding: 50px 12px 0;
    box-sizing: border-box;
   
  
  }
 
  .sub_title{
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
  .icon_text_con_box{
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

  .icon_page_wrap{
     position: relative;
    left: 2px;

  }

  .page_text_align{
    position: relative;
    left: 2px;
   
  }
 


}

/*태블릿 */

@media (min-width: 601px) {
     #section_portfolio{
    padding: 70px 30px;
    box-sizing: border-box;
  }
  
   .sub_title{
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
   .icon_page_wrap{
     position: relative;
    left: 3px;

  }

  .page_text_align{
    position: relative;
    left: 2px;
   
  }
 
 

}

/*pc추가 */
@media (min-width: 1024px) and (max-width: 1098px){

   .icon_page_wrap{
     position: relative;
    left: 0;

  }

  .page_text_align{
    position: relative;
    left: 0px;
   
  }
 
     #section_portfolio{
      width: 100%;
    padding: 70px 30px;
    box-sizing: border-box;
     margin: auto;
  }
  .slider{
    width: 100%;
   
  }
 
}



/*PC 사이즈 */


@media (min-width: 1098px) {

   .icon_page_wrap{
     position: relative;
    left: 0;

  }

  .page_text_align{
    position: relative;
    left: 0px;
   
  }
 
     #section_portfolio{
      width: 1024px;
    padding: 70px 0;
    box-sizing: border-box;
     margin: auto;
  }
  .slider{
    width: 100%;
   
  }
 
  

 


}
</style>