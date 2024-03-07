<template>
  <v-app>
    <v-main>
      <h1  class="logo" @click="scrollTop" :class="{ hide: isHeaderHidden, font_fff: isScrolledWithinRange }"
>남문희<span class="logo_smile">:)</span></h1>
      <v-app-bar id="header_align"  :class="{ hide: isHeaderHidden }">
        <header id="header">

          <div class="hamburger_wrap">
            <button class="hamburger" @click="drawer">
              <svg  viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path
                  d="M0 1.07143C0 0.478795 0.478795 0 1.07143 0H13.9286C14.5212 0 15 0.478795 15 1.07143C15 1.66406 14.5212 2.14286 13.9286 2.14286H1.07143C0.478795 2.14286 0 1.66406 0 1.07143ZM0 6.42857C0 5.83594 0.478795 5.35714 1.07143 5.35714H13.9286C14.5212 5.35714 15 5.83594 15 6.42857C15 7.0212 14.5212 7.5 13.9286 7.5H1.07143C0.478795 7.5 0 7.0212 0 6.42857ZM15 11.7857C15 12.3783 14.5212 12.8571 13.9286 12.8571H1.07143C0.478795 12.8571 0 12.3783 0 11.7857C0 11.1931 0.478795 10.7143 1.07143 10.7143H13.9286C14.5212 10.7143 15 11.1931 15 11.7857Z"
                  fill="black" />
              </svg>
            </button>
            <transition name="fade">

              <ul class="hamburger_drawer" v-if="isDrawerOpen"  :class="{ 'font_fff':  isScrolledWithinRange   }">
                <li @click="scrollTop">
    <div class="bottom_line"  :class="{ 'bottom_line_fff':  isScrolledWithinRange   }">HOME</div>
</li>
                <li @click="scrollIntroduce">
                  <div class="bottom_line" :class="{ 'bottom_line_fff':  isScrolledWithinRange   }">자기소개</div>
                </li>
                <li @click="scrollPortfolio">
                  <div class="bottom_line" :class="{ 'bottom_line_fff':  isScrolledWithinRange   }">포트폴리오</div>
                </li>
                <li @click="scrollCurrier">
                  <div class="bottom_line" :class="{ 'bottom_line_fff':  isScrolledWithinRange   }">경력사항</div>
                </li>
                <li @click="scrollContact">
                  <div class="bottom_line" :class="{ 'bottom_line_fff':  isScrolledWithinRange   }">연락처</div>
                </li>
              </ul>
            </transition>
          </div>

        </header>
      </v-app-bar>



      <router-view />
      <Introduce />
      <Portfolio />
      <Currier />
      <Contact />
      <Footer />



      <v-btn class="scroll_top" @click="scrollTop"  :class="{ hide: isHeaderHidden }">TOP</v-btn>


      


    </v-main>
  </v-app>
</template>

<script>
import Introduce from './components/Introduce.vue';
import Portfolio from './components/Portfolio.vue';
import Currier from './components/Currier.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Introduce,
    Portfolio,
    Currier,
    Contact,
    Footer
  },

  name: "App",
  data() {
    return {
      isDrawerOpen: window.innerWidth >= 1024,
      isHeaderHidden: false,
    lastScrollTop: 0,
    isScrolledWithinRange: false
    };
  },
  methods: {
    
  
    handleScroll() {
      
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // 스크롤을 아래로 내릴 때
      this.isHeaderHidden = true;
    } else {
      // 스크롤을 위로 올릴 때
      this.isHeaderHidden = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    const scrollPosition = window.scrollY;
    
    // 스크롤 위치가 0에서 300px 사이에 있는지 확인
    this.isScrolledWithinRange = scrollPosition >= 0 && scrollPosition <= window.innerHeight * 0.8;

  },
    scrollIntroduce(){
    const section_intro = document.getElementById('section_intro');
      if (section_intro) {
        section_intro.scrollIntoView({ behavior: 'smooth' });
      }
    },
        scrollPortfolio(){
    const section_portfolio = document.getElementById('section_portfolio');
      if (section_portfolio) {
        section_portfolio.scrollIntoView({ behavior: 'smooth' });
      }
    },
      scrollCurrier(){
    const section_currier = document.getElementById('section_currier');
      if (section_currier) {
        section_currier.scrollIntoView({ behavior: 'smooth' });
      }
    },
          scrollContact(){
    const section_contact = document.getElementById('section_contact');
      if (section_contact) {
        section_contact.scrollIntoView({ behavior: 'smooth' });
      }
    },
    drawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleResize() {
      this.isDrawerOpen = window.innerWidth >= 1024;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  
  window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
};

</script>
<style>
/*reset처리*/
@import url('https://fonts.googleapis.com/css2?family=Dokdo&family=East+Sea+Dokdo&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

html {
  font-family: "Noto Sans KR", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 300;
}

body,
header,
main,
footer,
section,
nav,
div,
h1,
h2,
h3,
p,
ul,
li,
dl,
dt,
dd,
form,
fieldset,
legend,
input,
button {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

fieldset,
img {
  border: none;
}

img {
  vertical-align: bottom;
}

input,
button {
  vertical-align: bottom;
}

button {
  cursor: pointer;
}

.hide {
  opacity:0 !important;
  transition: opacity 0.3s ease;
  text-indent: -9999px;
}

hr {
  margin: 0;
}

.v-card-text {
  letter-spacing: 0 !important;
  padding: 0 !important;
}
/*자기소개-스킬바 */

.v-progress-linear__background{
  opacity: 0.5;
  background: #dbd5ad;
}
.v-progress-linear__determinate, .v-progress-linear__indeterminate{
  background: linear-gradient(to right top, #c3c3ec, #8d8cce 60% ) ;
}


/*header common */
h1 {
  cursor: pointer;
 
  
}

.hamburger_drawer li{
  cursor: pointer;
  /* font-weight: 500; */
}



/*버튼들 컬러 */
.sub_btn{
  background: #8d8cce !important;
}
.v-slide-group__container{
  contain: none;
}
.v-btn {
  letter-spacing: 0;
  font-weight: 300;
 }
 .text-white {
    color: #fff !important;
    background: linear-gradient(45deg, #ff873c, #ffac79 ) !important;
}

.v-chip{
  font-weight: 300;
}
.v-chip:hover{
    background: #797979ec;
  color: #fff;
}
.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay, .v-chip--variant-tonal .v-chip__underlay {
    background: none !important;
    opacity: 0 !important;
   
}


.v-chip--variant-tonal, .v-tab.v-tab.v-btn{
  background: #797979c9;
  color: #fff;
}
.v-tab.v-tab.v-btn:hover{
  background: #797979ec;
  color: #fff;
}



/*아코디언 */
.accordion_shadow{
  border-radius: 7px;
  box-shadow: 3px 3px 9px -6px #797979;
}

.v-expansion-panel__shadow{
  box-shadow: none !important;
}
.v-expansion-panel{
  border-radius: 7px;
}
.v-expansion-panel-title{
 padding: 16px 10px 16px 15px;
 font-size: inherit;
}
.v-expansion-panel-text__wrapper{
  padding: 8px 15px 16px;
}

/*칩메뉴 */
 .v-chip-group .v-chip{
    margin: 0 !important;
  }
  .v-chip-group{
    padding: 0;
  }

/*탭 선택 표시바 */
.v-tab--selected .v-tab__slider {
  opacity: 0;
}

/*폰트관련 공통 */

.font_fff{
  transition: color 0.5s;
  color: #fff;  
}
.strong_font {
  font-weight: 500;
}

.point_color{
  color: #8d8cce ; /*#00bbff */
  font-weight: 500;
}
/*밑줄 */
.bottom_line_fff{
  border-bottom: 1px solid #fff  !important;
}

/*edu bar */
.v-timeline--vertical .v-timeline-divider__before,
.v-timeline--vertical .v-timeline-divider__after {
  width: 1px;
}

.v-timeline--horizontal .v-timeline-divider__before,
.v-timeline--horizontal .v-timeline-divider__after {
  height: 1px;
}


/*텍스트 정렬 */
.align_justify{
  text-align: justify;
}



/*모바일사이즈 */
@media (max-width: 600px) {
  /*패럴록스 */

  

  /* common css */
  body,
  .v-card-text {
    font-size: 15px !important;
    line-height: 25px !important;
    font-weight: 300 !important;
  }

  .v-card .v-card-text {
    line-height: 25px;
  }

   /*칩 메뉴 */
  .v-slide-group__content{
    
    gap: 10px;
  }



  /*포트폴리오-슬라이드버튼 */
.prev_next_btn_wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;      
    top: -32px;
    gap: 10px;
    margin-right: 10px;    
    opacity: 0.4;
    height: 25px;
}
  .btn_prev ,.btn_next{
    width: 25px !important;
    height: 25px !important;
    border-radius: 50%;
    min-width: 25px !important;
    padding: 0 !important;
   
   
  }
  .btn_prev_mdi, .btn_next_mdi{
    font-size: 20px !important;
    
 
  }

  /*v-chip탭 */

  .v-chip.v-chip--size-default {
    --v-chip-height: 30px;
    padding: 0 20px;
    font-size: 15px;

  }

 




  h1 {
    font-size: 15px;
    line-height: 15px;
    font-weight: 800;
  }

  h2 {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 25px;

  }

  ul {
    font-size: 12px;
    line-height: 25px;
    font-weight: 300;
  }

  .v-main {
    width: 100%;
    /* background: #eceefb57; */
    margin: 0 auto;
     padding: 0;
   
 
  }

  .v-btn--variant-elevated {
    box-shadow: none !important;
  }

  .small_text {
    font-size: 12px;
  }



  /*모바일 header */


  .v-toolbar__content,
  .v-toolbar__extension {
    align-items: flex-start !important;

    margin: auto !important;
    height: auto !important;
  }

  .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    background: #ffffff00;
    box-shadow: none !important;
    width: 80px !important;
  }

  .v-container {
    padding: 0 !important;
  }

  #header {
    margin: 25px 12px 0;
    width: 100%;

  }

  #header_align {
    right: 0 !important;
    left: auto !important;
  }



  .logo {
    position: fixed;
    top: 25px;
    left: 12px;
    z-index: 5;
  }

  .logo_smile {
    font-family: "Dokdo", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    padding-left: 4px;
  }

  .hamburger_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .hamburger {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger svg {
    width: 15px;
    height: 13px;
  }

  /*drawer ul태그 */
  .hamburger_drawer {
    z-index: 5;

  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  .fade-leave,
  .fade-enter-to {
    opacity: 1;
    transform: translateY(-5px);
  }

  .hamburger_drawer li {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-top: 21px;
  }

  .bottom_line {
    height: 25px;
    display: flex;
    border-bottom: 1px solid #797979;
    align-items: center;
  }
  

  .scroll_top {
    position: fixed;
    z-index: 50;
    bottom: 25px;
    right: 12px;
    letter-spacing: 0 !important;
    width: 40px !important;
    min-width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    opacity: 0.4;
    background: #8d8cce;
    color: #fff !important;
    font-size: 12px;
  }

  /*학력/교육 bar */
  .v-timeline--vertical.v-timeline--justify-auto {
    grid-template-columns: 0 min-content auto;
  }

  .v-timeline--vertical.v-timeline {
    row-gap: 25px;
  }

  .v-timeline-divider {
    top: -22px;
  }

  .v-timeline--vertical .v-timeline-divider__before,
  .v-timeline--vertical .v-timeline-divider__after {
    width: 1px;
  }
}

/*태블릿사이즈 */
@media (min-width: 601px) {

  /*아코디언 */
  .v-expansion-panel-text__wrapper{
  padding: 8px 25px 16px;
}
.v-expansion-panel-title{
 padding: 16px 16px 16px 25px;
 font-size: inherit;
}

  
  /*포트폴리오-슬라이드버튼 */
.prev_next_btn_wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;      
    top: -40px;
    gap: 15px;
    margin-right: 13px;    
    opacity: 0.4;
    height: 35px;
}
  .btn_prev ,.btn_next{
    width: 30px !important;
    height: 30px !important;
    border-radius: 50%;
    min-width: 30px !important;
    padding: 0 !important;
   
   
  }
  .btn_prev_mdi, .btn_next_mdi{
    font-size: 25px !important;
    
 
  }

  /*v-chip탭 */
  

  .v-chip.v-chip--size-default {
    --v-chip-height: 35px;
    padding: 0 20px;
    font-size: 18px;

  }
  .v-slide-group__content:first-of-type{
    justify-content: center;
  }
  .v-slide-group__content{
    
    gap: 15px;
  }


  /* common css */

  body,
  .v-card-text {
    font-size: 18px !important;
    line-height: 35px !important;
    font-weight: 300 !important;
    letter-spacing: 0 !important;

  }

  .v-card .v-card-text {
    line-height: 35px !important;
  }

  h1 {
    font-size: 18px;
    line-height: 18px;

  }

  h2 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 35px;
  }

  ul {
    font-size: 15px;
    line-height: 25px;

  }

  .v-main {
    width: 100%;
    /* background: #eceefb57; */
    margin: 0 auto;
     padding: 0;
  
  }

  .v-btn--variant-elevated {
    box-shadow: none !important;
  }


  /*header */
  .v-toolbar__content,
  .v-toolbar__extension {
    align-items: flex-start !important;

    margin: auto !important;
    height: auto !important;
  }

  .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    background: #ffffff00;
    box-shadow: none !important;
    width: 115px !important;
  }

  .v-container {
    padding: 0 !important;
  }

  #header {
    margin: 35px 30px 0 0;
    width: 100%;
  }

  #header_align {
    right: 0 !important;
    left: auto !important;
  }


  .logo {
    position: fixed;
    top: 35px;
    left: 30px;
    z-index: 5;
  }

  .logo_smile {
    font-family: "Dokdo", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    padding: 0 0 2px 5px;

  }

  .hamburger_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .hamburger {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger svg {
    width: 20px;
    height: 17px;
  }

  .hamburger_drawer {
    z-index: 5;

  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  .fade-leave,
  .fade-enter-to {
    opacity: 1;
    transform: translateY(-5px);
  }

  .hamburger_drawer li {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-top: 21px;
  }

  .bottom_line {
    height: 25px;
    display: flex;
    border-bottom: 1px solid #797979;
    align-items: center;
  }

  .scroll_top {
    position: fixed;
    z-index: 50;
    bottom: 35px;
    right: 30px;
    letter-spacing: 0 !important;
    width: 40px !important;
    min-width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    opacity: 0.4;
    background: #8d8cce;
    color: #fff !important;
    font-size: 12px;


  }

  .v-timeline--vertical.v-timeline {
    row-gap: 35px;
  }

  /*학력/교육 bar */
  .v-timeline--vertical.v-timeline--justify-auto {
    grid-template-columns: 0 min-content auto;
  }

  .v-timeline--vertical.v-timeline {
    row-gap: 25px;
    margin-top: 22px;
  }

  .v-timeline-divider {
    top: -33px;
  }

  .small_text {
    font-size: 15px;
    line-height: 25px;
  }
}

/*태블릿사이즈 반응형추가 */

@media (min-width: 820px) {

  .v-timeline--horizontal.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {

    padding-block-start: 0px;
  }

  .v-timeline-divider {
    top: -25px;
  }

  .v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-divider__after {
    --v-timeline-line-size-offset: 50%;
  }

}

/*vue기본설정삭제 */
@media (min-width: 960px) {
  .v-container {
    width: 100%;
    max-width: 1080px;
  }
}

/*태블릿~PC 사이즈 반응형추가 */

@media (min-width: 1000px) {
  /*칩 메뉴 */
  .v-slide-group__content{
    justify-content: center !important;
    gap: 15px;
  }
}


/*PC 사이즈(반응형헤더추가) */
@media (min-width: 1024px) and (max-width: 1098px){






  /*아코디언 */
  .v-expansion-panels{
   margin: 35px 0 0;
  width: 100%;
}






  /* pc header */


  #header {
    margin: 5px 0 0;
    width: 100%;
  }

  #header_align {
  
    margin: 0 30px 0 0;
  }
  .hamburger {
 
    display: none;
  }

  .logo {
    position: fixed;
    top: 35px;
    left: 30px;
    z-index: 50;
  }



   .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }

  .fade-enter,
  .fade-leave-to {

    transform: translateY(0px);
  }

  .fade-leave,
  .fade-enter-to {

    transform: translateY(0px);
  }
  





  .v-main {
    width: 100%;
     /* background: #eceefb57; */
    margin: 0 auto;
     padding: 0;



  }

   .scroll_top {

right: 30px;
bottom: 35px;
}


}

/*PC 사이즈 */


@media (min-width: 1099px) {
/*패럴록스 */
  /* .v-img__img, .v-img__picture, .v-img__gradient, .v-img__placeholder, .v-img__error{
    width: 80%  !important;
    height: 56% !important;

  } */

  /* common css */
  body,
  .v-card-text {
    font-size: 18px;
    line-height: 35px;
    font-weight: 300;
    letter-spacing: 0;

  }

  h1 {
    font-size: 18px;
    line-height: 18px;

  }

  ul {
    font-size: 15px;
    line-height: 25px;

  }

  .v-main {
    width: 100%;
     /* background: #eceefb57; */
    margin: 0 auto;
    padding: 0;
 


  }

  .v-btn--variant-elevated {
    box-shadow: none !important;
  }



  /* pc header */
  .v-toolbar__content,
  .v-toolbar__extension {
    align-items: flex-start !important;

    margin: auto !important;
    height: auto !important;
  }

  .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    background: #ffffff00;
    box-shadow: none !important;
    width: 70px !important;
  }

  .v-container {
    padding: 0 !important;
  }

#header {
    margin: 5px 0 0;
    width: 100%;
  }

  .header_contents {
    display: flex;

    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row-reverse;

    max-width: 1024px;
    margin: auto;
  }

  #header_align {

   right: calc(50% - 514px) !important;
  }


  
 .scroll_top {

left: calc(50% + 473px) !important ;
bottom: 35px
}

  .logo {
    position: fixed;
    top: 35px;
    left: calc(50% - 512px);
    z-index: 50;
   
  }



  .hamburger {
 
    display: none;
  }

 
  




 

  .scroll_top {
    position: fixed;
    z-index: 50;
    bottom: 25px;
    right: 12px;    
    font-size: 12px;
  }
  /*아코디언 */
  .v-expansion-panels{
  margin: auto;
  width: 1024px;
}


}




</style>