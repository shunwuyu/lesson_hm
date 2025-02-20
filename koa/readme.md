# koa

node 后端简单开发框架

- 中间件
  核心 洋葱模型
  - 从外到内 
  - 从内到外
  next 
- 路由
- api json ctx 
  上下文 ctx = request + response 
- async / await 

- 简历http server

- 后端的基础
  - node 1.js 会从硬盘中读取1.js 到内存 
  - 分配变量和执行
  - fs.createReadStream() 去硬盘读取文件

- 场景
  - redirect 重定向
    301 302 307 

- 错误处理中间件
  - 后端注意健壮性，稳定
  - 出错了，直接报错，node单线程就会挂掉，这个是灾难， 后面的用户没有办法访问
  - 洋葱模型和 try catch 
  - 记录下log, 方便排查
    - userAgent 记录  大数据分析

- cookie http 1.0 时代
  Cookie是网站存储在用户浏览器中的小型数据文件（kb, 字符串 view=7;），用于保存用户的会话信息、偏好设置或跟踪用户行为。
  'view=12; hello=world'
  - 浏览器会自动把cookie 发送给服务器 自动
  - cookie 在前端/后端都可以读写操作 自动发送
  localStorage

- 多个异步任务， all
  - **promise 实例**放到一个数组里面
  - **Promise.all()** 方法接受一个数组作为参数，数组中的每个元素都是一个 Promise 实例。
  - 所有的promise 都执行完了，才会返回结果
  - 会按promise 实例的顺序返回结果
  - 如果有一个promise 失败了，就会返回失败的结果

  - race
    返回第一个被解决的任务， 不管是成功还是失败
  
  - allSettled
    返回所有的结果，不管是成功还是失败

  - 并发-》并行