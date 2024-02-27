<template>
  <v-container>
    <h2>
        포트폴리오
    </h2>
    <img style="width: 100px; height: 100px;" src="./images/pofolgif/nanji_ppt_1.gif" alt="">
    <div class="strong_font">포트폴리오용 사이트제작</div>

    <v-chip-group mandatory v-model="selectedTab" align-with-title>
      <v-chip @click="changeTab(0)" :class="{ active: selectedTab === 0 }">난지캠핑장 예약앱</v-chip>
      <v-chip @click="changeTab(1)" :class="{ active: selectedTab === 1 }">이력서 홈페이지</v-chip>
      <v-chip @click="changeTab(2)" :class="{ active: selectedTab === 2 }">컴포즈커피 팀과제</v-chip>   
    </v-chip-group>

    <div v-if="selectedTab === 0 || selectedTab === null">
      <div class="slider">
    <div class="slide" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt">
    </div>
  </div>
  

      







</div>

<div v-else-if="selectedTab === 1">

  2
  </div>

  <div v-else-if="selectedTab === 2">

3
</div>





  </v-container>


</template>

<script>
export default {
  data: () => ({ 
    selectedTab: 0, // 초기값을 0으로 설정
    images: [
        { src: '../assets/logo.png', alt: '난지캠핑장ppt1' },
        { src: '../assets/logo.png', alt: '난지캠핑장ppt2' },
        // Add more image objects as needed
      ]


      
  }),
  methods: {
    changeTab(index) {
      this.selectedTab = index;
    },
  }
  

}
</script>

<style scoped>
.v-row{
  margin: 0 !important;
}
.slider {
  display: flex;
  overflow-x: auto;
}

.slide {
  flex: 0 0 auto;
  width: 100%; /* Adjust as needed */
  margin-right: 10px; /* Adjust as needed */
}

.slide img {
  width: 100%;
  height: auto;
}

@media (max-width: 600px) {

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
    background: #797979;
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

}


@media (min-width: 601px) {
  
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
    background: #797979;
    border-radius: 30px;
    height: 35px;
    min-width: 135px
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


}


</style>