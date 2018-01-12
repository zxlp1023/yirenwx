<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="item in banners"> <img :src="imgUrl + item.img" /></div>
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
        token: localStorage.getItem('token'),
        banners: '',
        imgUrl: this.$store.state.imgUrl
      }
    },
    created: function () {

      // console.log(this.token)
      // axios.get('api/banner/list',{params:{token:this.token}})
      axios({
       method:'get',
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
