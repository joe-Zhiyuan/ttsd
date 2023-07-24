import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from '@/store'
import { getToken } from "./auth";

// 设置多个 baseURL,请求不同api地址 超时时间
const service = axios.create({
  baseURL: 'https://tapi.tticar.com/express',
  timeout: 5000
})

// request 请求拦截
service.interceptors.request.use(config => {
  // 发送请求前

  if (store.getters.token) {
    config.headers['Authorization'] = getToken()
  }
  return config
}, error => {
  // 请求错误

  console.log(error)
  return Promise.reject(error)
})

// response 响应拦截
service.interceptors.response.use(response => {
  // 2xx范围内状态码
  // 对响应数据

  const res = response.data
  // 判断是不是返回状态码
  if (res.code !== 200) {
    Message({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000, // 自动关闭
    })

    // 判断是否需要重新登录 [非法登录，token过期，其他客户端已登录] 跳转到登录页
    if (res.code === 50008) {
      MessageBox.confirm('您已在其他登录或登录已过期，请重新登录！', '退出登录', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 获取token事件 刷新页面 ？？？
        store.dispatch('user/resetToken').then(() => {
          location.reload();
        })
      })
    }

    // 返回错误
    return Promise.reject(new Error(res.message || 'Error'));
  }
  return response
}, error => {
  // 2xx范围外状态码
  // 响应错误

  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

// 导出 请求方法
export default service