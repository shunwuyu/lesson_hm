import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入index.js 
import router from './router' // 路由对象

const app = createApp(App) // vue 根组件 -> 
  // app 对象 use 方法
console.log(app)
// focus 业务
// vue周边生态就起来了
app
  .use(router) // 插件使用路由功能
  .mount('#app') //-> 挂载点
