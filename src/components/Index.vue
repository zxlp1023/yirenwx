<template>
  <div>
    <div class="header">
      <div class="backBar">
        <div class="title" v-text="title">亿人共享</div>
      </div>
      <!-- 搜索栏 -->
      <search></search>
  </div> <!--/header-->
  <banner></banner>
  <div class="weui-panel pro-index">
    <div class="weui-panel__bd">
      <router-link to="Product" class="weui-media-box weui-media-box_appmsg" v-for="i in pros" :key="i.id">      
      <!-- <a href="msg-product.html" class="weui-media-box weui-media-box_appmsg" v-for="i in pros"> -->
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="i.img" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{ i.title }}</h4>
          <p class="weui-media-box__desc">{{i.subTitle}}</p>
          <div class="item-star">
            <span class="star star-50"></span>
            <span>{{i.start}}</span>
          </div>
          <div class="item-price">
            <span class="price">{{i.price}}</span>
            <span class="buyers">{{i.buyer}}</span>
          </div>
        </div>
      <!-- </a> -->
      </router-link>
    </div>
  </div>  <!--pro-index end-->
  <foot></foot>

  </div>
</template>
<script>
import Search from '@/components/Search'
import Banner from '@/components/Banner'
import Foot from '@/components/Foot'
export default {
  name: 'Index',
  data () {
    return {
      title: '亿人共享',
      pros: [
        {
          id: 1,
          img: '../../src/assets/img/up/2.jpg',
          title: 'NEW新款上新',
          subTitle: '年度新款等您来抢2',
          start: '4.8',
          price: '111.00',
          buyer: '2311',
          url: 'url'
        },
        {
          id: 2,
          img: '../../src/assets/img/up/2.jpg',
          title: 'NEW新款上新',
          subTitle: '年度新款等您来抢1',
          start: '4.8',
          price: '1919.00',
          buyer: '123',
          url: 'url'
        }
      ]
    }
  },
  mounted: function () {
    
  },
  components: { Search, Banner, Foot }
}
</script>





