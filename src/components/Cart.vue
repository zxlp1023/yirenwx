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
                <label class=" weui-check__label" :for="item.pro.id">
                  <input type="checkbox" class="weui-check " v-model="selectArr[index]" :id="item.pro.id" >
                  <i class="weui-icon-checked"></i>
                </label>
              </div>
              <div class="weui-cell__hd pic">
                <!-- <a href="msg-product.html"><img src="../assets/img/up/2.png" alt="" ></a> -->
                <img :src="imgUrl+item.pro.img" alt="" >
              </div>
              <div class="weui-cell__bd">
                <!-- <div class="fz15"><a class="weui-cell_access" href="msg-product.html">超人全身水洗旋转麻将机</a></div> -->
                <div class="fz15"><div class="weui-cell_access" href="msg-product.html">{{item.pro.name}}</div></div>
                <div class="hui94 fz13">香槟金</div>
                <div class="priceControl">
                  <span class="price fz15">{{item.pro.price}}</span>
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
        <label class="weui-cell weui-check__label " for="s11" >
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s11" @click="selectAll" v-model="isChecked">
            <i class="weui-icon-checked"></i>全选
          </div>
        </label>
        <div class="weui-cell weui-cell-r">
          <div class="weui-cell__bd ">
            合计:<span class="price ">{{totalPrice}}</span>
          </div>
          <div class="weui-cell__hd">
            <!-- <a class="weui-btn weui-btn_warn btn-radius0" @click="submit">结算</a> -->
            <router-link to="OrderConfirm" class="weui-btn weui-btn_warn btn-radius0" @click="submit">结算</router-link>
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
        token: localStorage.getItem('token'),
        imgUrl: this.$store.state.imgUrl,
        num: 1,
        mycart: '',
        selectArr: [],
        // selectArr: [true,false],
        isChecked: true,
        mycart: '' // 获取缓存中的购物车信息
      }
    },
    mounted: function () {
      this.mycart = JSON.parse(localStorage.getItem('mycart'))  // 首先把缓存的值赋值给mycart
      console.log(JSON.stringify(this.mycart))
      // console.log( typeof(this.mycart))

      // 设置checkbox 的默认值为 true  遍历所有元素,然后把所有selectArr 的子元素设置为true,就默认选中了
      for ( var i=0; i<this.mycart.length; i++){
        this.selectArr[i] = true
        // console.log(this.selectArr)
      }
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
      selectAll: function(e){

       /*  for(let i=0; i< this.selectArr.length; i++){
            
             if(e.currentTarget.checked){ 
               this.selectArr[i] = true 
               console.log(this.selectArr[i])
               }
             else{
               this.selectArr[i] = false
                console.log(this.selectArr[i])
             }
          } */
          let selectArr = []

          if(e.currentTarget.checked){
            for(let i=0; i< this.selectArr.length; i++){
              selectArr[i] = true
           }
              this.selectArr = selectArr
            }else{
              for(let i=0; i< this.selectArr.length; i++){
              selectArr[i] = false
           }
              this.selectArr = selectArr
          }

          
          console.log(selectArr)

          
        // if(e.currentTarget.checked){
        //   /* this.selectArr.forEach( index => {
        //     index = true
        //   }) */
        //   for(let i=0; i< this.selectArr.length; i++){
        //     this.selectArr[i] = true
        //     console.log( this.selectArr[i] )
        //   }
        //   // console.log(this.selectArr)
          
        // }else{
        //   // this.ischecked = false
        //   this.selectArr = true
        // }
      },
      submit: function (){
       
      }
    },
    computed: {
      totalPrice: function () {
        let [singlePrice,allPrice] = [0,0]
        for(let i=0; i<this.mycart.length; i++){
          if(this.selectArr[i]){
            singlePrice = this.mycart[i].num * this.mycart[i].pro.price
            allPrice += singlePrice
          }
          // console.log( singlePrice )
          // console.log( allPrice )
        }

      // 判断当某个元素没选中时, 全选状态的改变
       if(this.selectArr.filter( item => !item ).length==0){
          this.isChecked = true
        }else{
          this.isChecked = false
        }

        //返回总价
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
