<template>
  <div>
    <div class="backBar">
      <router-link to="Product" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="commentsListPro">
      <div class="result">
        <div class="score">
        <span>4.0</span>
        <p>总体评分</p>
        </div>
        <div class="star star-50"></div>
      </div>
      <div class="list">
        <dl>
          <dt>
            <img src="../assets/img/up/1.jpg" alt=""> <span>只＊＊1</span>
          </dt>
          <dd>
            花了一晚上安装好了。试用了一下午，洗牌声音很小，不卡牌，然后盖上盖板又变成漂亮的餐桌。
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="../assets/img/up/1.jpg" alt=""> <span>只＊＊1</span>
          </dt>
          <dd>
            花了一晚上安装好了。试用了一下午，洗牌声音很小，不卡牌，然后盖上盖板又变成漂亮的餐桌，边框上手机槽完美，能充电！花了一晚上安装好了。试用了一下午，洗牌声音很小，不卡牌框上手机槽完美，能充电！
          </dd>
        </dl>
      </div>
    </div> <!-- commentsListPro -->
  </div>
</template>
<script>
  export default {
    name: 'Product-comments',
    data () {
      return {
        title: '评价'
      }
    }
  }
</script>
