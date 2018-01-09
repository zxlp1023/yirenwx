<template>
  <div>
    <div class="backBar">
      <router-link to="product" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>

    <div class="cfmOrder">
      <div class="weui-cells addr mt0">
        <router-link to="AddressManage" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <i class="iconfont icon-location2"></i>
          </div>
          <div class="weui-cell__bd fz14 p075" v-if="defaultAddr">
            <p>收货人：<span class="pl10">猫十一</span><span class="pl10 fz15">18046721351</span></p>
            <p class="hui72">收货地址：四川省成都市锦江区 滨江花园3栋 1单元</p>
          </div>
          <div class="weui-cell__bd fz14 p075" v-else>
            请填写收货地址
          </div>
          <div class="weui-cell__ft"></div>
        </router-link>
      </div>

  
      <div class="title fz14 ">购买清单</div>
      <div class="weui-cells list mt0">
        <div class="weui-cell" >
          <div class="weui-cell__hd pic">
            <a href="msg-product.html"> <img src="../assets/img/up/1.jpg" alt=""> </a>
          </div>
          <div class="weui-cell__bd">
            <div class="fz15"> <a class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</a> </div>
            <div class="hui94 fz12">型号：<span class="pl10">花朵小罐</span></div>
            <div class="priceControl">
              <span class="price fz17 ">{{price}}</span>
              <div class="weui-count fr">
                <a @click="minusNum"  class="weui-count__btn weui-count__decrease"></a>
                <input class="weui-count__number" type="number"  v-model="num">
                <a @click="addNum" class="weui-count__btn weui-count__increase"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
<!--       <div class="p075 fz15 carriage">
  
        配送费 <span class="fr price">10</span>
  
      </div> -->
  
      <!-- <div class=" p075 fz14 needPay">应付 <span class=" red price pl10 fz17">{{totalPrice}}</span></div> -->
  
    </div>
  
    <!-- cfmOrder -->
  
    <div class="cartFoot cfmOrderFoot">
  
      <div class="weui-cells  fz15">
  
        <div class="weui-cell weui-cell-r">
  
          <div class="weui-cell__bd ">
  
            合计:
  
            <span class=" price fz16 ">{{totalPrice}}</span>
  
          </div>
  
          <div class="weui-cell__hd">
            <router-link to="Pay" class="weui-btn weui-btn_warn btn-radius0">去支付</router-link>
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </div>
</template>
<script>
  export default {
    name: 'OrderConfirm',
    data () {
      return {
        title: '确认订单',
        num: 1,
        price: 20,
        totalPrice: '',
        defaultAddr: [{name:'猫十一',tel:'13566668888',addr:'四川省成都市锦江区 滨江花园3栋 1单元'}],
        shopNow: this.$route.query.shopNow,
        mycart: shopNow

        
        // pros:[{num:1,name:'a1'}]
      }
    },
    created: function (){
    
    },
    methods: {
      totalPrice2: function () {
        this.totalPrice = this.price * this.num
      },
      addNum: function () {
        this.num = parseInt( this.num ) + 1
        this.totalPrice2()
        
        
      },
      minusNum: function () {
        if( this.num <=1 ){  // 数量不能小于1
          return
        }
        this.num = parseInt( this.num ) - 1
        this.totalPrice2()
      }      
      
    },
    mounted: function () {
      this.totalPrice = this.price * this.num
      

      
      console.log( this.mycart)

    },
    computed: {
     
    }
  }
</script>

