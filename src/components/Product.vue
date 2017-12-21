<template>
  <div id="product">
    <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人电贸</div>
    </div>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="../assets/img/up/a1.jpg" />
      </div>
      <!--<div class="swiper-slide"><img src="img/up/banner.jpg" /></div>-->
      <!--<div class="swiper-slide"><img src="img/up/banner.jpg" /></div>-->
    </div>
    <!-- 隐藏状态按钮 -->
    <!--<div class="swiper-pagination"></div>-->
  </div>
  <!--banner end-->

  <div class="proIntro col">
    <div class="fz15b">日式和风手绘陶瓷餐具</div>
    <span class="price">84.5</span>
    <span class="price2">98.5</span>
  </div>
  <div class="shopService  mt10">
    <span><i class="weui-icon-success"></i>安全保证</span>
    <span><i class="weui-icon-success"></i>十天无理由退货</span>
    <span><i class="weui-icon-success"></i>平台推荐</span>
  </div>

  <div class="weui-panel  commentsPro">
    <div class="weui-panel__hd fz15b">评论 <span class="star star-50"></span> <span class="score">5.0</span></div>
    <div class="weui-panel__bd">
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" src="../assets/img/up/a1.jpg" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">勿忘初心</h4>
          <div class="myStar">
            <span class="star star-50"></span> <span>2015-12-08</span> 
          </div>
          <p class="weui-media-box__desc">东西不错，我很喜欢，送来的时候态度也很好，很方 便下次还这样买，挺不错的</p>
        </div>
      </a>
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" src="../assets/img/up/a1.jpg" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">勿忘初心</h4>
          <div class="myStar">
            <span class="star star-50"></span> <span>2015-12-08</span> 
          </div>
          <p class="weui-media-box__desc">东西不错，我很喜欢，送来的时候态度也很好，很方 便下次还这样买，挺不错的</p>
        </div>
      </a>
    </div>
    <div class="weui-panel__ft">
      <router-link to="ProductComments" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部84条评论</div>
        <span class="weui-cell__ft"></span>
      </router-link>
      <!-- <a href="comments-product.html" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部84条评论</div>
        <span class="weui-cell__ft"></span>
      </a> -->
    </div>
  </div> <!-- /commentsPro -->
  <div class="proDetails mt10">
    这里是详情介绍
    <img src="../assets/img/up/banner.jpg" alt="图片详情介绍">
     图片详情介绍
  </div>
  <div class="proFoot">
    <a href="javascript:;" id='show-toast' class="weui-btn weui-btn_primary">加入购物车</a>
    <router-link to="OrderConfirm" class="weui-btn weui-btn_warn">立即购买</router-link>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'Prodoct',
    data () {
      return {
        title: '商品详情'
      }
    }
  }
</script>
