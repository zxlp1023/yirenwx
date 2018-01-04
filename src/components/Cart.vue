<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="cart">
      <mt-cell-swipe v-for="(item,index) in mycart" :key="item.pro.id" title="" :right="[{content: '删除',style: { background: '#f43b3e', color: '#fff' },
          handler: () => deletePro(index) }]">
        <div class="weui-cell weui-cell_swiped">
          <div class="weui-cell__bd" style="transform: translate3d(0px, 0px, 0px);">
            <div class="weui-cell pl10">
              <div class="weui-cell__hd weui-cells_checkbox">
                <label class=" weui-check__label" :for="item.pro.id" @click="ischecked(item.pro.id)">
                  <input type="checkbox" class="weui-check " name="checkbox1" :id="item.pro.id"  checked>
                  <i class="weui-icon-checked"></i>
                </label>
              </div>
              <div class="weui-cell__hd pic">
                <!-- <a href="msg-product.html"><img src="../assets/img/up/2.png" alt="" ></a> -->
                <img src="../assets/img/up/2.png" alt="" >
              </div>
              <div class="weui-cell__bd">
                <!-- <div class="fz15"><a class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</a></div> -->
                <div class="fz15"><div class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</div></div>
                <div class="hui94 fz13">香槟金</div>
                <div class="priceControl">
                  <span class="price fz15">{{item.pro.id}}</span>
                  <div class="weui-count">
                    <span @click="minusNum({id:item.pro.id})"  class="weui-count__btn weui-count__decrease"></span>
                    <input class="weui-count__number" type="number"  v-model="item.num">
                    <span @click="addNum({id:item.pro.id})" class="weui-count__btn weui-count__increase"></span>
                  </div>
                </div>
              </div>
              <div class="weui-cell__ft">
              </div>
            </div>
          </div>
    <!--       <div class="weui-cell__ft">
            <a class="weui-swiped-btn weui-swiped-btn_warn delete-swipeout" href="javascript:">删除</a>
          </div> -->
        </div>
      </mt-cell-swipe>

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
            合计:<span class="price ">{{totalPrice}}</span>
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
        title: '购物车',
        num: 1,
        mycart: ''
      }
    },
    created: function () {
      
    },
    methods: {
      addNum: function (e) {
        // 从缓存中获取购物车信息,
        // 循环输出信息
        // 对比id是否相同, 给num+1
        // 把结果mycart赋值给变量mycart
        // 把结果mycart存到缓存
        let that = this
        let mycart = JSON.parse(localStorage.getItem('mycart')) // 获取缓存中的购物车信息
        // console.log(mycart)
        // 添加数量
        for(let i =0; i < mycart.length; i++ ) {
         if( mycart[i].pro.id == e.id ){
           mycart[i].num += 1
          //  console.log(mycart[i].num) 
           break
          }
        }
        that.mycart = mycart
        localStorage.setItem('mycart',JSON.stringify(mycart))
        // console.log(e.id) 
      },
      minusNum: function (e) {
        let that = this
        let mycart = JSON.parse(localStorage.getItem('mycart')) // 获取缓存中的购物车信息
        for(let i=0; i<mycart.length; i++){
          if( mycart[i].pro.id == e.id ){
            if(mycart[i].num <= 1){
            break
            }
            mycart[i].num -= 1
          }
        }
        that.mycart = mycart
        localStorage.setItem('mycart',JSON.stringify(mycart))
      },
      deletePro: function(e){
        // 删除商品   循环商品, 获取索引  删除指定锁定
        let that = this
        let mycart = JSON.parse(localStorage.getItem('mycart')) // 获取缓存中的购物车信息
        for(let i=0; i<mycart.length; i++){
          mycart.splice(e,1)
          break
        }
        that.mycart = mycart
        localStorage.setItem('mycart',JSON.stringify(mycart))
      },
      ischecked: function(e){
        console.log(e.checked)
      }
    },
    mounted: function () {
      this.mycart = JSON.parse(localStorage.getItem('mycart'))  // 首先把缓存的值赋值给mycart
      // console.log(this.mycart)
      // console.log( typeof(this.mycart))
      
    },
    computed: {
      totalPrice: function () {
        const mycart = this.mycart
        let [singlePrice,allPrice] = [0,0]
        // console.log(11111111111)
        for(let i=0; i<mycart.length; i++){
          singlePrice = mycart[i].num * mycart[i].pro.id
          allPrice += singlePrice
          // console.log( singlePrice )
          // console.log( allPrice )
        }
        return allPrice
      }
    }
  }
  
</script>
<style>
.mint-cell-title{ display: none}
.mint-cell-wrapper{ padding: 0; line-height: 1.6;}
.mint-cell-swipe-button{ display: flex; align-items: center}
.mint-cell-value{ flex: 1; color:inherit; }
.weui-cell_swiped{ flex: 1; }
</style>

