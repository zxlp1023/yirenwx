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
  <product-list></product-list>
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
import ProductList from '@/components/ProductList'
export default {
  name: 'Index',
  data () {
    return {
      title: '亿人共享',
    }
  },
  mounted: function () {
    axios.post('api/user/login?openId=111')  //请求登陆
    .then( res => {
      // console.log(res)
      if (res.data.code < 2000) { // code小于2000登陆成功, 寸id和token到全局变量
        // this.userInfo = {id:res.data.data.access_id,token:res.data.data.access_token}
        // localStorage.setItem('userid') = res.data.data.access_id
        this.uid = res.data.data.access_id
        this.token = res.data.data.access_token
        localStorage.setItem('uid',this.uid) 
        // localStorage.setItem('uid',JSON.stringify(this.uid)) 
        localStorage.setItem('token',this.token) 
        // console.log(this.uid) 
      }
    })
    .catch( error =>  {
      console.log( error)
    })
      
  },
  components: { Search, Banner,ProductList }
}

/* 
    "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MTU1NjcwODEsInN1YiI6IntcInVzZXJJZFwiOjksXCJsb2dpblRpbWVcIjoxNTE1NTY3MDgwOTkxfSJ9.R2FO0srt_te4HrIQkHrjSsJyvS1lHCLtxNothKoEJAU"

        "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MTU1NjcwODEsInN1YiI6IntcInVzZXJJZFwiOjksXCJsb2dpblRpbWVcIjoxNTE1NTY3MDgwOTkxfSJ9.R2FO0srt_te4HrIQkHrjSsJyvS1lHCLtxNothKoEJAU"

*/
</script>





