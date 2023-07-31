import request from '@/utils/request'

/**
 * 登录-用户名密码登录
 * @param {*} data 
 */
export function login(data) {
  return request({
    url: '/ttsd/pc/login/password',
    method: 'POST',
    data
  })
}