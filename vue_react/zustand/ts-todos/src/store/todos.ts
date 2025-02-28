import { create } from 'zustand'
// ts 是js 的超级 直接写成js 就可以了
// 代码正确性
// 接口 自定义类型 对象的结构
// 分号隔开 不是JSON , 面向对象接口
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
// 约束 store
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// 范型 范指内部的类型
// <T> T 类型参数
const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        text,
        completed: false
      }
    ]
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
  })),
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}))

export default useTodoStore