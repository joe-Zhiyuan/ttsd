// 导入登录、获取信息、退出登录方法
import { loginInPassWord, getInfo, loginOut } from '@/API/user'
// 导入token相关方法
import { getToken, setToken, removeToken } from '@/utils/auth'
// 导入路由
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  acatar: '',
  introduction: '',
  roles: []
}

// 更改 state 状态
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_ROLES: (state, routes) => {
    state.routes = routes
  }
}

// 异步更改 mutations
const actions = {
  // 登录
  loginInPassWord({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      loginInPassWord({ username, password }).then(response => {
        const { data } = response;
        console.log(data);
      }).catch(err => reject(err));
    })
  },

}

export default {
  // 命名空间，true会根据路径调整命名 uesr/loginInPassWord  继承父模块命名/嵌套命名
  namespaced: true,
  state,
  mutations,
  actions
}