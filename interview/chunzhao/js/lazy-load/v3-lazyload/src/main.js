import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazyLoad from './directivies/lazyload'

const app = createApp(App)
// 注册全局指令
app.directive('lazy',lazyLoad) 
app
  .mount('#app')
