<template>
  <div>
    <div class="backBar">
      <router-link to="Wallet" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="withdraw topUp">
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
          <p class="fz14">充值金额</p>
          <div class="weui-cell withdrawNumber">
            <div class="weui-cell__hd">
              <label class="weui-label">¥</label>
            </div>
            <div class="weui-cell__bd">
              <input id="" class="weui-input " type="number" pattern="[0-9]*" placeholder="">
            </div>
          </div>
        </div>
        <div class="col">
          <a href="javascript:;" class="weui-btn weui-btn_warn  ">确认充值</a>
        </div>
        
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        title: '充值'
      }
    }
  }
</script>
<style>

</style>
