import { createRoot } from 'react-dom/client'
import AppRouter from './router'

// vue.use 
// web 应用离不开react-router-dom 丰富的路由组件
createRoot(document.getElementById('root')).render(
  <AppRouter></AppRouter>
)
