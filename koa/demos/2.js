const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

// 中间件本质是函数
// const main = ctx => {
//   if ( ctx.request.path !== '/' ) { // 不是首页
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">IndexPage</a>';
//   } else {
//     ctx.response.type = 'text';
//     ctx.response.body = '<h1>Hello World</h1>';
//   }
// }

const main = ctx => {
  ctx.response.body = 'hello world'
}

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}

// app.use(main); //启用中间件
app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3000);