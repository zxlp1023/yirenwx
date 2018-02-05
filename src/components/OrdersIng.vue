<template>
<mt-loadmore :auto-fill="false"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" bottomPullText="" :bottomDropText="bottomDropText" ref="loadmore">
  <div class="logistics orderDetails orders">
    <div class="weui-panel" v-for="(item,index) in ordersList" :key="item.id">
      <div class="weui-panel__hd">订单号 : {{item.orderNum}}
        <span class="fr red">等待发货</span>
      </div>
      <div class="weui-panel__bd">
        <router-link to=""  class="weui-media-box weui-media-box_appmsg" v-for="(goods,index) in item.goodsList" :key="goods.id">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="imgUrl + goods.goodsIcon" :alt="goods.goodsName">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{goods.goodsName}}</h4>
            <!-- <p class="weui-media-box__desc">型号：
              <span>中号*10</span>
            </p> -->
          </div>
          <div class="weui-media-box__ft">
            <p class="price">{{goods.goodsPrice}}</p>
            <span class="fr">{{goods.num}}</span>
          </div>
        </router-link>
      </div>
      <div class="weui-panel__ft text-right">
        <p class="hui94">共 {{item.goodsList.length}} 件 合计 <span class="price fz15">{{item.price}}</span></p>
        <!-- <a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_default" v-if="item.status == 2">查看物流</a> -->
        <router-link to="Logistics" class="weui-btn weui-btn_primary weui-btn_default" v-if="item.status == 0">查看物流</router-link>
        <a href="javascript:;" class="weui-btn weui-btn_primary" v-if="item.status == 0">待付款</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" @click="orderCancel({index:index,id:item.id})">取消订单</a>
      </div>
    </div>
  </div>
  <!-- orders -->  
</mt-loadmore>
</template>
<script>

export default {
  name: "ordersIng",
  // props:['imgUrl','shopNow'],
  data() {
    return {
      title: "进行中",
      token: localStorage.getItem("token"),
      imgUrl: this.$store.state.imgUrl,
      ordersList: null, 
      ordersList2: null, 
      totalOrdersIng:'',
      allLoaded: false,
      // scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
      page:1,
      pages:'',
      bottomDropText:'加载更多...',
      // bottomLoadingText:'加载中2'
    };
  },
  mounted: function() {
     
    // 获取进行中的订单
    axios({
      method: "get",
      url: 'api/order/haveInHand?current=' + this.page + '&size=3',
      headers: { ACCESS_TOKEN: this.token }
    })
    .then(res => {
      this.pages = res.data.data.pages
      this.ordersList = res.data.data.records;
 
      // console.log(this.$store.state.totalOrdersIng)
      // this.$store.state.tabnum1 = res.data.data.records.length;
      // this.$store.state.totalOrdersIng = res.data.data.records.length;
      // console.log( '订单数量' + this.totalOrdersIng  )
      // console.log( '全局订单数量' + this.$store.state.tabnum1)
      // console.log('order:' + this.ordersList.length)
      // console.log( JSON.stringify( res.data.data.records ))  // 打印返回数据
      // console.log( this.ordersList)
    })
    .catch(error => {
      console.log(error);
    });
  },
  methods: {
    // 取消订单

    orderCancel: function(e) {
      $.confirm(
        "是否要取消此订单?",
        () => {
          //点击确认后的回调函数
          axios({
            method: "get",
            url: "api/order/cancel?orderId=" + e.id,
            headers: { ACCESS_TOKEN: this.token }
          })
            .then(res => {
              console.log(JSON.stringify(res.data.code)); // 打印返回数据
              if (res.data.code < 2000) {
                // $.toptip('取消订单成功', 2000, 'success');
                this.ordersList.splice(e.index, 1);
              }
            })
            .catch(error => {
              console.log(error);
            }); // /axios
        },
        function() {
          //点击取消后的回调函数
        }
      );
    },// 取消订单结束

    loadBottom () {
        this.page += 1
        // console.log(this.page)
        // console.log(this.pages)
        if(this.page == this.pages){
          this.bottomDropText = '没有更多了'
          // this.$refs.loadmore.onBottomLoaded();
          // this.allLoaded = true  // 不再加载
        }
        setTimeout(() => {
          axios({
            methods: 'get',
            url:'api/order/haveInHand?current=' + this.page + '&size=3',
            headers: {'ACCESS_TOKEN': this.token}
          })
          .then( res => { 
            // console.log(this.page)
            // for(let i=0;i< res.data.data.records.length;i++) {   // 先处理请求到的数据
            //   res.data.data.records[i].goodsStar=parseFloat(res.data.data.records[i].goodsStar).toFixed(1)
            // }        
            
            this.ordersList2 = res.data.data.records //再赋值给变量
            this.ordersList = this.ordersList.concat(this.ordersList2) //再赋值给变量
            this.$refs.loadmore.onBottomLoaded();  // 固定方法，查询完要调用一次，用于重新定位  不然会一直有加载中...

            //  console.log(this.pros)    
        }, 1500);

        })

      } // 加载更多
  },
  
};
</script>
<style>

</style>
