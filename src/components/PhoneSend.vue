<template>
  <div class="callAwait">
    <div class="backBar">
      <!-- <i class="iconfont icon-back"></i> -->
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="person">
      <img src="../assets/img/up/head.png" alt="">
      <span>小丸子</span>
      <p>正在等待对方接受邀请</p>
    </div>
    <footer>
      <div>
        <router-link to="PhoneAgree" class="weui-btn weui-btn_warn">
        <i class="iconfont icon-tel"></i>
      </router-link>
        <p>取消</p>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'PhoneSend',
    data () {
      return {
        title: '网络电话'
      }
    }
  }
</script>
<style  >
  body{background: #000 !important;}
</style>
