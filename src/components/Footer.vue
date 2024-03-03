<template>

  <!--footer-->
    <div class="footer_bg">
    <div class="footer_text">
      입사지원자 남문희의<br />이력서와 포트폴리오를 읽어주셔서 감사합니다.
      <div class="x_small_text">
        Copyright 2024. Nammoonhee. All rights reserved.
      </div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>



 
/*모바일 */
@media (max-width: 600px){
  .footer_text {
  text-align: center;
 

  color: #fff;
  font-size: 12px;
  padding: 20px 0 0 0;
margin-top: 50px;
width: 100%;
height: 115px;
font-weight: 200;

}
.footer_bg{
 background: #2b2a40;
  width: calc(100% + 24px);
  margin-left: -12px; /* 너비의 절반을 왼쪽으로 이동하여 가운데 정렬 */
  margin-right: -12px;
 height: calc(115px + 0px);
 margin-bottom: -25px;
  

}

.x_small_text {
  font-size: 10px;
  font-weight: 100;
}
}


/*태블릿 */
@media (min-width: 601px){
  .footer_text {
  text-align: center;
 

  color: #fff;
  font-size: 15px;
  padding: 20px 0 0 0;
margin-top: 50px;
width: 100%;
height: 115px;
font-weight: 200;

}
.footer_bg{
    background: #2b2a40;
    width: calc(100% + 60px);
    margin-left: -30px;
    margin-right: -30px;
    height: calc(145px + 0px);
    margin-bottom: -34px;
  

}

.x_small_text {
  font-size: 12px;
  font-weight: 100;
}
}

</style>