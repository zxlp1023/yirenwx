<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="wallet">
      <div class="walletHd">
        <span>余额（元）</span>
        <p>90000</p>
      </div>
      <div class="walletBd">
        <router-link to="TopUp"><img src="../assets/img/icon/topUp.png" alt="充值">充值</router-link>
        <span></span>
        <router-link to="Withdraw" ><img src="../assets/img/icon/withdraw.png" alt="提现">提现</router-link>
      </div>
      <div class="weui-cells">
        <div class="weui-cells__title ">钱包明细</div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <span>充值</span>
            <p>2017-08-12 15:31</p>
          </div>
          <div class="weui-cell__ft">+5000</div>
        </div>
      </div>
    </div> <!-- wallet -->
  </div>
</template>
<script>
  export default {
    name: 'Wallet',
    data () {
      return {
        title: '我的钱包'
      }
    }
  }
</script>
<style>

</style>
