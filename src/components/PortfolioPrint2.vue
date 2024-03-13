<template>
  <v-container>
    <div class="portfolio_worked_wrap">
      <div class="image_slide_margin2">
          
          <div class="sns_container">
            <div class="sns1">
              <!--글씨넣을거면여기에-->
              <div class="icon_text_wrap">
              <div class="icon_box">
              <v-icon>mdi-numeric-3-box</v-icon>
              </div>
            필리핀 맛집 스티커
            </div>

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
                  <img
                    class="slide_img_box"
                    :src="image.src"
                    :alt="image.alt"
                  />
                </div>
              </div>
              <div class="prev_next_btn_wrap">
                <v-btn color="grey-darken-2" class="btn_prev" @click="prevSlide"
                  ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
                >
                <v-btn color="grey-darken-2" class="btn_next" @click="nextSlide"
                  ><v-icon class="btn_next_mdi"
                    >mdi-chevron-right</v-icon
                  ></v-btn
                >
              </div>
            </div>

            <div class="sns2">
              <!--글씨넣을거면여기에-->
              <div class="icon_text_wrap">
              <div class="icon_box">
              <v-icon>mdi-numeric-4-box</v-icon>
              </div>
            코로나 정책
            </div>

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
                  <img
                    class="slide_img_box"
                    :src="image.src"
                    :alt="image.alt"
                  />
                </div>
              </div>
              <div class="prev_next_btn_wrap">
                <v-btn
                  color="grey-darken-2"
                  class="btn_prev"
                  @click="prevSlide2"
                  ><v-icon class="btn_prev_mdi">mdi-chevron-left</v-icon></v-btn
                >
                <v-btn
                  color="grey-darken-2"
                  class="btn_next"
                  @click="nextSlide2"
                  ><v-icon class="btn_next_mdi"
                    >mdi-chevron-right</v-icon
                  ></v-btn
                >
              </div>
            </div>

           

          </div>

    
    
    
      </div>
    
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({

    isDisabled: false,

    images: [
      { src: "./images/print/philtour2.jpg", alt: "난지캠핑장ppt1" },
   


      // 첫번째이미지슬라이드
    ],

    images2: [
    { src: "./images/print/philtour.jpg", alt: "난지캠핑장ppt1" },

      // 두번째이미지슬라이드
    ],

    images3: [
      { src: "./images/card_news/note/1.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/2.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/3.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/4.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/5.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/6.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/7.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/8.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/9.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/10.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/11.jpg", alt: "난지캠핑장ppt1" },
      { src: "./images/card_news/note/12.jpg", alt: "난지캠핑장ppt1" },

      // 세번째이미지슬라이드
    ],

    // images4: [
    // { src: "./images/card_news/event/2.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/event/1.jpg", alt: "난지캠핑장ppt1" },  
    //   { src: "./images/card_news/event/3.jpg", alt: "난지캠핑장ppt1" },

    //   // 네번째이미지슬라이드
    // ],

    // images5: [
    //   { src: "./images/card_news/vertical/1.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/2.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/3.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/4.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/5.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/6.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/7.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/8.jpg", alt: "난지캠핑장ppt1" },
    //   { src: "./images/card_news/vertical/9.jpg", alt: "난지캠핑장ppt1" },

    //   // 5번째이미지슬라이드
    // ],


    dragging: false,
    startX: 0,
    currentIndex: 0,
    currentIndex2: 0,
    currentIndex3: 0,
    // currentIndex4: 0,
    // currentIndex5: 0,
  }),

  methods: {


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

    // handleMouseDown4(event) {
    //   this.dragging = true;
    //   this.startX = event.clientX;
    // },
    // handleMouseMove4(event) {
    //   if (this.dragging) {
    //     const deltaX = event.clientX - this.startX;
    //     if (deltaX > 20) {
    //       // 드래그 거리가 20px 이상일 때
    //       this.prevSlide4();
    //       this.dragging = false; // 드래그 후 재설정
    //     } else if (deltaX < -20) {
    //       // 드래그 거리가 -20px 이상일 때
    //       this.nextSlide4();
    //       this.dragging = false; // 드래그 후 재설정
    //     }
    //   }
    // },
    // handleMouseUp4() {
    //   this.dragging = false;
    // },
    // // 터치 이벤트 핸들러
    // handleTouchStart4(event) {
    //   this.dragging = true;
    //   this.startX = event.touches[0].clientX;
    // },
    // handleTouchMove4(event) {
    //   if (this.dragging) {
    //     const deltaX = event.touches[0].clientX - this.startX;
    //     if (deltaX > 20) {
    //       // 드래그 거리가 20px 이상일 때
    //       this.prevSlide4();
    //       this.dragging = false; // 드래그 후 재설정
    //     } else if (deltaX < -20) {
    //       // 드래그 거리가 -20px 이상일 때
    //       this.nextSlide4();
    //       this.dragging = false; // 드래그 후 재설정
    //     }
    //   }
    // },
    // handleTouchEnd4() {
    //   this.dragging = false;
    // },

    // prevSlide4() {
    //   this.currentIndex4 =
    //     (this.currentIndex4 - 1 + this.images4.length) % this.images4.length;
    // },
    // nextSlide4() {
    //   this.currentIndex4 = (this.currentIndex4 + 1) % this.images4.length;
    // },
    // //여기까지 슬라이드4

    // handleMouseDown5(event) {
    //   this.dragging = true;
    //   this.startX = event.clientX;
    // },
    // handleMouseMove5(event) {
    //   if (this.dragging) {
    //     const deltaX = event.clientX - this.startX;
    //     if (deltaX > 20) {
    //       // 드래그 거리가 20px 이상일 때
    //       this.prevSlide5();
    //       this.dragging = false; // 드래그 후 재설정
    //     } else if (deltaX < -20) {
    //       // 드래그 거리가 -20px 이상일 때
    //       this.nextSlide5();
    //       this.dragging = false; // 드래그 후 재설정
    //     }
    //   }
    // },
    // handleMouseUp5() {
    //   this.dragging = false;
    // },
    // // 터치 이벤트 핸들러
    // handleTouchStart5(event) {
    //   this.dragging = true;
    //   this.startX = event.touches[0].clientX;
    // },
    // handleTouchMove5(event) {
    //   if (this.dragging) {
    //     const deltaX = event.touches[0].clientX - this.startX;
    //     if (deltaX > 20) {
    //       // 드래그 거리가 20px 이상일 때
    //       this.prevSlide5();
    //       this.dragging = false; // 드래그 후 재설정
    //     } else if (deltaX < -20) {
    //       // 드래그 거리가 -20px 이상일 때
    //       this.nextSlide5();
    //       this.dragging = false; // 드래그 후 재설정
    //     }
    //   }
    // },
    // handleTouchEnd5() {
    //   this.dragging = false;
    // },

    // prevSlide5() {
    //   this.currentIndex5 =
    //     (this.currentIndex5 - 1 + this.images5.length) % this.images5.length;
    // },
    // nextSlide5() {
    //   this.currentIndex5 = (this.currentIndex5 + 1) % this.images5.length;
    // },
    //여기까지 슬라이드5

   
  },
};
</script>

<style scoped>
.int1{
  border-radius: 8px;
  overflow: hidden;

}
.int1 img{
width: 100%;
}


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
  .mdi-numeric-1-box::before,
  .mdi-numeric-2-box::before,
  .mdi-numeric-3-box::before,
  .mdi-numeric-4-box::before,
  .mdi-numeric-5-box::before   {
    font-size: 80%;
    color: #797979;
  }
.icon_text_con_box{
  margin: 20px 0 25px;
}
.sns5{
  margin-bottom: -25px;
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
  .mdi-numeric-1-box::before,
  .mdi-numeric-2-box::before,
  .mdi-numeric-3-box::before,
  .mdi-numeric-4-box::before,
  .mdi-numeric-5-box::before   {
    font-size: 80%;
    color: #797979;
    position: relative;
    top: 1px;
  }
.icon_text_con_box{
  margin: 30px 0 0;
}

  .sns1, .sns2, .sns3, .sns4, .sns5{
  margin-bottom: -30px;
}
  #section_portfolio {
    padding: 70px 30px;
    box-sizing: border-box;
  }

  .sub_title {
    margin: 35px 0 10px 0;
    text-align: center;
  }

  /*이미지슬라이드 */
  .sns_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
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

  .sns_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}
</style>