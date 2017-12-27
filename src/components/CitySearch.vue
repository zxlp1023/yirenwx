<template>
  <div>
    <div class="weui-search-bar" id="searchBar">
      <form class="weui-search-bar__form" action="#">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search iconfont icon-search"></i>
          <input  type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
          <i class="weui-icon-search iconfont icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>  <!-- search bar -->
  </div>
</template>
<script>
  export default {
    name: 'CitySearch',

    data () {
      return {
        inputvalue: '',
        list: ''
      }
    },
    methods: {
      searchcity: function(){
        this.$http.get('http://cangdu.org:8001/v1/pois?city_id=' + this.$store.state.nowcity.id + '&keywords=' + this.inputvalue + '&type=search' ).then( response => {
          console.log(response)
          this.list = response.body
        }, response => {
          console.log(response)
        }

        )
      }
    }
  }
</script>


