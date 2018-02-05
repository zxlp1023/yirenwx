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
      <!-- <a href="order-status.html" class="weui-grid ">
        <span>0</span>
        <p class="weui-grid__label">待付款</p>
      </a> -->
      <router-link to="Orders" class="weui-grid ">
        <span>{{totalOrdersIng}}</span>
        <p class="weui-grid__label">待付款</p>
      </router-link> 
     <router-link to="Orders" class="weui-grid ">
        <span>{{totalOrdersToEvaluate}}</span>
        <p class="weui-grid__label">待确认</p>
     </router-link> 
     <router-link to="Orders" class="weui-grid ">
        <span>{{totalOrdersFinish}}</span>
        <p class="weui-grid__label">待评价</p>
     </router-link> 
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
        <p class="weui-tabbar__label">ZJZ对讲</p>
      </router-link>
      <router-link to="Financial" class="weui-tabbar__item ">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-money"></i>
        </div>
        <p class="weui-tabbar__label">小金库</p>
      </router-link>
      <router-link to="My" class="weui-tabbar__item weui-bar__item--on">
        <div class="weui-tabbar__icon">
          <i class="iconfont icon-me"></i>
        </div>
        <p class="weui-tabbar__label">我的中心</p>
      </router-link>
    </div> <!--footer end-->

    <red-packet></red-packet>
    
  </div>
</template>
<script>
import RedPacket from '@/components/RedPacket'
  export default {
    name: 'My',
    data () {
      return {
        title: '我的',
        token: localStorage.getItem("token"),
        totalOrdersIng:0,  // 进行中
        totalOrdersToEvaluate:0,  // 待评价
        totalOrdersFinish:0,  // 已完成
      }
    },
    mounted: function () {
      axios({  // 进行中
        method: "get",
        url: 'api/order/haveInHand?current=1&size=1',
        headers: { ACCESS_TOKEN: this.token }
      })
      .then( res => {
        this.totalOrdersIng = res.data.data.total
      })
      .catch( error => {
      }),
      axios({  // 待评价
        method: "get",
        url: 'api/order/toBeEvaluated?current=1&size=1',
        headers: { ACCESS_TOKEN: this.token }
      })
      .then( res => {
        this.totalOrdersToEvaluate = res.data.data.total
      })
      .catch( error => {
      }),
      axios({  //  已完成
        method: "get",
        url: 'api/order/completed?current=1&size=1',
        headers: { ACCESS_TOKEN: this.token }
      })
      .then( res => {
        this.totalOrdersFinish = res.data.data.total
      })
      .catch( error => {
      })
    },
    components: {RedPacket}
  }
</script>
<style>

</style>
