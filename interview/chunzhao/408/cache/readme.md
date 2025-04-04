# 浏览器缓存
郭-1321231123-前端实习-AI全栈

- 二进制流传输
  - fs.createReadStream 可读流
  - pipe 管道
  - res  流向res -> req client 

- url 输入到看到页面
  - 域名解析
    dns 缓存
  - tcp/ip 
    三次握手
  - http 请求
    请求行 GET  /
  - cdn 服务器（静态资源）
    缓存
    响应速度
  - ngnix（俄罗斯） 
    - 负载均衡
      算法 轮询 返回不忙的服务器 
    - 方向代理
      http://localhost:8080
      www.baidu.com:8080 ?
      www.baidu.com:80 80默认的服务器端口
      :80->ngnix  配置 代理到8080 
  - server（硬件） 响应
    ：8080 -> web 服务器（node/java ）
    mvc 
  - html 结构到达浏览器 
    - - http2.0 server push 
    - DOM Tree + CSSOM Tee -> Render Tree + Layout + Paint  -> 图层（z-index transform 重绘 ）
    - link img, script
  - dns 预解析
  - 如果之前访问过的静态资源， 可以使用浏览器本地缓存
    - 强缓存
      响应头 Expires 到达之前，直接使用浏览器本地缓存
      memory cache -> disk cache ,如果过期了， 就会重新发起请求
      缺点？用户的时钟 不准
      - 相对时间 
      Cache-Control: max-age=600
    - 协商缓存
      - 假如强缓存没有命中，或过期
      - 如果文件没有改变，304 Not Modified 
      - 请求头和响应头 
        Last-Modified （文件修改时间）服务器端 
        If-Modified-Since （文件修改时间）浏览器端  
        服务器端时间不靠谱， 分布式 
        md5 计算 
        Etag （文件内容hash） 响应头 
        If-None-Match （文件内容hash）
  - 使用浏览器的下载线程  /tom.png 
  