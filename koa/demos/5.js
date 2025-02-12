const fs = require('fs');
// 使用 fs.promises 访问 promise-based 文件系统方法
const fsPromises = fs.promises; // fs 异步  promisify 
const Koa = require('koa');
const app = new Koa();

const main = async ctx => {
  ctx.response.type = 'html';
  // 回调函数来解决异步
  // console.log(fs.readFile('./index.html', () => {}), 
  // fsPromises.readFile('./index.html'));
  ctx.response.body = await fsPromises.readFile('./index.html');
}

app.use(main)
app.listen(3000);