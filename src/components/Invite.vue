<template>
  <div class="share">
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
    </div>
    <div class="bg">
      <img src="../assets/img/invite.jpg" alt="邀请好友">
    </div>
    <div class="invite">
      <div class="title">我的邀请</div>
      <div class="intBd">
        <div>
          <p>成功邀请</p>
          <span>10<i>人</i></span>
        </div>
        <div class="dashed"></div>
        <div>
          <p>累计奖励</p>
          <span>10.00<i>元</i></span>
        </div>
      </div>
    </div>
    <div class="qrcode">
      <img src="img/up/qrcode.png" alt="" >
    </div>
    <a href="javascript:;" class="weui-btn">分享二维码邀请好友</a>
    <ol>
      <li>首次推荐有效用户，即可获得5元现金奖励；</li>
      <li>首次推荐有效用户，即可获得5元现金奖励；</li>
      <li>首次推荐有效用户，即可获得5元现金奖励；</li>
    </ol>
  </div> <!-- share -->
</template>
<script>
  export default {
    name: 'Invite',
    data () {
      return {
        title: '邀请好友'
      }
    }
  }
</script>