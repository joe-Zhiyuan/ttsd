import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from '@/stroe'
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
  }
  return response
}, error => {
  // 2xx范围外状态码
  // 响应错误

  console.log(error)
  return Promise.reject(error)
})