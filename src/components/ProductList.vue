<template>
  <div class="weui-panel pro-index">
    <div class="weui-panel__bd">        
      <router-link :to="{path:'/getContent', query: {id: item.id}}" v-for="item in pros" :key="item.id"   class="weui-media-box weui-media-box_appmsg" >      
      <!-- <router-link to="{path:'/Product', query: {id: item.id}}" class="weui-media-box weui-media-box_appmsg" v-for="item in pros" :key="item.id" >       -->
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="imgUrl + item.goodsImg" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{ item.goodsName }}</h4>
          <p class="weui-media-box__desc">{{item.goodsLabel}}</p>
          <div class="item-star">
            <span class="star" :class="starscore" ></span>
            <span>{{item.goodsStar}}</span>
          </div>
          <div class="item-price">
            <span class="price">{{item.price}}</span>
            <span class="buyers">{{item.salesVolume}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>  <!--pro-index end-->
</template>
<script>
  export default {
    name: 'ProductList',
    data () {
      return {
        pros: [],
        uid: '',
        token: localStorage.getItem('token'),
        imgUrl: this.$store.state.imgUrl,
        defaultGrade: '3.0',
        score:'',
        starscore: 'star-'
      }
    },
    created: function () {
      
    },
    mounted: function () {
      // 请求商品
      axios({
        method:'get',
        url:'api/goods/list',
        headers: {'ACCESS_TOKEN': this.token}
        })
        .then( res => {
          // console.log(res.data)
          for(let i=0;i< res.data.data.records.length;i++) {   // 先处理请求到的数据
            res.data.data.records[i].goodsStar=parseFloat(res.data.data.records[i].goodsStar).toFixed(1)
          }
          this.pros = res.data.data.records //再赋值给变量
          // console.log(this.pros)            
          
          for(let i=0; i<1; i++){  // 处理分数显示
            // console.log(this.pros[i].goodsStar)
            this.grade(this.pros[i].goodsStar)
          }
        })
        .catch( error => {
          console.log(error)
        })
        // console.log(this.pros)
        
      // this.grade(this.defaultGrade) // 处理显示几个星星

    },
    methods: {
      // 处理评分    
      grade: function ( fen ) {
        // console.log(8888)
        let [a,b,c] = ['','','']
        a = fen.split(".")
        b = a[0]  // 整数
        c = a[1]  // 小数

        
        // 拆分分数, 小于0.5设置分数第二位 0, 大于0.5设置分数第二位 5
        if( b < 3){  // 设置整数低于3分的, 小数部分都为0
          c = 0
          this.score = b + c
          return this.starscore = this.starscore + this.score
          console.log('分数小于3')
        }
        else {  //大于等于3的才判断小数
          console.log('分数大于3')
          if( c < 5){
            c = 0
              this.score = b + c
              return this.starscore = this.starscore + this.score
          }
          if( c >= 5){
            c = 5 
            this.score = b + c  
            return this.starscore = this.starscore + this.score
            // console.log(123)
          }
        }
      }
    }
  }
</script>
<style>

</style>
