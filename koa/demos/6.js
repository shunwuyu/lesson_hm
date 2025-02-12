const path = require('path'); // 内置模块
const Koa = require('koa');
const app = new Koa();
// 静态服务
const serve = require('koa-static'); // 周边生态
// console.log(__dirname) // 当前项目的绝对路径
// 路径对象 返回路径
console.log(path.join(__dirname, 'static'))
const main = serve(path.join(__dirname, 'static'));

app.use(main)
app.listen(3000);