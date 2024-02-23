<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <header id="header">
          <div class="header_contents">
            <h1 class="logo">LOGO</h1>
            <div class="hamburger_wrap">
              <button class="hamburger" @click="drawer">
                <svg                  
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.07143C0 0.478795 0.478795 0 1.07143 0H13.9286C14.5212 0 15 0.478795 15 1.07143C15 1.66406 14.5212 2.14286 13.9286 2.14286H1.07143C0.478795 2.14286 0 1.66406 0 1.07143ZM0 6.42857C0 5.83594 0.478795 5.35714 1.07143 5.35714H13.9286C14.5212 5.35714 15 5.83594 15 6.42857C15 7.0212 14.5212 7.5 13.9286 7.5H1.07143C0.478795 7.5 0 7.0212 0 6.42857ZM15 11.7857C15 12.3783 14.5212 12.8571 13.9286 12.8571H1.07143C0.478795 12.8571 0 12.3783 0 11.7857C0 11.1931 0.478795 10.7143 1.07143 10.7143H13.9286C14.5212 10.7143 15 11.1931 15 11.7857Z"
                    fill="black"
                  />
                </svg>
              </button>
              <transition name="fade">
             
              <ul class="hamburger_drawer" v-if="isDrawerOpen">
                <li><div class="bottom_line">HOME</div></li>
                <li><div class="bottom_line">자기소개</div></li>
                <li><div class="bottom_line">포트폴리오</div></li>
                <li><div class="bottom_line">경력사항</div></li>
                <li><div class="bottom_line">연락처</div></li>
              </ul>
              </transition>
            </div>
          </div>
        </header>
      </v-app-bar>

      <router-view />
     
      <v-btn class="scroll_top" @click="scrollTop">TOP</v-btn>

     
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDrawerOpen: window.innerWidth >= 1024
    };
  },
  methods: {
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
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};

</script>
<style>
/*reset처리*/
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
  position: absolute;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden;
  margin: -1px;
  text-indent: -9999px;
  border: 0 none !important;
}
hr {
  margin: 0;
}


/*모바일사이즈 */
@media (max-width: 600px) {

/* common css */
body {
  font-size: 15px;
  line-height: 25px;
  font-weight: 300;
}
h1 {
  font-size: 15px;
  line-height: 15px;
  font-weight: 800;
}

ul {
  font-size: 12px;
  line-height: 25px;
  font-weight: 300;
}
.v-main {
 width: 100%;
  background: rgb(236, 236, 236);
  margin: auto;
  padding: 25px 12px;
}

.v-btn--variant-elevated{
  box-shadow: none !important;
}


/*header */
.v-toolbar__content,
.v-toolbar__extension {
  align-items: flex-start !important;
 
  margin: auto !important;
  height: 400px !important;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  background: #ffffff00;
  box-shadow: none !important;
}
.v-container {
  padding: 0 !important;
}
#header {
  margin: 25px 12px 0;
  width: 100%;
}

.header_contents {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.logo {
  position: relative;
  top: 0;
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
.hamburger svg{
  width: 15px;
  height: 13px;
}
/*drawer ul태그 */
.hamburger_drawer {
  z-index: 5;  
 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-8px); 
}
.fade-leave, .fade-enter-to {
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
.scroll_top{
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
  background: #797979;
  color: #fff !important;
  font-size: 12px;
 
  
}
}

/*태블릿사이즈 */
@media (min-width: 601px) {
/* common css */
body {
  font-size: 18px;
  line-height: 35px;
 
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
  background: rgb(236, 236, 236);
  margin: auto;
  padding: 25px 12px;
}

.v-btn--variant-elevated{
  box-shadow: none !important;
}


/*header */
.v-toolbar__content,
.v-toolbar__extension {
  align-items: flex-start !important;
 
  margin: auto !important;
  height: 400px !important;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  background: #ffffff00;
  box-shadow: none !important;
}
.v-container {
  padding: 0 !important;
}
#header {
  margin: 25px 12px 0;
  width: 100%;
}

.header_contents {
  display: flex;
  justify-content: space-between;
 align-items: flex-start;
}
.logo {
  position: relative;
  top: 0;
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
.hamburger svg{
  width: 20px;
  height: 17px;
}
.hamburger_drawer {
  z-index: 5;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-8px); 
}
.fade-leave, .fade-enter-to {
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

.scroll_top{
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
  background: #797979;
  color: #fff !important;
  font-size: 12px;
 
  
}
}


/*PC 사이즈 */
@media (min-width: 1024px) {
/* common css */
body {
  font-size: 18px;
  line-height: 35px;
 
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
  background: rgb(236, 236, 236);
  margin: auto;
  padding: 25px 12px;
 
  
}

.v-btn--variant-elevated{
  box-shadow: none !important;
}


/*header */
.v-toolbar__content,
.v-toolbar__extension {
  align-items: flex-start !important;
 
  margin: auto !important;
  height: 400px !important;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  background: #ffffff00;
  box-shadow: none !important;
}
.v-container {
  padding: 0 !important;
}
#header {
  margin: 25px 12px 0;
  width: 100%;
}

.header_contents {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  max-width: 1024px;
    margin: auto;
}
.logo {
  position: relative;
  top: 0;
}

.hamburger_wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.hamburger {
  width: 20px;
  height: 20px;
  display: none;
}
.hamburger svg{
  width: 20px;
  height: 17px;
}
.hamburger_drawer {
  z-index: 5;
    position: relative;
    top: -25px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
 
  transform: translateY(0px); 
}
.fade-leave, .fade-enter-to {
 
  transform: translateY(0px); 
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

.scroll_top{
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
  background: #797979;
  color: #fff !important;
  font-size: 12px;
 
  
}

}
</style>