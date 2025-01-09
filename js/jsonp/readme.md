# 跨域 

- 运行环境
  - 前端
    V8 引擎在浏览器
  - 后端
    node 封装了v8, 剥离了html，借助c++ 调用系统服务
    http 模块 就是node 实现的

  - 为什么node 有模块化需求？
    - 引入各种模块
    - 后端功能复杂
    - mvc model 连数据库
      view 页面
      controller 控制 参数校验、逻辑等
  - require -> es6 module 

- 为何要学node?
  - 后端开发
  - 大前端 
  - 简单性能好

- CORS policy 
  - 安全策略 
  - baidu（domain）  -> google (不受信任度) 不同的域名
  - http://127.0.0.1:5500/  js script 所在的域名
    - http://localhost:3000 
    任然被block 

- 保护谁？
  - 后端， 制定规则 
    目前没有block 
  - 前端 
    JS 限制跨域请求 
    JS dom 修改页面的 跨域内容受限制 

- Cross-Origin Resource Sharing
  Origin  >  Domain + Port + Protocol 

## 前后端分离
  - vue 开发前端
  - node/java 开发后端
  - 开发日常 跨域是家常便饭

- 换条路走
  - script + src 
    - 不受CORS 限制 
  - http 请求 讲后段api 接口资源拿到
    - src = api url 
  - json 给我

- script 阻塞式加载并执行
- jsonp
  json with padding(函数)
  - 前端需要script 标签 src 执行api url 
  - 页面上埋下一个全局方法 window.callback
  - 需要后端的配合 数据外面包 函数 
- 封装一个 jsonp 函数
  - url + callback 
  - dom script 挂载 和 window[callback] = callback