import request from './request.js'
// 项目所有的向后端请求接口都在这管理

// 登录接口
// /api/login  server 响应 apifox 测试OK? 
// 前后端 全栈的解耦 
export const login = (body) => request.post('/api/login', body).then(res => {
  return res;
})
// 协议 域名  端口          路径           queryString 参数
// http://localhost:5173/api/getUserInfo?token=12312

export const getUserInfo = () => request.get('/api/getUserInfo').then(res => {
  return res;
})


