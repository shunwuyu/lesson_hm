import { createStore } from "vuex"
// - 单一状态树
const state = {
  count: 0
} 
// 改变
// 一家企业的财务
const mutations = {
  increment(state) {
    // mutations 才可以修改状态
    state.count++
  }
}

const actions = {
  // commit 提交一次修改
  increment: ({commit}) => commit('increment')
}

export default createStore({
  state,
  // getters,
  actions,
  mutations
})