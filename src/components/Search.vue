<template>
  <div>
    <div class="searchBar p05">
      <router-link to="City" class="city"><i class="icon iconfont icon-location1"></i>成都市</router-link>
      <div class="search">
        <div class="search-index open-popup" data-target="#full">请输入商家关键字 <i class="iconfont icon-search"></i></div>
      </div>
    </div>
    <div id="full" class="weui-popup__container">
    <div class="weui-popup__overlay"></div>
      <div class="weui-popup__modal">
        <div class="j-search">
          <div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form" action="#">
              <div class="weui-search-bar__box">
                <i class="weui-icon-search iconfont icon-search"></i>
                <!-- <i class="fonticon fonticon-search"></i> -->
                <input v-model="inputValue" @keyup.enter="submit" type="search" class="weui-search-bar__input" id="searchInput" placeholder="请输入店名或菜品" required="">
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
              </div>
              <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
              <!-- <i class="weui-icon-search"></i>
                <span>搜索</span>-->
              </label>
            </form>
            <a  href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
          </div>
        </div>
        <ul class="s-history">
          <div class="title"><i id="dltSearch" class="iconfont icon-trash fr"></i> 历史搜索</div>
          <!-- <a v-for="i in searchHistory " href="javascript:;">{{i.name}}</a> -->
          <a  href="javascript:;">11</a>
          <button @click="submit()">搜索</button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    data () {
      return {
        inputValue: '', //用户输入值
        searchRecord: [1,2,3]  // 搜索记录
      }
    },
    // props: ['inputValue'],
    methods: {
      submit: function () {

      }
    }
  }
</script>
<style>

</style>
