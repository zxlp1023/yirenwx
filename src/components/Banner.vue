<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="banner in banners"> <img :src="banner.img" /></div>
    </div>
    <!-- 隐藏状态按钮 -->
    <!--<div class="swiper-pagination"></div>-->
  </div> <!--banner end-->
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {
        banners: [
          {img: '../../src/assets/img/up/banner.jpg'},
          {img: '../../src/assets/img/up/banner.jpg'},
          {img: '../../src/assets/img/up/banner.jpg'}
        ]
      }
    }
  }
</script>