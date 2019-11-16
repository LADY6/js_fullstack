import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  minus (state) {
    state.count--
  }
}

const actions = {
  addAction (context, status) {
    context.commit('add', status)
  },
  minusAction ({commit}) {
    commit('minus')
  }
}

const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
