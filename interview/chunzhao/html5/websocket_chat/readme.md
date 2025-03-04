- TCP/IP 是传输层协议，
  建立连接 三次握手， 四次挥手
- HTTP 协议， 而 Socket 是应用层协议。 
  - 长链接
  - 消息推送
  - 广播
- B/S 架构
- 即时通讯  Socket 协议

- http 协议 和 websocket 区别
  - http 是无状态的（独立的，url, 返回一致 cookie authorization） ， websocket 是有状态的(socket 连接 分配一个socket id )
  - http 是单向的， websocket 是双向的
    http client -> request -> server -> response -> client 单向
    http server 不可以主动向client 发送消息
    websocket 双向 服务器可以主动向client 发送消息
  - http 是基于请求响应的， websocket 是基于事件的
    onmessage 
    send 
- websocket 服务搭建流程
  - 首先基于http服务 访问chat 页面
    只要一次
    http://localhost:3001/
  - html5 websocket 向服务器端的socket 服务发起连接
    ws://localhost:3001/
    101 Switching Protocols 切换了协议
    接下来都是双向、有状态的socket 协议
    ws://localhost:3001/
  - client -> server 
    server -> client 
    client -> client 
    基于事件的通讯
    send   onmessage 

- html5 websocket 
- http 和websocket 区别
- 状态码 101 switch protocols