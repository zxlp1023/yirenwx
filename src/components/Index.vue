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
      <router-link :to="{path:'/Product', query: {id: item.id}}" v-for="item in pros" :key="item.id"   class="weui-media-box weui-media-box_appmsg" >      
      <!-- <router-link to="{path:'/Product', query: {id: item.id}}" class="weui-media-box weui-media-box_appmsg" v-for="item in pros" :key="item.id" >       -->
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="imgshopUrl + item.image_path" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{ item.title }}</h4>
          <p class="weui-media-box__desc">{{item.subTitle}}</p>
          <div class="item-star">
            <span class="star star-50"></span>
            <span>{{item.start}}</span>
          </div>
          <div class="item-price">
            <span class="price">{{item.id}}</span>
            <span class="buyers">{{item.buyer}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>  <!--pro-index end-->
  <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item  weui-bar__item--on">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-home"></i>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link to="Phone" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-message"></i>
        </div>
        <p class="weui-tabbar__label">会员对讲</p>
      </router-link>
      <router-link to="Financial" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-money"></i>
        </div>
        <p class="weui-tabbar__label">小金库</p>
      </router-link>
      <router-link to="My" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-me"></i>
        </div>
        <p class="weui-tabbar__label">我的中心</p>
      </router-link>
    </div> <!--footer end-->

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
      pros: [],
      login: '',
      imgshopUrl: 'http://cangdu.org:8001/img/'
/*       pros: [
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
      ] */
    }
  },
  mounted: function () {
    axios.get('/api/shopping/restaurants?latitude=31.22967&longitude=121.4762')
    .then(res => {
      // console.log(res.data);
      this.pros=res.data
    })
    .catch( error => {
      console.log(error);
    });

    axios({
      method:'get',
      url:'http://211.149.219.18:8818/user/login?openId=111',
      dataType:'JSONP',
      data:{'ACCESS_TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MTU0ODk3OTIsInN1YiI6IntcInVzZXJJZFwiOjksXCJsb2dpblRpbWVcIjoxNTE1NDg5NzkyNTMxfSJ9.xX-7eDe8hAGtGo-xGF8Y_c4_IRwdgqiIWK65V2pRkfQ','Accept': 'application/json'}
    })
    .then( res => {
      this.login = res.data
    })
    .catch( error =>  {
      console.log( error)
    })
    
  },
  components: { Search, Banner, Foot }
}
</script>





