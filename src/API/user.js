import request from '@/utils/request'

/**
 * 登录-用户名密码登录
 * @param {*} data 
 */
export function loginInPassWord(data) {
  return request({
    url: '/ttsd/pc/login/password',
    method: 'POST',
    data
  })
}
/**
 * 获取登录者信息
 * @param {*} token 
 */
export function getInfo(token) {
  return request({
    url: '/ttsd/pc/login/password',
    method: 'POST',
    params: {token}
  })
}
/**
 * 退出登录
 */
export function loginOut() {
  return request({
    url: '/ttsd/pc/login/password',
    method: 'POST'
  })
}