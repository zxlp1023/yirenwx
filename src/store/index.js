import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  nowcity: { name: '', id: '' },  // 当前定位城市
  selectcity: {name: '', id: ''},  // 重新选择的城市
  select: 'index',
  imgUrl: 'http://youmehe.oss-cn-beijing.aliyuncs.com/image/'
  // mycart: '',

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
