<template>

  <!-- <div class="swiper-container">

    <div class="swiper-wrapper">

      <div class="swiper-slide" v-for="item in banners" :key="item.id">
        <img :src="imgUrl + item.img" />
      </div>
      <div class="swiper-slide" ><img src="../../src/assets/img/up/banner.jpg" alt=""></div>
    </div>

    <div class="swiper-pagination"></div>
  </div>  -->

  <div class="banner">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="item in banners" :key="item.id">
        <img :src="imgUrl + item.img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

  export default {
    name: 'banner',
    data () {
      return {
        token: localStorage.getItem('token'),
        banners: '',
        imgUrl: this.$store.state.imgUrl,
        // autoPlay:false  //自动播放
      }
    },
    mounted: function () {
      axios({
       method:'get',
      //  url:'api/banner/list',
       url:'api/banner/list',
       headers: {'ACCESS_TOKEN': this.token}
      })
      .then( res => {
        // console.log(res.data)
        this.banners = res.data.data
      })
      .catch( error => {
        console.log(error)
      })
    }
  }
</script>
<style scoped>
.banner{ height: 175px; }
</style>

