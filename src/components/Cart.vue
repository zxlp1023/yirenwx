<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="cart">
      <div class="weui-cell weui-cell_swiped">
        <div class="weui-cell__bd" style="transform: translate3d(0px, 0px, 0px);">
          <div class="weui-cell pl10">
            <div class="weui-cell__hd weui-cells_checkbox">
              <label class=" weui-check__label" for="s1">
                <input type="checkbox" class="weui-check" name="checkbox1" id="s1" >
                <i class="weui-icon-checked"></i>
              </label>
            </div>
            <div class="weui-cell__hd pic">
              <a href="msg-product.html"><img src="../assets/img/up/2.png" alt="" ></a>
            </div>
            <div class="weui-cell__bd">
              <div class="fz15"><a class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</a></div>
              <div class="hui94 fz13">香槟金</div>
              <div class="priceControl">
                <span class="price fz15">35800</span>
                <div class="weui-count">
                  <a class="weui-count__btn weui-count__decrease"></a>
                  <input class="weui-count__number" type="number" value="1">
                  <a class="weui-count__btn weui-count__increase"></a>
                </div>
              </div>
            </div>
            <div class="weui-cell__ft">
            </div>
          </div>
        </div>
        <div class="weui-cell__ft">
          <a class="weui-swiped-btn weui-swiped-btn_warn delete-swipeout" href="javascript:">删除</a>
        </div>
      </div>
      <div class="weui-cell weui-cell_swiped">
        <div class="weui-cell__bd" style="transform: translate3d(0px, 0px, 0px);">
          <div class="weui-cell pl10">
            <div class="weui-cell__hd weui-cells_checkbox">
              <label class=" weui-check__label" for="s2">
                <input type="checkbox" class="weui-check" name="checkbox1" id="s2" >
                <i class="weui-icon-checked"></i>
              </label>
            </div>
            <div class="weui-cell__hd pic">
              <a href="msg-product.html"><img src="../assets/img/up/2.png" alt="" ></a>
            </div>
            <div class="weui-cell__bd">
              <div class="fz15"><a class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</a></div>
              <div class="hui94 fz13">香槟金</div>
              <div class="priceControl">
                <span class="price fz15">35800</span>
                <div class="weui-count">
                  <a class="weui-count__btn weui-count__decrease"></a>
                  <input class="weui-count__number" type="number" value="1">
                  <a class="weui-count__btn weui-count__increase"></a>
                </div>
              </div>
            </div>
            <div class="weui-cell__ft">
            </div>
          </div>
        </div>
        <div class="weui-cell__ft">
          <a class="weui-swiped-btn weui-swiped-btn_warn delete-swipeout" href="javascript:">删除</a>
        </div>
      </div>

    
    </div> <!-- /cart -->
    <div class="cartFoot">
      <div class="weui-cells weui-cells_checkbox fz15">
        <label class="weui-cell weui-check__label " for="s11">
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s11" >
            <i class="weui-icon-checked"></i>全选
          </div>
        </label>
        <div class="weui-cell weui-cell-r">
          <div class="weui-cell__bd ">
            合计:<span class="price ">35800</span>
          </div>
          <div class="weui-cell__hd">
            <router-link to="OrderConfirm" class="weui-btn weui-btn_warn btn-radius0">结算</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Cart',
    data () {
      return {
        title: '购物车'
      }
    }
  }
</script>
<style>

</style>
