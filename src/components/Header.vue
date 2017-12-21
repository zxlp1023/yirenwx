<template>
  <div class="backBar">
    <a href="javascript" @click="goBack()"> <i class="iconfont icon-back"></i> </a>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
  export default {
    nmae: 'Header',
    data () {
      return {
        methods: {
          goBack : function (prams) {
            this.$router.go(-1)
          }
        }
      }
    }
  }
</script>