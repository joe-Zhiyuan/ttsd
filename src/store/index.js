import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  actions: {
    increment ({commit, state}) {
      console.log(state.count);
      commit('increment')
    }
  }
})

// 导出store
export default store