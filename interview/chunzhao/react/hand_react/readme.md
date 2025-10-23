# 手写react

- requestIdleCallback

- JSX == React.createElement(tag, props, children)

- react 是react框架的命名空间
  const react = {
    createElement
  }

  const createElement = () => {
    return {
      'tag',
      props:{
        children:[]
      }
    }
  }

  const createTextElement = () => {}
  return {
    '',
    props: {
      nodeValue: 'fdfff',
      children:[]
    }
  }

- React.createElement 方法用于创建 React 元素，是 JSX 编译后的底层实现，构建虚拟 DOM 节点的核心。

- 在 React 中，Fiber 节点是表示组件状态的工作单元，每个 Fiber 对应一个组件或 DOM 元素，内部包含指向父子兄弟节点的指针、更新队列、优先级等信息，用于实现可中断、可恢复的任务调度。