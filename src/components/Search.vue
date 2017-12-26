<template>
  <div>
    <div class="searchBar p05">
      <router-link to="City" class="city"><i class="icon iconfont icon-location1"></i>{{$store.state.nowcity}}</router-link>
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
                <input v-model="shuru" @keyup.enter="submit" type="search" class="weui-search-bar__input" id="searchInput" placeholder="请输入店名或菜品" required="">
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
          <div class="title"><i @click="clear" class="iconfont icon-trash fr"></i> 历史搜索</div>
          <!-- <a v-for="i in searchHistory " href="javascript:;">{{i.name}}</a> -->
          <a  href="javascript:;">11</a>
          <a v-for="i in shuruArr" href="javascript:;">{{i.name}}</a>
     
          <button @click="submit">搜索</button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  /* var searchArr = [] ;
  if (localStorage.search) {
    searchArr = localStorage.search.split(",")
  } else {
    searchArr = [];
    } */
  export default {
    name: 'Search',
    data () {
      return {
        shuru: '',
        shuruArr: [],
        hisArr: localStorage.his
      }
    },
    // props: ['inputValue'],
    methods: {
    submit: function () {
      // 没写值不能搜索
      if (this.shuru === '') {
        return
      }
      this.shuruArr.push({name: this.shuru})  // 数组中添加对象, name:搜索值 , 方便v-for循环出来
      // localStorage.setItem('hisArr', this.shuruArr)  // 存到本地缓存
      localStorage.hisArr.setItem(this.shuru)
      this.shuru = ''  // 清空搜索值
    },
    clear: function () {
      localStorage.removeItem('hisArr')
    }
  },
  mounted: function () {

      this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then( response => {
      // console.log(response)
      this.$store.state.nowcity = response.body.name
    })
  }
  
  }
</script>
<style>
/* 

 */
</style>
