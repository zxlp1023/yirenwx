<template>
  <div>
    <div class="backBar">
      <router-link to="AddressManage" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
    </div>
    <div class="addr-add">
      <div class="title">联系方式</div>
      <div class="weui-cells weui-cells_form mt0">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">联系人</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" placeholder="您的姓名" v-model="name" autofocus required>
          </div>
        </div>
        <div class="weui-cell weui-cells_radio mt0">
          <div class="weui-cell__hd">
            <label class="weui-label"></label>
          </div>
          <label class="weui-check__label" for="x11">
            <div class="weui-cell__ft">
              <input type="radio" name="radio1" class="weui-check" id="x11"  v-model="gender" value="0"  >
              <span class="weui-icon-checked"></span>
            </div>
            先生
          </label>
          <label class="weui-check__label" for="x12">
            <div class="weui-cell__ft">
              <input type="radio" class="weui-check" name="radio1" id="x12" v-model="gender" value="1">
              <span class="weui-icon-checked"></span>
            </div>
            女士
          </label>
         
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">联系电话</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="您的手机号码" v-model="phone" maxlength="11">
          </div>
        </div>
      </div>
      <div class="title">收货/服务地址</div>
      <div class="weui-cells weui-cells_form mt0">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label w6r">小区/大厦/学校</label>
          </div>
          <div class="weui-cell__bd">
            <input type="text" class="weui-input bGlocation3" placeholder="详细地址" v-model="address">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label w6r">楼号/门牌号</label>
          </div>
          <div class="weui-cell__bd">
            <input type="text" class="weui-input" placeholder="例如：17栋28号" v-model="homeNum">
          </div>
        </div>
      </div>
      <div>
        <button @click="addressAdd  "  class="weui-btn weui-btn_warn">确认添加</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AddressAdd',
    data () {
      return {
        title: '添加地址',
        token: localStorage.getItem('token'),
        name: '',
        gender: 0,
        phone: '',
        longitude: '0',
        latitude: '0',
        address: '',
        homeNum: '',
      }
    },
    mounted: function () {
      
    },
    methods: {
      addressAdd: function () {
        // console.log(this.gender)
        if(this.name == ''){ $.toast("请填写联系人", "text")}
        else if(this.phone == ''){ $.toast("请填写您的联系电话", "text")}
        else if(this.address == ''){ $.toast("请填写收货地址", "text")}
        else if(this.homeNum == ''){ $.toast("请填写门牌号", "text")}
        else {
          axios({
            method:'post',
            url:`api/address/add?name=${this.name}&phone=${this.phone}&gender=${this.gender}&longitude=${this.longitude}&latitude=${this.latitude}&address=${this.address}&homeNum=${this.homeNum}`,
            headers: {'ACCESS_TOKEN': this.token}
          })
          .then( res => {
            if(res.data.code < 2000){  //code小于两千表示成功
              $.toast('添加成功', 1000, setTimeout(() => {
                  this.$router.push('AddressManage')
                }, 1000))
            }
            // console.log(res.data.code)
          })
          .catch( error => {
            console.log(error)
          })
        }
      }
    }
  }
</script>
<style>

</style>
