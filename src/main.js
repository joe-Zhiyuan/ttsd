import Vue from 'vue'
import App from './App.vue'

// cookies存储优化API
import Cookies from 'js-cookie'

// css样式重置，统一化
import 'normalize.css'

// 完整引入element-ui
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './style/element-variables.scss'
// 语言国际化
import enLang from 'element-ui/lib/locale/lang/en'

// 公用css
import '@/style/index.scss'

// Vuex
import store from './store'
// 路由
import router from './router'

// 使用，全局配置element-ui（组件的默认尺寸、语言）
Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  locale: enLang
})

// 去除生产提示
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
