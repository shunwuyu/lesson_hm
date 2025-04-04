# 性能优化

- 渲染方面有没有考虑性能优化 
  - 重绘重排
    - 重绘？
    当元素的样式改变时， 浏览器重新绘制元素的过程，如改变颜色、背景等属性。
    - 重排
    DOM 元素的尺寸、位置发生改变时，浏览器需要重新计算布局， 影响到其他元素的位置和大小。

    重排必定会导致重绘， 重绘不一定会导致重排。

- bad work  
  - 批量修改DOM 
    切换类名或cssText 代替流程化一句句写
  - 文档碎片
    document.createDocumentFragment()
  - 脱离文档流进行操作
    先脱离（）
  - 缓存布局信息
  - 使用transform 代替位置调整

## 资源加载优化
  - 图片懒加载
    getBoundingClientRect()
    intersectionObserver
  - 路由懒加载 
    （） => import('')
    代码分割（code spliting） 懒加载的代码独立文件
  - 资源预加载 preload 
    预解析DNS 
    <link ref="prefetch" href="next-page.js" />
  - DNS 静态资源使用内容分发网络

## JS 执行优化
  - 防抖节流
  - web worker ? 提升计算性能 html5 新特性
  - requestAnimationFrame 
  - requestIdleCallback react fiber 机制 

## 框架层面优化
  - keep alive 缓存组件
  - react useMomo memo useCallback 
  - key 优化列表渲染

## 缓存策略
  - localStorage sessionStorage cookie 
  - 文件缓存 强缓存和协商缓存 

## 网络优化
  - CDN 加速 
  - Gzip 压缩
  - HTTP/2 多路复用 大文件上传 支持新版协议
  - DNS 预解析

## 首屏优化
  - SSR 
  - 骨架屏
  - 首屏数据预加载 http2.0 server push 

## 监控和分析
  - performance 
    减少首屏JS/CSS 体积
  - LightHouse 

- 用setTimeout模拟setInterval 会有什么问题
- promise 实现并发控制
- promise红绿灯
- 手写promise.allSettled
- 手写Promise 
- http2.0 多路复用 是不是越多越好？会有上限码？
- cursor 和windurf 用的多吗？占比多少？ trae用过吗？

