// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 完整引入MinUI
import MintUI from 'mint-ui'
// 引入我的scss文件
import 'mint-ui/lib/style.css'
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

// 引入Vuex
import store from './store/index'

// 引入resource
// import Resource from 'vue-resource'
// Vue.use(Resource)

// 引入 axios
import axios from 'axios'
// import qs from 'qs'
// Vue.prototype.axios = axios //组件调用this.axios.get(...)
// Vue.prototype.$ajax = axios  //换个名字 组件调用this.$ajax.get(...)
window.axios = axios  // 组件中调用 axios.get(...)

// axios.defaults.baseURL = 'http://211.149.219.18:8818/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求的拦截器
// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token')
//   const uid = localStorage.getItem('uid')
//   // 判断请求的类型
//   // 如果是post请求就把默认参数拼到data里面
//   // 如果是get请求就拼到params里面
//   if (config.method === 'post') {
//     let data = qs.parse(config.data)

//     config.data = qs.stringify({
//       token: token,
//       uid: uid,
//       ...data
//     })
//   } else if (config.method === 'get') {
//     config.params = {
//       token: token,
//       uid: uid,
//       ...config.params
//     }
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// })

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
