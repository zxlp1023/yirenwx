<template>
  <div>
    <div class="backBar">
      <router-link to="Payok" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="cfmOrder">
      <div class="weui-cells addr mt0">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd">
            <i class="iconfont icon-location2"></i>
          </div>
          <div class="weui-cell__bd fz14 p075">
            <p>收货人：<span class="pl10">猫十一</span><span class="pl10 fz15">18046721351</span></p>
            <p class="hui72">收货地址：四川省成都市锦江区 滨江花园3栋 1单元</p>
          </div>
          <!-- <div class="weui-cell__ft"></div> -->
        </a>
      </div>

      <div class="logistics orderDetails">
        <div class="weui-panel__hd">订单号 : 2118193
          <span class="fr red">交易完成</span>
        </div>
        <div class="weui-panel__bd">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="../assets/img/up/1.jpg" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">和风手绘古朴釉下彩陶艺小酱碗 点心糕点碟盘</h4>
              <p class="weui-media-box__desc">型号：
                <span>中号*10</span>
              </p>
            </div>
            <div class="weui-media-box__ft">
              <p class="price">84.5</p>
              <span class="fr">1</span>
            </div>
          </a>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="../assets/img/up/1.jpg" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">和风手绘古朴釉下彩陶艺小酱碗 点心糕点碟盘</h4>
              <p class="weui-media-box__desc">型号：
                <span>中号*10</span>
              </p>
            </div>
            <div class="weui-media-box__ft">
              <p class="price">84.5</p>
              <span class="fr">1</span>
            </div>
          </a>
        </div>
        <div class="weui-panel__ft">
          <p>
            <span class="fz14">商品总额</span>
            <span class="fr price">169.00</span>
          </p>
<!--           <p class="bb1">+ 运费
            <span class="fr price">0.00</span>
          </p> -->
          <p class="text-right fz14 ">
            <span>实际款:</span>
            <span class="price">169.00</span>
          </p>
          <p class="hui94 fr">下单时间：2017-02-21 11:12:31</p>
        </div>
      </div>
    </div> <!-- cfmOrder -->

    <div class="proFoot orderDetails">
      <a href="javascript:;" class=" weui-btn weui-btn_plain-default">删除订单</a>
      <router-link to="OrderConfirm" class="weui-btn weui-btn_primary weui-btn_disabled">再次购买</router-link>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'OrderDetail',
    data () {
      return {
        title: '订单详情'
      }
    }
  }
</script>