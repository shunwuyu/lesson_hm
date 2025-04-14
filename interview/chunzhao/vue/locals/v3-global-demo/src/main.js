import { createApp } from 'vue'
import './style.css'
import i18n from './i18n'
import App from './App.vue'

const app = createApp(App)
app
  .use(i18n) // vue 框架 和生态 接口 install vue-router 
  .mount('#app')
