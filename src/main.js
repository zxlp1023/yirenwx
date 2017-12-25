// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 完整引入MinUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入我的scss文件
import './assets/style/weui.min.css'
import './assets/style/jquery-weui.min.css'
import './assets/style/yiren.scss'

// 用我的自定义颜色覆盖mintui的颜色
// import './assets/style/mymintui.scss'

// import './assets/style/mycolor.scss'
import App from './App'
import router from './router'
// 引入jq
// import $ from 'jquery'
// console.log($('#app'))

// 引入resource
import Resource from 'vue-resource'
Vue.use(Resource)

// 引入Vuex
// import store from './store/index'
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  template: '<App/>',
  components: { App }
})
