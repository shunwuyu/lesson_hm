# keep alive 

- 性能优化
  Vue的keep-alive组件用于缓存组件实例，避免重复渲染，提升性能和切换体验。
- 缓存组件
  - 首页跳其他页面  router-view 
  - Component :is 
  - 替换 -> 切换

  - keep-alive 后组件没有卸载
  - 缓存状态

- transition 动画组件
  - 添加一些类名，生命周期
  v-enter-from(开始值) -> v-enter-active(transtion) -> v-enter-to(结束)
  v-leave-from -> v-leave-active -> v-leave-to