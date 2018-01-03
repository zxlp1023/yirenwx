<template>
  <div>
    <div class="backBar">
      <router-link to="Wallet" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="withdraw">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd">
          <i class="iconfont icon-wechat"></i>
        </div>
        <div class="weui-cell__bd">
          <p>微信</p>
          <span>180 **** 2323</span>
        </div>
        <div class="weui-cell__ft"></div>
      </a>

      <div class="bd">
        <p class="fz14">提现金额</p>
        <div class="weui-cell withdrawNumber">
          <div class="weui-cell__hd">
            <label class="weui-label">¥</label>
          </div>
          <div class="weui-cell__bd">
            <input id="withdraw" class="weui-input " type="number" pattern="[0-9]*" placeholder="" autofocus>
          </div>
        </div>
        <!-- <p class="fz13 hui72 bt1"><span>可提现金额</span> <span id="balance">429.00</span> 元 <span id="allOut" class="fr red">全部提现</span></p> -->
        <div class="weui-cell fz13 hui72 bt1">
          <div id="remind" class="weui-cell__bd">可提现金额<span id="balance" class="pl10">429.00</span> <p class="red">输入金额已超过可提现金额</p></div>
          <div class="weui-cell__hd"><span id="allOut" class="fr red">全部提现</span></div>
        </div>
      </div>
      <div class="col">
        <a href="javascript:;" class="weui-btn weui-btn_warn">提现</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '提现',
    data () {
      return {
        title: '亿人共享'
      }
    }
  }
</script>
<style>

</style>
