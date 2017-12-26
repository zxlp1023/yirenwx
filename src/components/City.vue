<template>
  <div>    
    <div class="backBar">
      <router-link to="/" > <i class="iconfont icon-back"></i> </router-link>
      <div class="title" v-text="title">亿人共享</div>
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
        <div class="title"><i class="iconfont icon-location2"></i>{{$store.state.nowcity}}</div>
        <div class="cityTab">
          <!-- <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
            {{item.name}}
          </router-link>   -->
          <router-link @click="gocity(item.name)" v-for="item in hotcity" :to="SelectCity" :key='item.id'> {{item.name}}</router-link>
          <!-- <router-link v-for="item in hotcity" :to="'/City/' + item.id" :key='item.id'> {{item.name}}</router-link> -->
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
        <div class="city-list" v-for="(items,index) in getlist">
          <span class="city-letter" :id="(index)+1" v-text="index"></span>
          <!-- <mt-cell class="city-letter" :title="index" :id="(index)+1"></mt-cell> -->

          <!-- <p v-for="item in items">{{item.name}}</p> -->
          <!-- <router-link v-for="item in items" :to="'/city/' + item.id" :key='item.id'> {{item.name}}</router-link> -->
          <router-link @click="gocity" v-for="item in items" :to="'/City/'+ item.id" :key='item.id'>{{item.name}} </router-link>
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
        // nowcity: '',
        hotcity: '',
        citylist: ''
      }
    },
    methods: {
      gocity: function (e) {
        this.$router.push('city')
        this.$store.state.nowcity = e
      }
    },
    mounted: function () {
    //定位城市
    this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then( response => {
      // console.log(response)
      this.$store.state.nowcity = response.body.name
    })

    //热门城市
    this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then( response => {
      // console.log(response)
      this.hotcity = response.body
    })     

    // 所有城市
    this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
      this.citylist = response.body
      
    }), response => {
      // console.log(response)
    }

  },
  computed: {
    getlist: function () {
      var mycitylist = {}
      for(let i=65; i<=90; i++){
        let num = String.fromCharCode(i)
        mycitylist[num] = this.citylist[num]
      }
      return mycitylist
    }
  }
}
</script>