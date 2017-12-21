<template>
  <div>
    <div class="backBar">
      <router-link to="My" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人电贸</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        title: '亿人电贸'
      }
    }
  }
</script>
<style>

</style>
