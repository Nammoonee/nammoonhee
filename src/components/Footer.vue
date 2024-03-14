<template>

  <!--footer-->
  <v-main>
      <div class="footer_bg">
      <div class="footer_text">
        입사지원자 남문희의<br />이력서와 포트폴리오를 읽어주셔서 감사합니다.
        <div class="x_small_text">
          Copyright 2024. Nammoonhee. All rights reserved.
        </div>
      </div>
    </div>
  </v-main>

</template>

<script>
export default {};
</script>

<style scoped>
.v-main{
 background: #373735;
 padding: 0 !important;
}


 
/*모바일 */

@media (max-width: 600px){
  .footer_bg{
    padding: 25px 0;
    box-sizing: border-box;
  }
  .footer_text {
  text-align: center;
 

  color: #ffffffc0;
  font-size: 12px;

font-weight: 200;

}

.x_small_text {
  font-size: 10px;
  font-weight: 100;
}
}


/*태블릿 */
@media (min-width: 601px){
    .footer_bg{
    padding: 35px 0;
    box-sizing: border-box;
  }
  .footer_text {
  text-align: center;
 

  color: #ffffffc0;
  font-size: 15px;

font-weight: 200;

}

.x_small_text {
  font-size: 12px;
  font-weight: 100;
}





 

}



</style>