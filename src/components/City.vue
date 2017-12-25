<template>
  <div>    
    <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人电贸</div>
    </div>
    <div class="cityBox">
      <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form" action="#">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search iconfont icon-search"></i>
            <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
            <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
          </div>
          <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <i class="weui-icon-search iconfont icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
      </div>  <!-- search bar -->
      <div class="hotCity">
        <div class="title"><i class="iconfont icon-location2"></i>成都市</div>
        <div class="cityTab">
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
          <a href="#">成都</a>
        </div>
      </div>
    </div> <!-- / hot city -->

    <!--显示点击的是哪一个字母-->
    <div id="showLetter" class="showLetter">
      <span>A</span>
    </div>
    <!--城市索引查询-->
    <div class="letter">
      <ul>
        <li>
          <a href="javascript:;">A</a>
        </li>
        <li>
          <a href="javascript:;">B</a>
        </li>
        <li>
          <a href="javascript:;">C</a>
        </li>
        <li>
          <a href="javascript:;">D</a>
        </li>
        <li>
          <a href="javascript:;">E</a>
        </li>
        <li>
          <a href="javascript:;">F</a>
        </li>
        <li>
          <a href="javascript:;">G</a>
        </li>
        <li>
          <a href="javascript:;">H</a>
        </li>
        <li>
          <a href="javascript:;">J</a>
        </li>
        <li>
          <a href="javascript:;">K</a>
        </li>
        <li>
          <a href="javascript:;">L</a>
        </li>
        <li>
          <a href="javascript:;">M</a>
        </li>
        <li>
          <a href="javascript:;">N</a>
        </li>
        <li>
          <a href="javascript:;">P</a>
        </li>
        <li>
          <a href="javascript:;">Q</a>
        </li>
        <li>
          <a href="javascript:;">R</a>
        </li>
        <li>
          <a href="javascript:;">S</a>
        </li>
        <li>
          <a href="javascript:;">T</a>
        </li>
        <li>
          <a href="javascript:;">W</a>
        </li>
        <li>
          <a href="javascript:;">X</a>
        </li>
        <li>
          <a href="javascript:;">Y</a>
        </li>
        <li>
          <a href="javascript:;">Z</a>
        </li>
      </ul>
    </div>
    <!--城市列表-->
    <div class="container">
      <div class="city">
        <div class="city-list" v-for="(items,index) in citylist">
          <!-- <span class="city-letter" id="A1" >{{citylist.index}}</span> -->
          <mt-cell class="city-letter" :title="index"></mt-cell>
          <p v-for="item in items">{{item.name}}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/style/city.css'
  export default {
    name: 'City',
    data () {
      return {
        title: '城市',
        citylist: ''
      }
    },
    mounted: function () {
    //生命周期
    this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
      this.citylist = response.body
      console.table(response)
    }), response => {
      console.log(response)
    }
    
  }
  }
</script>