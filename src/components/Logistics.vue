<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人电贸</div>
    </div>
    <div class="logistics">
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" src="../assets/img/up/1.jpg" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">和风手绘古朴釉下彩陶艺小酱碗 点心糕点碟盘</h4>
          <p class="weui-media-box__desc">型号：<span>中号*10</span></p>
        </div>
        <div class="weui-media-box__ft">
          <p class="price">84.5</p>
          <span class="fr">1</span>
        </div>
      </a>

      <div class="info">
        <p>EMS</p>
        <p>快递单号: 1023654756542354</p>
        <p>快递电话: <span>11183</span></p>
      </div>

      <div class="status">
        <ul>
          <li>
            <p> 快件已签收，签收人:组织签收:门卫,感谢您使用中通快递，期待再次为您服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
          <li>
            <p> 快件已签收，签收人:组织签收:门卫,感谢您使用中通快递，期待再次为您服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
          <li>
            <p> 快件已签收，签收人:组织签收:门卫,感谢您使用中通快递，期待再次为您服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
          <li class="on">
            <p> 快件已签收，签收人:组织签收:门卫,感谢您使用中通快递，期待再次为您服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
          <li>
            <p> 快件已签收再服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
          <li>
            <p> 快件已签收，签收人:组织签收:门卫,感谢您件已签收，签收人:组织签收:门卫,感谢您件已签收，签收人:组织签收:门卫,感谢您件已签收，签收人:组织签收:门卫,感谢您使用中通快递，期待再次为您服务！</p>
            <span>2016-10-14 14:58</span>
          </li>
        </ul>
      </div>
    </div> <!-- logistics -->
  </div>
</template>
<script>
  export default {
    name: 'Logistics',
    data () {
      return {
        title: '查看物流'
      }
    }
  }
</script>