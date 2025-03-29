# 防抖截流

- 性能优化
  减少执行次数
- 防抖
  debounce 只执行最后一次 
  setTimeout 
- 截流
  throttle 每隔一段时间执行一次
- 手写
  - 简单版本
- 应用场景  
  搜索框 ajaxSuggest (用户体验)  debounce `
  窗口resize debounce
  图片懒加载 throttle 
- 进阶版本
  - leading 先执行一下
  - trailing 结束时执行
  - 取消等待中的执行 cancel 
  - this上下文和参数
  - 内存优化