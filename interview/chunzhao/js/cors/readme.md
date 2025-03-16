- 同源策略
- jsonp 有啥缺点？
  - 不安全 
    <script src=""></script>
    <script>
      fetch('')  
    </script>  XSS（注入恶意脚本）攻击 
    callback(data)
  - GET 方法， 不能post 
    script src 不能发送post 等其他请求
  - 会阻塞页面渲染， 影响性能
  - 不太好处理HTTP 错误， 回调函数只在成功时调用
  现代应用推荐 CORS 代替JSONP 
- CORS 
  跨域资源共享
  Access-Control-Allow-Origin: * 
    服务器设置允许跨域的域名
    跨域白名单
    - 允许跨域的域名数组
    - req.headers.origin 
    - indexOf 判断是否包含
    - 服务器设置响应头 Access-Control-Allow-Origin orign || * 
  Access-Control-Allow-Methods  GET POST HEAD 
    允许的请求方法
  Access-Control-Allow-Headers
    允许的请求头
  Access-Control-Allow-Credentials
    允许携带cookie
  Access-Control-Max-Age
    预检请求的缓存时间

- 预检请求
  - 简单请求
    - GET POST HEAD （用于询问服务器资源的头部信息）
  - 复杂请求,询问服务器同不同意
    - PATCH PUT DELETE .... 
    - 发送两个请求到服务器 
      - OPTIONS 用于查询针对服务器上特定资源支持的通信选项，通常用来检查跨域请求是否被允许。

- websocket
  不受同源策略的限制
  消息机制
  101 switching protocols

- postMessage html5 新特性
  iframe 标签 
  一个网页（A）， 嵌入(iframe)支付宝(B) 
  不跨域 

- vite proxy 反向代理
