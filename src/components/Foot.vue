<template>
<div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item" :class="{'weui-bar__item--on':active}">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-home"></i>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link to="Phone" class="weui-tabbar__item ">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-message"></i>
        </div>
        <p class="weui-tabbar__label">ZJZ对讲</p>
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
</template>
<script>

export default {
  data () {
    return {
      // active:true
    }
  }
}
</script>
