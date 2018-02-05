<template>
  <div>
    <div class="backBar">
      <!-- <router-link to="My" > <i class="iconfont icon-back"></i> </router-link> -->
      <div class="title" v-text="title">亿人共享</div>
      <router-link to="AddressAdd" class="right"> 添加 </router-link>
    </div>
    <div class="addr-manage ">
      <dl v-for="(item,index)  in addressList" :key="item.id" @click="toOrderConfirm(item)">
          <dd>
            <span>{{item.name}}</span>
            <span class="fr">{{item.phone}}</span>
          </dd>
          <dd>{{item.address}}{{item.homeNum}}</dd>
          <dt>
            <span  v-if="item.isDefault" class="default" @click="setDefault(item.id)"><i class="weui-icon-circle" :class="{ 'weui-icon-success': item.isDefault }"></i>默认地址</span>
            <span v-else="!item.isDefault" class="default" @click="setDefault(item.id)"><i class="weui-icon-circle" :class="{ 'weui-icon-success': item.isDefault }" ></i>设为默认地址</span>
            <p>
            <p>
              <!-- <a href="address-change.html"> <i class="iconfont icon-edit"></i>编辑</a> -->
              <router-link :to="{path:'/AddressEdit', query: {id:item.id,name:item.name,gender:item.gender,phone:item.phone,longitude:item.longitude,latitude:item.latitude,address:item.address,homeNum:item.homeNum}}">编辑</router-link>
              <a class="delete" @click="addressDel({index:index,id:item.id})"> <i class="iconfont icon-trash3"></i>删除</a>
            </p>
          </dt>        

      </dl>
     
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AddressManage',
    data () {
      return {
        title: '收货地址',
        token: localStorage.getItem('token'),
        from: this.$route.query.from,
        addressList: ''
      }
    },
    mounted: function(){
        // 显示收货地址列表
      this.getAddressList()
      // console.log(this.from)
    },
    methods: {
      // 显示收货地址列表
      getAddressList: function () {
          axios({
            method:'get',
            url:'api/address/list',
            headers: {'ACCESS_TOKEN': this.token}
          })
          .then( res => {
            this.addressList = res.data.data
            // console.log(res.data.data)
          })
          .catch( error => {
            console.log(res.error)
          })
      },
      // 设置默认地址
      setDefault: function (e) {
          for(let i=0; i<this.addressList.length; i++){
            if (this.addressList[i].id == e) {
                this.addressList[i].isDefault = 1  //设置选中状态

                //通过接口设置为默认地址
                axios({
                  method:'post',
                  url:'api/address/setDefault?addressId=' + e,
                  headers: {'ACCESS_TOKEN': this.token}
                })
                .then( res => {
                  
                  // console.log(res.data)
                })
                .catch( error => {
                  console.log(res.error)
                })
            }else{
              this.addressList[i].isDefault = 0
            }
          }
      },
      // gotoEdit: function (e) {
      //     axios({
      //       method:'post',
      //       url:'api/address/edit',
      //       headers: {'ACCESS_TOKEN': this.token}
      //     })
      //     .then( res => {
      //       // console.log(res.data)
      //     })
      //     .catch( error => {
      //       console.log(error)
      //     })
      // },
      addressDel: function (e) {  //e代表点击事件的参数
        // console.log( e )
        this.addressList.splice(e.index,1)  // 通过索引找到dom元素,删除一个

        // 通过接口删除地址
          axios({
            method:'get',
            url:'api/address/del?addressId=' + e.id,
            headers: {'ACCESS_TOKEN': this.token}
          })
          .then( res => {
            console.log(res.data)
          })
          .catch( error => {
            console.log(error)
          })
      },
      toOrderConfirm: function (e) {
        if( this.from == 'orderConfirmShopNow'){ //如果来自立即购买的确定订单, 则执行此函数
          this.$router.push({path:'OrderConfirm',query:{shopNow:1,addrId:e.id,name:e.name,tel:e.phone,addr:e.address,addr2:e.homeNum}})
        }
        if( this.from == 'orderConfirmCart'){ //如果来自购物车的确定订单, 则执行此函数
          this.$router.push({path:'OrderConfirm',query:{addrId:e.id,name:e.name,tel:e.phone,addr:e.address,addr2:e.homeNum}})
        }
        
      }
    } // method end
    
  }
</script>