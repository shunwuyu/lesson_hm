# 生命周期

- 先以vue3 为例
  - 三个阶段
    - 挂载前后 mount
    - 更新前后 update
    - 卸载前后 unmount
  - composition api 
    - onBeforeMount
    - onMounted
      发送请求 图标 swiper 幻灯片
    - onBeforeUpdate
    - onUpdated
      重新计算DOM 高度 llm 聊天内容高度  重新计算滚动条位置 
    - onBeforeUnmount
      dom 节点还在 移除定时器 事件监听 取消网络请求
    - onUnmounted

    - keep alive 特有的钩子
      - onActivated
      - onDeactivated

- vue2 比vue3 多了一个created 阶段， setup 函数 可以直接定义数据或初始化逻辑。

  - beforeCreate 实例化前 无法访问数据和方法，适合进行初始配置
  - created 访问数据和方法，适合进行数据初始化和设置
    接口请求
  - beforeMount 
  - mounted
  - beforeUpdate
  - updated
  - activated keepalive
  - deactivated
  - beforeDestroy
  - destroyed
  - errorCaptured 子组件编译错误
- vue3 推迟到onMounted 规避SSR 副作用并保证逻辑在客户端执行
- react 生命周期
  useEffect
    [] 挂载
    [loading] update
    () => {
      unmount
    } 
