const Koa = require('koa');
const app = new Koa();
const { koaBody } = require('koa-body');

// get 没有请求体
const main = async (ctx) => {
  console.log(ctx.request.body)
  const body = ctx.request.body; // 请求体
  if (!body.name) ctx.throw(400, 'name required');
  ctx.body = { name: body.name};
}
app.use(koaBody());
app.use(main);
app.listen(3000);