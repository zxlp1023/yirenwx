<template>
  <div>
    <div class="account">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <img src="../assets/img/up/head.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <span class="f17">小丸子</span>
          <p class="fz13">网络电话：21301910</p>
        </div>
      </div>
    </div> <!-- account -->
    <div class="weui-grids  ">
      <a href="order-status.html" class="weui-grid ">
        <span>0</span>
        <p class="weui-grid__label">待付款</p>
      </a>
      <a href="order-status.html" class="weui-grid ">
        <span>0</span>
        <p class="weui-grid__label">待确认</p>
      </a>
      <a href="order-status.html" class="weui-grid ">
        <span>0</span>
        <p class="weui-grid__label">待评价</p>
      </a>
    </div>
    <div class="weui-cells quickNav">
      <router-link to="Wallet" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/img/icon/star.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <p>我的钱包</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link to="Invite" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/img/icon/headlines.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <p>邀请好友</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link to="AddressManage" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/img/icon/label.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <p>收货地址</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link to="Logistics" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/img/icon/flashlight.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <p>物流状态</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
      <router-link to="Cart" class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/img/icon/cart.png" alt="">
        </div>
        <div class="weui-cell__bd">
          <p>购物车</p>
        </div>
        <div class="weui-cell__ft"></div>
      </router-link>
    </div>  <!-- quickNav -->
    <div class="redPacket">
        <img src="../assets/img/redPacket0.png" alt="">
        <div>
          <span>距离红包开启</span>
          <p>
            <!-- <span id="t_d">00</span> -->
            <span id="t_h">00</span>
            <span id="t_m">00</span>
            <span id="t_s">00</span>
          </p>
        </div>
    </div>
    <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-home"></i>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link to="Phone" class="weui-tabbar__item ">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-message"></i>
        </div>
        <p class="weui-tabbar__label">电话</p>
      </router-link>
      <router-link to="Financial" class="weui-tabbar__item ">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-money"></i>
        </div>
        <p class="weui-tabbar__label">金融</p>
      </router-link>
      <router-link to="My" class="weui-tabbar__item weui-bar__item--on">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-me"></i>
        </div>
        <p class="weui-tabbar__label">我的</p>
      </router-link>
    </div> <!--footer end-->

    <!-- 红包领取界面 -->
    <div id="dialog">
      <div class="bg"></div>
      <div class="cnt">
        <img id="a1" src="../assets/img/redPacket1.png" alt="">
        <i  class="cls iconfont icon-close"></i>
      </div>
      <div class="getRedPacket">
        <img src="../assets/img/redPacket2.png" alt="">
        <div class="msg">
          <span>恭喜您获得</span>
          <div>0.43</div>
          <p>可在“我的钱包”中查看</p>

        </div>
        <i  class="cls iconfont icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'My',
    data () {
      return {
        title: '我的'
      }
    }
  }
</script>
<style>

</style>
