# 大文件上传
- 问题
  等好久  n
  失败 用户沮丧  移动 

- 切片
  1G 50片 
  重新
  断点续传 
  - 切片大小的规则 
    一般推荐的切片大小为1-5MB  2MB 
    较大的切片能减少HTTP请求数，提高传输效率(多路复用的上限)
    但过大会增加请求失败重试的成本
    较小的切片会增加总请求数量及服务器压力（并发数 有上限， 性能开销大）
  - 切片是什么？
    slice File.__proto__ = Blob.prototype.slice 
    File (整体) -> Blob(二进制对象) ->二进制(text/md image/jpg)
    Blob 帮前端处理二进制数据
    切片是Blob, 上传的是二进制对象

- http
  大文件  普通上传 1个http 连接
  分片 http 2.0 多路复用， 二进制流式（流ID） 
  n/p 

- 用户体验
  进度条  暂停  断点续传
  - input type=file 比较丑  
  - 进度条是用户体验的一部分，它可以让用户了解文件上传的进度。 告知用户在发生什么
  

- 全栈
  -  前端 upload 复杂
    - File 对象 html5 新特性， 让js 可以访问文件系统
    - Blob ·
    - FormData 表单数据 append
    - es6 map 表演 
      blob 数组 -> blob 详细信息数组 -> formData 数组  -> axios 请求数组
    
  - 后端

- 写一遍， 理解深度