# 蔚来面试题
  综合起来，是比较优质的面试。


## 面试题会有哪些？
  - 介绍自己
  - 项目的亮点和难点
  - 八股文  
    css/es6/html5/js
  - vue/react 的知识点和底层原理
  - 手写题 
  - 算法题
  - 计算机基础 （网络/操作系统/数据库/编译原理）
  - 性能优化
  - 工程化

### 计算机基础

1. DNS Domain Name System 域名解析系统 是将域名转换为IP地址的分布式数据库系统。
  IP 地址不好记忆
  ping juejin.cn
  juejin.cn  ->  ip 映射
  cn/com/net  注册和购买  g.cn jd.com mi.com  

  - DNS 解析（查询）的过程（路径）
    - juejin.cn 上过， 走缓存(性能)
      - 浏览器缓存  
      - 操作系统本地缓存 程序间的dns共享 
      - 路由器缓存
      - 本地hosts文件？  127.0.0.1  taobao.com  

    - x.com 没有缓存， 向上查询 
      - 查询本地的dns 解析器（我们的上网提供商 电信/移动/联通）。
    - 递归查询dns 服务器  县-市-省-国家 绝大部分解析都能完成。
    - 顶级域名服务器  .com .cn .net .org .gov 查询 拿到ip地址
    - dns 服务器 缓存
    - 本地 缓存  
    - dns 服务器  


2. 以下程序的输出
  - sort api 的理解  a-b b-a 
  - 修改数组 
    push pop shift unshift splice reverse sort 
    不修改数组
    slice map filter concat join ... 

- 如何获取白屏时间 性能优化 
  白屏时间（性能优化的专业术语 First Paint Time） 浏览器从响应用户输入地址， 到浏览器开始显示内容的时间。
  DomContentLoaded（html 结构 触发）  onload(晚)

  白屏时间 = 页面开始展示的时间点 - 开始请求的时间点

  白屏会发生的东西  
  dns 解析 -> 建立TCP 链接（三次握手） -> 发起http请求 -> 服务器响应 -> 浏览器解析html -> 浏览器渲染页面 -> 页面展示第一个标签

  物理层 网卡（mac 地址）-> 数据链路层 -> 网络层 -> 传输层(三次握手， 可靠的传输TCP/IP 发送和收到的能力)
  -> 应用层 -> 浏览器

  网络、服务器性能 、 前端页面结构 





