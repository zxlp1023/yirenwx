<template>
  <div>
<!--     <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div> -->
    <div class="wallet">
      <div class="walletHd">
        <span>余额（元）</span>
        <!-- <p v-if="userInfo.account == null">{{userInfo.account}}</p>
        <p v-else>0</p> -->
        <p>0</p>
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
        title: '我的钱包',
        token: localStorage.getItem('token'),
        userInfo: ''
      }
    },
    mounted: function () {
      axios({
      method: "get",
      url: "api/user/info",
      headers: { ACCESS_TOKEN: this.token }
      })
      .then(res => {
        this.userInfo = res.data.data
        console.log( this.userInfo.account)
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
</script>
<style>

</style>
