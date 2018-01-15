<template>
  <div>
    <!-- <div class="backBar">
      <router-link to="product" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div> -->

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
        <div class="weui-cell" v-for="item in mycart" :key="item.id">
          <div class="weui-cell__hd pic">
            <a href="msg-product.html"> <img :src="imgUrl+item.pro.img" alt=""></a>
          </div>
          <div class="weui-cell__bd">
            <div class="fz15"> <a class="weui-cell_access" href="msg-product.html">{{item.pro.name}}</a> </div>
            <!-- <div class="hui94 fz12">型号：<span class="pl10">花朵小罐</span></div> -->
            <div class="priceControl">
              <span class="price fz17 ">{{item.pro.price}}</span> <!-- 价格 -->
              <div class="weui-count fr">
                <a @click="minusNum({id:item.pro.id})"  class="weui-count__btn weui-count__decrease"></a>
                <input class="weui-count__number" type="number"  v-model="item.num">
                <a @click="addNum({id:item.pro.id})" class="weui-count__btn weui-count__increase"></a>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- list end -->
  
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
            <a @click="submitOrder" to="Pay" class="weui-btn weui-btn_warn btn-radius0">去支付</a>
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
        token: localStorage.getItem('token'),
        imgUrl: this.$store.state.imgUrl,
        shopNow: this.$route.query.shopNow,
        id: this.$route.query.id,
        promsg: '',
        mycart: '',
        orderDto: {
                    "addressId": 0,
                    "goodsList": [
                      {
                        "goodsId": 0,
                        "num": 0
                      }
                    ],
                    "refereeList": [
                      {
                        "goodsId": 0,
                        "refereeId": 0
                      }
                    ],
                    "userId": localStorage.getItem('uid')
                  },
        price: 20,
        defaultAddr: [{name:'猫十一',tel:'13566668888',addr:'四川省成都市锦江区 滨江花园3栋 1单元'}]
        
      }
    },
    mounted: function () {
      // console.log(this.orderDto.userId)
      // console.log(this.orderDto.goodsList[0].goodsId)

      // 获取商品信息
      // axios({
      //   method:'get',
      //   url: 'api/goods/getContent?id=' + this.id,
      //   headers: {'ACCESS_TOKEN': this.token}
      // }).then( res =>{
      //   this.promsg = res.data.data
      //   console.log( this.promsg )
      // }).catch( error => {
      //   console.log(error)
      // }) //axios end

      // 通过缓存获取数据
     if( this.shopNow == 1 ){  // 如果shopNow == 1 那就读立即购买的缓存数据
        this.mycart = JSON.parse(localStorage.getItem('shopNow'))   
        // console.log('现在是立即购买传过来的数据')
        // console.log( this.mycart[0].pro.id)
        // console.log( this.orderDto.goodsList[0] )
        for(let i=0; i<this.mycart.length;i++){  // 循环赋值商品数据

          this.orderDto.goodsList[i].goodsId = this.mycart[i].pro.id  // 把ID赋值给要发送的数据
          this.orderDto.goodsList[i].num = this.mycart[i].num  //数量

          // console.log(this.orderDto.goodsList[i].goodsId)
          // console.log(this.orderDto.goodsList[i].num) 
          // console.log(this.mycart[i].num)
          // console.log(this.mycart[i].pro.id) 
        }
        console.log( JSON.stringify ( this.orderDto ) )  // 查看orderDto的数据
      }
      else{ // 如果不是立即购买那就是从购物车过来的, mycart的数据就是来自缓存购物车
        this.mycart = JSON.parse(localStorage.getItem('mycart'))
        const that = this
        const goodsList = []
        for(let i=0; i<this.mycart.length;i++){  // 循环赋值商品数据
          goodsList.push({goodsId:this.mycart[i].pro.id,num:this.mycart[i].num})  //获取id和数量, 赋值给goodList
          that.orderDto.goodsList = goodsList
          //  console.log( this.mycart[i] )
           
            // this.orderDto.goodsList[i].goodsId = this.mycart[i].pro.id  // 把ID赋值给要发送的数据
            // this.orderDto.goodsList[i].num = this.mycart[i].num  //数量

            // console.log(JSON.stringify (this.mycart[i]))
            // console.log(this.orderDto.goodsList[i].goodsId)
            // console.log(this.orderDto.goodsList[i].num) 
            // console.log(this.mycart[i].pro.id) 
            // console.log(this.mycart[i].num)
        }
        // console.log( JSON.stringify ( this.orderDto ) )  // 查看orderDto的数据
        // console.log('这是购物车数据')
        // console.log( JSON.stringify ( this.mycart ) )  
        // console.log( JSON.stringify ( goodsList ) )    自定义商品数据
        // console.log( JSON.stringify ( this.orderDto ) )   赋值后的orderDto数据
      }
    },
    methods: {
      addNum: function (e) {
        let that = this
        if( this.shopNow == 1 ){  // 判断是否立即购买
          let mycart = JSON.parse(localStorage.getItem('shopNow')) // 获取缓存中的购物车信息
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
          localStorage.setItem('shopNow',JSON.stringify(mycart))
        }
        else{           
          let mycart = JSON.parse(localStorage.getItem('mycart')) // 获取缓存中的购物车信息
          for(let i =0; i < mycart.length; i++ ) {
          if( mycart[i].pro.id == e.id ){
            mycart[i].num += 1
            //  console.log(mycart[i].num) 
            break
            }
          }
          that.mycart = mycart
          localStorage.setItem('mycart',JSON.stringify(mycart))
          // console.log(this.mycart) 
        }
      },
      minusNum: function (e) {
        let that = this
        if( this.shopNow == 1 ){
          let mycart = JSON.parse(localStorage.getItem('shopNow')) // 获取缓存中的购物车信息
          for(let i=0; i<mycart.length; i++){
            if( mycart[i].pro.id == e.id ){
              if(mycart[i].num <= 1){
              break
              }
              mycart[i].num -= 1
            }
          }
          that.mycart = mycart
          localStorage.setItem('shopNow',JSON.stringify(mycart))
          }else{
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
          }
        
      },
      submitOrder: function (e) {
        //提交的时候需要判断是购物车还是立即购买
        //立即购买
        if( this.shopNow == 1 ){
          axios({
            method:'post',
            url:'api/order/create',
            data: this.orderDto ,
            headers:{
              'ACCESS_TOKEN': this.token
            }
          }).then( res => {
            console.log('立即购买')
            console.log( JSON.stringify ( this.orderDto ) )
            console.log( res)
          }).catch( error => {
            console.log( error )
          })
        } else{
          // 购物车下单
          axios({
            method:'post',
            url:'api/order/create',
            data: this.orderDto ,
            headers:{
              'ACCESS_TOKEN': this.token
            }
          }).then( res => {
            console.log('购物车')
            console.log( JSON.stringify ( this.orderDto ) )
            console.log( JSON.stringify ( res.data ))
          }).catch( error => {
            console.log( error )
          })
        }
        // axios({
        //   method:'post',
        //   url:'api/order/create',
        //   data: orderDto ,
        //   headers:{
        //     'ACCESS_TOKEN': this.token
        //   }
        // }).then( res => {
        //   console.log( res )
        // }).catch( error => {
        //   console.log( error )
        // })
      }      
    },
    computed: {
      totalPrice: function () {
        let [singlePrice,allPrice] = [0,0]
        for(let i=0; i<this.mycart.length; i++){
        
            singlePrice = this.mycart[i].num * this.mycart[i].pro.price
            allPrice += singlePrice

          // console.log( singlePrice )
          // console.log( allPrice )
        }
        //返回总价
        return allPrice 
      }
    }
  }
</script>

