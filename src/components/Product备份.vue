<template>
  <div id="product">
    <!-- <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div> -->
  <div class="swiper-container">

    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="item in banners"><img :src="imgUrl+item" /></div>
    </div>
    <!-- 隐藏状态按钮 -->
    <div class="swiper-pagination"></div>
  </div>
  <!--banner end-->

  <div class="proIntro col">
    <div class="fz15b">{{promsg.goodsName}}</div>
    <span class="price">{{promsg.price}}</span>
    <span class="price2">{{promsg.oldPrice}}</span>
  </div>
  <div class="shopService  mt10">
    <span v-for="item in labels"><i class="weui-icon-success"></i>{{item.labelName}}</span>
  </div>

  <div class="weui-panel  commentsPro">
    <div class="weui-panel__hd fz15b">评论 <span class="star star-50"></span> <span class="score">5.0</span></div>
    <div class="weui-panel__bd">
      <!-- 先关闭测试评论, 等订单流程通后再调用 -->
      <!-- <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" src="../assets/img/up/a1.jpg" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">勿忘初心</h4>
          <div class="myStar">
            <span class="star" :class="starscore"></span> <span>2015-12-08</span> 
          </div>
          <p class="weui-media-box__desc">东西不错，我很喜欢，送来的时候态度也很好，很方 便下次还这样买，挺不错的</p>
        </div>
      </a> -->

    </div>
    <div class="weui-panel__ft">
      <router-link to="ProductComments" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部0条评论</div>
        <span class="weui-cell__ft"></span>
      </router-link>
      <!-- <a href="comments-product.html" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部84条评论</div>
        <span class="weui-cell__ft"></span>
      </a> -->
    </div>
  </div> <!-- /commentsPro -->
  <div class="proDetails mt10" v-html="content">
    <!-- {{}} -->
  </div>
  <div class="proFoot">
    <a @click="addcart({id:promsg.id,name:promsg.goodsName,img:promsg.goodsImg,price:promsg.price})" href="javascript:;" id="show-toast"  class="weui-btn weui-btn_primary">加入购物车</a>
    <a @click="buyNow({id:promsg.id,name:promsg.goodsName,img:promsg.goodsImg,price:promsg.price})" class="weui-btn weui-btn_warn">立即购买</a>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Prodoct',
    data () {
      return {
        title: '商品详情',
        token: localStorage.getItem('token'),
        imgUrl: this.$store.state.imgUrl,
        id:this.$route.query.id,
        promsg: '',
        banners:'',
        grade1: '3.5',
        grade2: '5.0',
        score: '',
        starscore: 'star-',
        mycart : '',
        shopNow: '',
        labels: '',
        content:'',
        sendData: {}
      }
    },
    mounted: function () {

      axios({
        method:'get',        
        url:'api/goods/getContent?id=' + this.id,
        headers: {'ACCESS_TOKEN': this.token}
        })
        .then( res => {
          if( res.data.data.goodsBanner !== null){
            this.banners = res.data.data.goodsBanner.split(",")
          }
          this.promsg = res.data.data
          this.labels = res.data.data.labels
          this.content = res.data.data.content

          // console.log(this.promsg)
        }).catch( error => {
          console.log(error)
        })
      //实例被创建完成后立即调用, 获取url参数中的id, 用来请求商品信息和评论
        // this.id = this.$route.query.id
      
      // console.log(this.id )
      this.grade(this.grade2)  // 通过函数处理分数返回正确的分数

      // 商品信息

      // 评价展示
      axios.get('http://cangdu.org:8001/ugc/v2/restaurants/'+ this.id +'/ratings?offset=0&limit=2').then(response => {
        // console.log(response)
        this.commentsTwo = response.body
      }, response => {
        // console.log(response)
      })      
    },
    methods: {
      
      // 加入购物车
      addcart: function (e) {
        axios({ 
          method:'post',
          url:'api/shoppingCart/add?goodsId='+this.id+'&num=1', 
          headers: {'ACCESS_TOKEN': this.token}
        }).then( res => {
          
          if(res.data.code < 2000){  //如果code小于2000,就表示成功
            $.toast("加入购物车成功")
          }else{
            // $.toast(res.data.msg)
            $.toast(res.data.msg, "forbidden");
          }
        }).catch( error =>{
          console.log(error)
        })
        
        const that = this

        if(this.id == undefined) { // 如果没有产品id, 不加入购物车
              return
        }  
        if (localStorage.getItem('mycart')) {
          const mycart = JSON.parse(localStorage.getItem('mycart'))
          let addok = true
          for (let i=0; i< mycart.length; i++) {
            // this.$store.state.mycart = mycart[i]
            if (mycart[i].pro.id == e.id) { // 如果缓存中商品ID 和 点击购买的商品ID相同, 则数量加1
              // mycart[i].num = mycart[i].num +1  //数量 +1              
              addok = false
              break;
            }
          }     
          
          
          if(addok){  // 如果addok为真, 则添加商品到缓存
            mycart.push({'pro':e,'num':1})
          }
         
          that.mycart = mycart
          localStorage.setItem('mycart',JSON.stringify(mycart))
        } else { 
          let mycart = [{'pro':e,'num':1}]
          that.cart = mycart
          localStorage.setItem('mycart',JSON.stringify(mycart))
          // this.$store.state.mycart = JSON.stringify(mycart)  // 添加到全局变量
          // console.log(this.$store.state.mycart)
        }
      },     
      buyNow: function (e) {
        

        //立即购买, 把商品信息存到shopNow , 然后存到缓存
        this.$router.push({path:'/OrderConfirm',query:{shopNow:1}})  // 立即购买传参
        let shopNow = [{'pro':e,'num':1}] 
        this.shopNow = shopNow
        localStorage.setItem('shopNow',JSON.stringify(shopNow))

       /*  if (localStorage.getItem('shopNow')) {
          const shopNow = JSON.parse(localStorage.getItem('shopNow'))
          let addok = true
          for (let i=0; i< mycart.length; i++) {
            // this.$store.state.mycart = mycart[i]
            if (mycart[i].pro.id == e.id) { // 如果缓存中商品ID 和 点击购买的商品ID相同, 则数量加1
              // mycart[i].num = mycart[i].num +1  //数量 +1              
              addok = false
              break;
            }
          }     
          
         
          that.mycart = mycart
          localStorage.setItem('mycart',JSON.stringify(mycart))
        } else { 
          let mycart = [{'pro':e,'num':1}]
          that.cart = mycart
          localStorage.setItem('mycart',JSON.stringify(mycart))
        } */
      }, 
      // 处理评分
      grade: function ( fen ) {
        let [a,b,c] = ['','','']
        a = fen.split(".")
        b = a[0]  // 整数
        c = a[1]  // 小数
        // 拆分分数, 小于0.5设置分数第二位 0, 大于0.5设置分数第二位 5
        if( b < 3){  // 设置整数低于3分的, 小数部分都为0
          c = 0
          this.score = b + c
          return this.starscore = this.starscore + this.score
        }
        else {  //大于等于3的才判断小数
          if( c < 5){
            c = 0
            this.score = b + c
            return this.starscore = this.starscore + this.score
          }
          if( c >= 5){
            c = 5 
            this.score = b + c  
            return this.starscore = this.starscore + this.score
          }
        }
      }
      
    }    
  }
</script>


