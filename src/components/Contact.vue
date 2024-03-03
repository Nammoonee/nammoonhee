<template>
<v-container>
  <section id="section_contact">
  <h2>
    연락처
  </h2>

<div class="contact_btn_wrap">
    <div>
      <div class="strong_font">전화번호</div>
       <div class="call_wrap">
      <div>010-4342-4356</div>
      <v-btn class="call_btn">
        
        <div class="icon_box">
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.79701 0.865598C5.52632 0.211721 4.81268 -0.136311 4.13068 0.0500092L1.03706 0.893722C0.425372 1.06246 0 1.61791 0 2.25069C0 10.948 7.05203 18 15.7493 18C16.3821 18 16.9375 17.5746 17.1063 16.9629L17.95 13.8693C18.1363 13.1873 17.7883 12.4737 17.1344 12.203L13.7595 10.7968C13.1865 10.5578 12.5221 10.723 12.1319 11.2046L10.7116 12.9377C8.23675 11.7671 6.23293 9.76325 5.06228 7.28836L6.7954 5.87163C7.27702 5.4779 7.44225 4.81699 7.2032 4.24397L5.79701 0.869114V0.865598Z" fill="#214016"/>
  </svg>
        </div>
        
   
  
      </v-btn>
       </div>
    </div>
  
  
     <div class="email_wrap">
      <div class="strong_font">이메일</div>
       <div class="call_wrap">
      <div>bimil323@naver.com</div>
      <v-btn class="mail_btn">
        
        <div class="icon_box">
        <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 0C0.671875 0 0 0.671875 0 1.5C0 1.97187 0.221875 2.41562 0.6 2.7L7.4 7.8C7.75625 8.06563 8.24375 8.06563 8.6 7.8L15.4 2.7C15.7781 2.41562 16 1.97187 16 1.5C16 0.671875 15.3281 0 14.5 0H1.5ZM0 3.5V10C0 11.1031 0.896875 12 2 12H14C15.1031 12 16 11.1031 16 10V3.5L9.2 8.6C8.4875 9.13438 7.5125 9.13438 6.8 8.6L0 3.5Z" fill="white"/>
  </svg>
  
        </div>
        
   
  
      </v-btn>
       </div>
    </div>
</div>

</section>
</v-container>

  

  





</template>

<script>
export default {

}
</script>

<style scoped>
#section_contact{
  height: 50vh;
}
/*모바일 */

@media (max-width: 600px) {





  h2{
    margin-top: 50px;
  }
  .contact_btn_wrap{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

/*통화, 메일버튼 */
.call_wrap{
  display: flex;
  align-items: center;
}
.call_btn, .mail_btn{
  border-radius: 50% !important;
  min-width: 25px !important;
  padding: 0 !important;
 
  width: 25px !important;
  height: 25px !important;
  margin-left: 10px;
    display: flex;
  align-items: center;
}

.call_btn{
background: #63AF48;
}


.mail_btn{
background: #347DC6;
}
.icon_box{
  width: 13px;
  height: 13px;
      display: flex;
    justify-content: center;
    align-items: center;
}
.icon_box svg{
  width: 100%;
}

}


/*태블릿 */
@media (min-width: 601px) {
  h2{
    margin-top: 60px;
  }

  
/*통화, 메일버튼 */
.call_wrap{
  display: flex;
  align-items: center;
}
.call_btn, .mail_btn{
  border-radius: 50% !important;
  min-width: 30px !important;
  padding: 0 !important;
 
  width: 30px !important;
  height: 30px !important;
  margin-left: 12px;
    display: flex;
  align-items: center;
}

.call_btn{
background: #63AF48;
}


.mail_btn{
background: #347DC6;
}
.icon_box{
  width: 15px;
  height: 15px;
      display: flex;
    justify-content: center;
    align-items: center;
}
.icon_box svg{
  width: 100%;
}

 .contact_btn_wrap{
    display: flex;   
    gap: 60px;
    justify-content: space-evenly;
  }
  


  .email_wrap::before{
    content: '';
    display: block;
    width: 1px;
    height: 70px;
    background: #7979795b;

    position: absolute;
    left: 50%;
    right: 50%;

  }

}

</style>