import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 搜索文件夹下文件 搜索的目录， 是否还搜索其子目录， 匹配文件的正则表达式。
const modulesFiles = require.context('./modules', true, /\.js$/)

console.log(modulesFiles)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { // commit
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