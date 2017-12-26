<template>
  <div>
    <div class="backBar">
      <router-link to="OrderConfirm" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="pay">
      <div class="payOk">
        <i class="iconfont icon-success red"></i>
        <p>支付成功</p>
        <router-link to="OrderDetail" class="weui-btn weui-btn_warn">查看订单</router-link>
      </div>
    </div>  <!-- /pay -->
  </div>
</template>
<script>
  export default {
    name: 'Payok',
    data () {
      return {
        title: '支付成功'
      }
    }
  }
</script>