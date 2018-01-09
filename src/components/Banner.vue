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
    },
    created: function () {
      // axios.get('http://211.149.219.18:8818/api/banner/list')
    //   axios({
    //     method:'get',
    //     // baseURL:'/api',
    //     url:'http://211.149.219.18:8818/api/banner/list',
    //     // headers:{'ACCESS_TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MTU0ODk3OTIsInN1YiI6IntcInVzZXJJZFwiOjksXCJsb2dpblRpbWVcIjoxNTE1NDg5NzkyNTMxfSJ9.xX-7eDe8hAGtGo-xGF8Y_c4_IRwdgqiIWK65V2pRkfQ','Accept': 'application/json'}
    // })
    //   .then( res => {
    //     this.banners = res.data
    //     console.log(res.data)
    //   }).catch( error => {
    //     console.log(drror)
    //   })
    }
  }
</script>