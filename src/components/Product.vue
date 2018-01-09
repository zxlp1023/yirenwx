<template>
  <div id="product">
    <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="../assets/img/up/a1.jpg" />
      </div>
      <!--<div class="swiper-slide"><img src="img/up/banner.jpg" /></div>-->
      <!--<div class="swiper-slide"><img src="img/up/banner.jpg" /></div>-->
    </div>
    <!-- 隐藏状态按钮 -->
    <!--<div class="swiper-pagination"></div>-->
  </div>
  <!--banner end-->

  <div class="proIntro col">
    <!-- <div class="fz15b">日式和风手绘陶瓷餐具</div> -->
    <div class="fz15b">{{promsg.name}}</div>
    <span class="price">84.5</span>
    <span class="price2">98.5</span>
  </div>
  <div class="shopService  mt10">
    <span><i class="weui-icon-success"></i>安全保证</span>
    <span><i class="weui-icon-success"></i>十天无理由退货</span>
    <span><i class="weui-icon-success"></i>平台推荐</span>
  </div>

  <div class="weui-panel  commentsPro">
    <div class="weui-panel__hd fz15b">评论 <span class="star star-50"></span> <span class="score">5.0</span></div>
    <div class="weui-panel__bd">
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
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
      </a>
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
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
      </a>
    </div>
    <div class="weui-panel__ft">
      <router-link to="ProductComments" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部84条评论</div>
        <span class="weui-cell__ft"></span>
      </router-link>
      <!-- <a href="comments-product.html" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看全部84条评论</div>
        <span class="weui-cell__ft"></span>
      </a> -->
    </div>
  </div> <!-- /commentsPro -->
  <div class="proDetails mt10">
    这里是详情介绍
    <img src="../assets/img/up/banner.jpg" alt="图片详情介绍">
     图片详情介绍
  </div>
  <div class="proFoot">
    <a @click="addcart({id:promsg.id,phone:promsg.phone})" href="javascript:;" id="show-toast"  class="weui-btn weui-btn_primary">加入购物车</a>
    <a @click="buyNow({id:promsg.id,phone:promsg.phone})" class="weui-btn weui-btn_warn">立即购买</a>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Prodoct',
    data () {
      return {
        id:'',
        title: '商品详情',
        promsg: '',
        grade1: '3.5',
        grade2: '5.0',
        score: '',
        starscore: 'star-',
        mycart : '',
        shopNow: ''
      }
    },
    created: function () {
      //实例被创建完成后立即调用, 获取url参数中的id, 用来请求商品信息和评论
      this.id = this.$route.query.id
      // console.log(this.id )
    },
    methods: {
      // 加入购物车
      addcart: function (e) {
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
      
    },
    mounted: function () {
      
      this.grade(this.grade2)  // 通过函数处理分数返回正确的分数

      // 商品信息
      this.$http.get('http://cangdu.org:8001/shopping/restaurant/' + this.id).then( response =>{
        // console.log(response);
        this.promsg = response.body;
      }, response => {
        // console.log(response)
      })

      // 评价展示
      this.$http.get('http://cangdu.org:8001/ugc/v2/restaurants/'+ this.id +'/ratings?offset=0&limit=2').then(response => {
        console.log(response)
        this.commentsTwo = response.body
      }, response => {
        console.log(response)
      })
      // console.log( this.grade(this.grade2)    
      
      

    }
    
  }
</script>
