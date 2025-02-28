import { create } from 'zustand'
// create 用于创建状态store
// set 用于更新状态  函数
const useCounterStore = create((set) => ({
  count: 0,
  // 返回全新的状态
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore