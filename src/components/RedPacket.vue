<template>
<div>
  <div class="redPacket" @click="showRedPacket()">
      <img src="../assets/img/redPacket0.png" alt="">
      <div>
        <span>距离红包开启</span>
        <p>
          <span>
            {{showTime}}
          </span>
        </p>
      </div>
  </div>
  <!-- 红包领取界面 -->
  <div id="dialog" v-if="showDialog == true">
    <div class="bg"></div>
      <div class="cnt" v-show="cnt">
        <img id="a1" src="../assets/img/redPacket1.png" alt="" @click="getRedPacket()">
        <i class="cls iconfont icon-close" @click="close()"></i>
      </div>
      <div class="getRedPacket" v-show="showGetRedPacket">
        <img src="../assets/img/redPacket2.png" alt="">
        <div class="msg">
          <span>恭喜您获得</span>
          <div>0.43</div>
          <p>可在“我的钱包”中查看</p>
        </div>
        <i  class="cls iconfont icon-close" @click="close()"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: '222',
      startTime: new Date("2018-1-25 17:41:00"),
      showTime: null,
      showDialog:false,  // 显示红包
      showGetRedPacket:false,
      cnt:true,
      isShow: false
    }
  },
  props:{
    // endTime: { type: String, default: '' },
    endText: { type: String, default: '立即抢' }
  },
  mounted: function() {
    this.countDown()
  },
  methods: {
    countDown: function () {
      // 在这里获取数据, 赋值给startTime
        let timer = setInterval( () => {
            const nowTime = new Date()
            const time = this.startTime - nowTime
            if( time > 0 ){  // 如果时间大于0 , 说明还没过期
              let hours = parseInt(time / 1000 / 60 / 60 % 24)
              let minutes = parseInt(time / 1000 / 60 % 60 )
              let seconds = parseInt(time / 1000 % 60)

              //格式化时间
              hours = this.format(hours)
              minutes = this.format(minutes)
              seconds = this.format(seconds)

              this.showTime =  `${hours}:${minutes}:${seconds}`  //返回时间
  
              // console.log(this.showTime)
            }else{
              clearInterval(timer)
              this.showTime = this.endText
              // console.log(this.showTime)
              this.isShow = true // 抢红包可见
            }
        },1000)
      // console.log('============' + time  )
    },
    format: function (time) { //格式化时间,t表示传进来的时间,小于10就再前面加上0
      if(time <10){
        time = '0' + time
      }
      return time
    },
    showRedPacket: function () {
      if(this.isShow === true){   //如果isShow等于true, Dialog就可以显示
        this.showDialog = true
      }
      // console.log(this.isShow)
    },
    getRedPacket: function () {
      this.cnt = false
      this.showGetRedPacket = true
    },
    close: function () {
      this.showDialog = false
    }
    
  },
}
</script>

<style>

</style>
