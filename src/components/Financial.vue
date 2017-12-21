<template>
  <div>
    <div class="financial">
      <div class="fncHd">
        <div class="backBar">
          <div class="title">金融</div>
        </div>
        <div class="ysd">
          <p>昨天收益(元)</p>
          <span>0.45</span>
        </div>
        <div class="result">
          <div class="resultL">
            <p>总资产(元)</p>
            <span>2,221.42</span>
          </div>
          <div class="resultL resultR">
            <p>累计收益(元)</p>
            <span>192.24</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fncProperty">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <p class="fz14 hui94">可提资产</p>
          <span class="fz16">2200.00</span>
        </div>
        <div class="weui-cell__bd">
            <router-link to="Withdraw" class="weui-btn  weui-btn_primary">提现</router-link>
            <router-link to="TopUp" class="weui-btn  weui-btn_warn">充值</router-link>
        </div>
      </div>
    </div>
    <div class="qst">
      <ol>
        <li>
          关于充值的问题？
          <p class="fz13 hui94">在充值是遇到的各种问题写在这里在充值是遇到的各 种问在充值是遇到的各种问题写在这里题写在这里在充值 是遇到的各种问题写在这里在充值是遇到的各种问题写在 这里在充值是遇到的各种问题写在这里在充值是遇到的各 种问题写在这里</p>
        </li>
        <li>
          关于充值的问题？
          <p class="fz13 hui94">在充值是遇到的各种问题写在这里在充值是遇到的各 种问在充值是遇到的各种问题写在这里题写在这里在充值 是遇到的各种问题写在这里在充值是遇到的各种问题写在 这里在充值是遇到的各种问题写在这里在充值是遇到的各 种问题写在这里</p>
        </li>
      </ol>
    </div>
    <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-home"></i>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link to="Phone" class="weui-tabbar__item ">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-message"></i>
        </div>
        <p class="weui-tabbar__label">电话</p>
      </router-link>
      <router-link to="Financial" class="weui-tabbar__item  weui-bar__item--on">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-money"></i>
        </div>
        <p class="weui-tabbar__label">金融</p>
      </router-link>
      <router-link to="My" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-me"></i>
        </div>
        <p class="weui-tabbar__label">我的</p>
      </router-link>
    </div> <!--footer end-->
  </div>

</template>
<script>
  export default {
    name: 'Financial',
    data () {
      return {
        title: '金融'
      }
    }
  }
</script>
<style scoped>
</style>