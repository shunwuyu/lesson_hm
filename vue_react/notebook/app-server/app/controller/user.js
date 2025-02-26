'use strict';

const Controller = require('egg').Controller;
// java 风格
class UserController extends Controller {
  // 注册
  async register() {
    // 解析请求体 username password
    const { ctx } = this;
    // 解构请求体
    const { username, password } = ctx.request.body;
    // 校验参数
    if (!username || !password) {
      ctx.body  = {
        code: 400,
        msg: '用户名或密码不能为空',
      }
      return 
    }

    // username 是否存在
    const userInfo = await ctx.service.user.getUserByName(username)
    console.log(userInfo, '////////');

  }

  async login() {

  }
}

module.exports = UserController;