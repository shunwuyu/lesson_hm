const Controller = require('egg').Controller;

class UploadController extends Controller {
  async index() {

    const { ctx, app } = this
    // 用户  身份验证 jwt 
    try {
      let user_id;
      const token = ctx.request.header.authorization;
      const decode = app.jwt.verify(token, app.config.jwt.secret);
      if (!decode) return
      console.log(decode);
      user_id = decode.id;
      ctx.body = {
        code: 200,
        msg: '上传成功',
        data: decode
      }
    } catch(err) {
      
    }
  }
}

module.exports =  UploadController;