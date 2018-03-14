import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const state = {
  sitename: 'Search Product',
  apiUri: 'api/products',
  products: [],
  results: [],
  isFound: false
}
export const actions = {
  actResults: function ({commit}, val) {
    commit('resetResults', val)
  }
}
export const mutations = {
  resetResults: function (state, val) {
    if (val !== '') {
      state.results.push(val)
    }
  }
}
export const getters = {
  getProducts: state => state.products,
  getResults: state => state.results,
  getApiUri: (state, getters) => (path) => {
    return state.apiUri + path
  }
}
export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
