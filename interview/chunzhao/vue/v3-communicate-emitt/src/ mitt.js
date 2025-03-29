// 被共享
import mitt from 'mitt'// 基于eventBus 实现通信
// 发布者 
// 和emitter 生成订阅关系
const emitter = mitt() // 创建一个mitt实例 单例
export default emitter