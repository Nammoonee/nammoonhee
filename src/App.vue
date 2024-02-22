<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
/*reset처리*/
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
html{
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300 ;
  font-style: normal;
  font-size: 10px;
  line-height: 10px;
}

body, header, main, footer, section, nav, div, h1, h2, h3, p, ul, li, dl, dt, dd, form, fieldset, legend, input, button{
    margin: 0;
    padding: 0
}

ul, li{
    list-style: none
}
a{
    text-decoration: none;
    color: inherit
}

fieldset, img{
    border: none
}
img{
    vertical-align: bottom
}
input, button{
    vertical-align: bottom
}
button{
    cursor: pointer
}

.hide{
    position: absolute;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden;
    margin: -1px;
    text-indent: -9999px;
    border: 0 none !important;
}
hr{
    margin: 0;
}

/* common css */
body{
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 300;
}
h1{
  font-size: 1.5rem;
  font-weight: 800;
}

</style>