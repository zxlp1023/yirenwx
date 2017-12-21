<template>
  <div class="callAwait">
    <div class="backBar">
      <!-- <i class="iconfont icon-back"></i> -->
      <div class="title" v-text="title">亿人电贸</div>
    </div>
    <div class="person">
      <img src="../assets/img/up/head.png" alt="">
      <span>小丸子</span>
      <p>对方邀请电话通讯</p>
    </div>
    <footer>
      <div>
        <router-link to="Phone" class="weui-btn weui-btn_warn">
          <i class="iconfont icon-tel"></i>
        </router-link>
        <p>取消</p>
      </div>
      <div>
        <router-link to="Phone" class="weui-btn weui-btn_success">
          <i class="iconfont icon-tel"></i>
        </router-link>
        <p>接听</p>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'PhoneAgree',
    data () {
      return {
        title: '网络电话'
      }
    }
  }
</script>
<style scoped>
  body{background: #000000;}
</style>