import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  nowcity: { name: '', id: '' },
  selectcity: {name: '', id: ''},
  select: 'index',
  mycart: '',
  token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MTU0ODk3OTIsInN1YiI6IntcInVzZXJJZFwiOjksXCJsb2dpblRpbWVcIjoxNTE1NDg5NzkyNTMxfSJ9.xX-7eDe8hAGtGo-xGF8Y_c4_IRwdgqiIWK65V2pRkfQ'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
