<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
      <router-link to="AddressAdd" class="right"> 添加 </router-link>
    </div>
    <div class="addr-manage ">
      <dl>
          <dd>
            <span>峨眉山群侠</span>
            <span class="fr">13908128888</span>
          </dd>
          <dd>成都市锦江区滨江花园2栋1单元</dd>
          <dt>
            <span class="default"><i class="weui-icon-circle weui-icon-success"></i>默认地址</span>
            <p>
              <a href="address-change.html"> <i class="iconfont icon-edit"></i>编辑</a>
              <a class="delete"> <i class="iconfont icon-trash3"></i>删除</a>
            </p>
          </dt>
      </dl>
      <dl>
          <dd>
            <span>峨眉山群侠</span>
            <span class="fr">13908128888</span>
          </dd>
          <dd>成都市锦江区滨江花园2栋1单元</dd>
          <dt>
            <span class="default"><i class="weui-icon-circle"></i>设为默认地址</span>
            <p>
              <a href="address-change.html"> <i class="iconfont icon-edit"></i>编辑</a>
              <a class="delete"><i class="iconfont icon-trash3"></i>删除</a>
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
        title: '收货地址'
      }
    }
  }
</script>