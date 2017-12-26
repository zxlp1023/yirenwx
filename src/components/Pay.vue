<template>
  <div>
    <div class="backBar">
      <router-link to="OrderConfirm" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>

    <div class="pay">
      <div class="weui-cells weui-cells_checkbox"></div>
      <label for="weuiAgree" class="weui-agree">
        <div class="weui-agree__text">
          我的余额：
          <span class="price">1000</span>
        </div>
        <input id="weuiAgree" type="checkbox" checked="" class="weui-agree__checkbox">
      </label>
  
    
      <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" for="s12">
          <div class="weui-cell__hd">
                <i class="iconfont icon-wechat"></i>          
          </div>
          <div class="weui-cell__bd">
            <p>微信支付</p>       
            <span>推荐安装微信5.0及以上版本的使用</span>
          </div>
          <div class="weui-cell__ft">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s12" >
            <i class="weui-icon-checked"></i>
          </div>
        </label>
      </div>
      <div class="p075 mt20">
        <router-link to="Payok" class="weui-btn weui-btn_warn">立即购买</router-link>
      </div>
    </div>  <!-- /pay -->
  </div>
</template>
<script>
  export default {
    name: 'Prodoct',
    data () {
      return {
        title: '支付订单'
      }
    }
  }
</script>