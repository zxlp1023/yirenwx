<template>
  <div>
    <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="call">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p class="weui-input">12313123 </p>
        </div>
        <div class="weui-cell__hd">
          <label class="weui-label">
            <i class="iconfont icon-tuige red"></i>
          </label>
        </div>
      </div>

      <div class="keyboard">
        <a href="javascript:;">
          <dl>
            <dt>1</dt>
            <dd></dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>2</dt>
            <dd>ABC</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>3</dt>
            <dd>DEF</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>4</dt>
            <dd>GHI</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>5</dt>
            <dd>JKL</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>6</dt>
            <dd>MNO</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>7</dt>
            <dd>PQRS</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>8</dt>
            <dd>TUV</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>9</dt>
            <dd>WXYZ</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>*</dt>
            <dd></dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>0</dt>
            <dd>+</dd>
          </dl>
        </a>
        <a href="javascript:;">
          <dl>
            <dt>#</dt>
            <dd></dd>
          </dl>
        </a>

      </div>
      <router-link to="PhoneSend" class="weui-btn weui-btn_warn">
        <i class="iconfont icon-tel"></i>
      </router-link>
    </div>

    <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-home"></i>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link to="Phone" class="weui-tabbar__item  weui-bar__item--on">
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
  export default {
    name: 'Phone',
    data () {
      return {
        title: '网络电话'
      }
    }
  }
</script>
<style >
  body{background: #ffffff;}
</style>


