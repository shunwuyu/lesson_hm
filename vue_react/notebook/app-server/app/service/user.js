'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserByName(username) {
    const { ctx } = this
    try {
      const result = await ctx.model.User.findOne({
        where: {
          username
        }
      })
      return result
    } catch(err) {
      console.log(err)
      return null
    }
  }

  async register(user) {
    const { ctx } = this
    try {
      // orm 
      // sequelize
      const result = await ctx.model.User.create(user)
      return result
    } catch(err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = UserService;