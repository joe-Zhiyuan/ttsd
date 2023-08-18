import Vue from 'vue';
import Vuex from 'vuex';
// 引入要导出的vuex保存的状态
import getters from './getters'

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 搜索文件夹下文件 搜索的目录， 是否还搜索其子目录， 匹配文件的正则表达式。
const modulesFiles = require.context('./modules', true, /\.js$/)

// 循环遍历所有文件，通过keys(), reduce()的循环将文件内导出数据、方法以键值对方式绑定到modules对象上
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 正则匹配获取module文件夹下的文件名称
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {});

console.log(modules, getters)

const store = new Vuex.Store({
  modules,
  getters
})

// 导出store
export default store