<template>
  <div>
    <div class="searchBar p05">
      <!-- 如果选择的城市存在,就显示它, 否则显示默认定位的城市 -->
      <router-link to="City" class="city" v-if=" this.$store.state.selectcity.name !== '' "><i class="icon iconfont icon-location1"></i>{{this.$store.state.selectcity.name}}</router-link>
      <router-link to="City" class="city" v-else=""><i class="icon iconfont icon-location1"></i>{{this.$store.state.nowcity.name}}</router-link>
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
                <input  @keyup.enter="searchPros" v-model="inputvalue"  type="search" class="weui-search-bar__input" id="searchInput" placeholder="请输入店名或菜品" required="">
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
        <ul class="s-history" v-if="his!==''">
          <div class="title"><i class="iconfont icon-trash fr" @click="removehis"></i> 历史搜索</div>
          <a href="javascript:;" v-for="item in his">{{item.name}}</a>
        </ul>
        <div class="weui-panel pro-index search-list" v-if="list !== ''" >
          <div class="weui-panel__bd" v-for="item in list" @click="goaddress({name:item.address,url:item.geohash})">
            <a class="weui-media-box weui-media-box_appmsg" >      
              <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" src="../../src/assets/img/up/2.jpg" alt="">
              </div>
              <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">NEW新款上新</h4>
                <p class="weui-media-box__desc">年度新款等您来抢2</p>
                <div class="item-star">
                  <span class="star star-50"></span>
                  <span>4.8</span>
                </div>
                <div class="item-price">
                  <span class="price">111.00</span>
                  <span class="buyers">2311</span>
                </div>
              </div>
            <!-- </a> -->
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
  name: "Search",
  data () {
    return {
      inputvalue: "",
      list: "",
      his: ""
    };
  },
  methods: {
    searchPros: function () {
        axios.get(
          "http://cangdu.org:8001/v1/pois?city_id=" +
            this.$store.state.nowcity.id +
            "&keyword=" +
            this.inputvalue +
            "&type=search"
        )
        .then(response => {
          console.log(response);
          // console.log(this.$store.state.nowcity)
          this.list = response.data;

          // 如果没有搜到内容
          if (response.body == "") {
            Toast("抱歉,没有找到相关产品");
          }
        });
    },
    goaddress: function(e) {
      var arr = [];
      if (localStorage.getItem("his")) {
        arr = JSON.parse(localStorage.getItem("his"));
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name == e.name) {
            var isok = true;
          }
        }
        if (!isok) {
          arr.unshift(e);
        }
      } else {
        arr.unshift(e);
      }
      localStorage.setItem("his", JSON.stringify(arr));
      this.his = JSON.parse(localStorage.getItem("his"));
      this.list = "";
    },
    removehis: function() {
      localStorage.removeItem("his");
      this.his = "";
    }
  },
  mounted: function() {

    // 获取定位
    axios.get("/api/v1/cities?type=guess").then(response => {
        this.$store.state.nowcity = response.data;
      });

    //检查默认有没有本地缓存
    if (localStorage.getItem("his")) {
      this.his = JSON.parse(localStorage.getItem("his"));
    }
    /*     console.log(111111)
    console.log(this.$store.state.nowcity.name + this.$store.state.nowcity.id)
    console.log(this.$store.state.selectcity.name +this.$store.state.selectcity.id) */
  }
};
</script>
<style <style lang="scss">

</style>

