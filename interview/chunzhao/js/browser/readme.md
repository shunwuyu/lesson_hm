# js 与浏览器相关常考题

- 图片懒加载
  - clientHeihgt + scrollTop+ offsetTop
      clientHeihgt 可视区域高度
      scrollTop 滚动距离
      offsetTop 图片离开父元素的偏移量
    - 图片占位图
    <img src="" data-src="">
    - scroll 事件判断图片是否到达视口
    - 截流
  - getBoundingClientRect() 可以获取元素的位置与可视野口的位置
    比上个方案，在视窗比较这块更方便
  - intersectionObserver   HTML5 API 
    实现了监听window的scroll 事件、判断是否在视口中，以及节流三大功能
    - MutationObserver 改变 DOM 树的监听 style innerHTML child
    - ResizeObserver

## 浏览器缓存
  缓存是性能优化的核心

  - 强缓存
    不用发送http请求
    - Expires 过期时间 服务器和客户端可能不一致 http 1.0
    - Cache-Control(bug 修订) 过期时间 服务器和客户端一致 http 1.1
      Cache-Control: max-age=300 过期时间 300s
      别的值
      private  只能浏览器缓存， 中间的服务器（cdn）不能缓存
      no-cache 跳过当前缓存，进入协商缓存
      no-store 不缓存


  - 协商缓存
    需要发送http请求

    强缓存失效后， 浏览器在请求头中携带响应的缓存tag 来向服务器发送请求，由服务器根据这个tag来决定是否使用缓存

    Last-Modified / If-Modified-Since
    最后修改时间 服务器在响应头中加上这个字段
    客户端发送If-Modified-Since, 服务器端校验

    - 小于最新修改时间 返回新的资源
    - 304 使用缓存
    ETag / If-None-Match

    文本的唯一标识（性能开销大）， 内容改变了， 标识就会改变 响应头发给浏览器
    浏览器 IF-None-Match 发送给服务器， 服务器校验

  - 区别
    - 精度不同
      etag 精度更高
      Last-Modified 只能精确到1秒
    - 性能不同
      lastModified 性能开销小 只记录时间
      etag 生成hash 值

      服务器一般用etag 
- 缓存的位置
  - Memory Cache
  - Disk Cache 
  - Service Worker   PWA  Progress Web Application  离线缓存 类似于APP
    SPA

- 浏览器的本地缓存
  - Cookie
    开始时不是用来设计为本地存储的， 而是为了弥补HTTP 在状态管理上的不足。
    HTTP 是无状态的， 每次请求都是独立的， 无法记录状态
    Cookie 请求头 浏览器中存储的一个小文本  
    - 容量小 4KB
    - 性能缺陷  每次请求都要带上
    - 安全缺陷 
      httpOnly  XSS
      SameSite 
  - localStorage
    - 同源策略
    - localStorage 永久存储 不会发送给服务器端
    - 容量 5M
    - 操作方便
      localStorage.setItem('name', 'zs')
      getItem

    - sessionStorage
      会话级别， 窗口关闭，就不存在了

  - IndexedDB
    浏览器端非关系型数据库

    - 更大容量
    - 支持复杂查询

## if(a == 1 && a == 2) 成立
