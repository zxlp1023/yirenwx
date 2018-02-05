<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <a class="weui-navbar__item weui-bar__item--on" href="#tab1">
         进行中
      </a>
      <a class="weui-navbar__item" href="#tab2">
         待评价
      </a>
      <a class="weui-navbar__item" href="#tab3">
         已完成
      </a>
    </div>
    <div class="weui-tab__bd">
      <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
        <orders-ing></orders-ing>
      </div>
      <div id="tab2" class="weui-tab__bd-item">
        <orders-to-evaluate></orders-to-evaluate>
      </div>
      <div id="tab3" class="weui-tab__bd-item">
        <orders-Finish></orders-Finish>
      </div>
    </div>
  </div>
</template>
<script>
import OrdersIng from '@/components/OrdersIng'
import OrdersToEvaluate from '@/components/OrdersToEvaluate'
import OrdersFinish from '@/components/OrdersFinish'
  export default {
    name:'orders',
    data () {
      return {
        title: '进行中',
        token: localStorage.getItem('token'),
        imgUrl: this.$store.state.imgUrl,
      }
    },
    mounted: function () {
      // console.log( this.imgUrl + '11')
    },
    methods: {
      
    },
    components: {OrdersIng,OrdersToEvaluate,OrdersFinish}
  }
</script>
<style>

</style>
