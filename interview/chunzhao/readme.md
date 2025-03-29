# 25年春招

## 策略

题目是有套路的，使用题库。
刷题 投， 了解面试官心态。

## 项目的亮点
- 数据可视化
  - three.js 
  导演的视角 3d的世界
  camera scene(material+ 模型) renderer 
  - vue scoped 组件样式隔离 不影响外面，也不受影响
    实现原理是在组件的css上添加一个唯一的属性（data-v-hash值），通过属性选择器来实现的。

  - html5 canvas 画布
    3d WebGL (web graphic library) 基于(OPENGL 游戏引擎)


## JS 基础编程能力
- 4十万条数据
- 字符串反转 有多少种实现方式 
  - 数组 reverse 
    字符串 -> 数组  
      split/展开运算符/reduce/map
    循环
      计数循环 length -1 
      for of  迭代每一个字符
    递归思想  substr(1)   charAt
    正则
    
    api -> 算法思想-> 编程能力 统一考察 

- 数组去重 
- event loop 顺序
- 5script defer async 

## CSS 
- 怎么实现样式隔离
- css3 新特性
- 0.5px 怎么实现
- inline 
  demo1

## HTML5 
- websocket-chat
- localStorage、sessionStorage、Cookie 的大小，区别
  

## VUE 
- v-if/v-show 的区别
- vue 组件通信
- vue 响应式

## 源码
- 路由

## 性能优化
- 十万条数据怎么渲染？

## LLM 
- 流式输出
  - openai 等接口  completion/chat stream: true
  - 边生成边输出 流式输出 
  - 大模型思考时间 用户体验， 流式输出更好。
  - 大模型是基于token AIGC生成的
    神经网络一个一个token生成，后面的token 基于前面的token 推理出来的
  - 网络层的
    Http 0.9
    HTTP 1.0
    HTTP 1.1
    HTTP 2.0 服务器推送
    HTTP/2 服务器推送允许服务器主动向客户端发送数据，而无需等待客户端明确请求，从而提高页面加载速度和性能。
    HTTP 3.0 
    TCP/IP（可靠的 所有的数据帧到达（丢包 重传）， 按顺序， ） 区别于 UDP (数据暴， 视屏 直播 丢包)
  - 后端
    路由
    响应头 text/event-stream keep-alive 
    ctx.res.write(`data:${chunk}`)
  - 前端
    不再是一次性返回 
## 场景题目
- 类型判断

## 408
- b.com 上携带cookie 在b.com下能不能拿到？
  408/abcookie

## git


- 甘总-》财哥
  rag + cursor + dify(agent) 
  AI  产品观念
- 