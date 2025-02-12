const Koa = require('koa');
const app = new Koa();
// 数组
const handler = async(ctx, next)  => {
  try {
    await next();
  } catch(err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html'; // 响应头
    // ctx.response.body = {
    //   message: err.message
    // }
    ctx.response.body = '<p>Somthing wrong, please contact administrator.</p>';
    ctx.app.emit('error', err, ctx); // vue 子 向 父 汇报
  }
}

const main = async (ctx, next) => {
  ctx.throw(500); // 抛出一个错误
  // await next();
}

app.on('error', function(err) {
  console.log('logging error', err.message);
  console.log(err);
})

app.use(handler); // 挂载 有人兜底 错误处理中间件
app.use(main);
app.listen(3000);
