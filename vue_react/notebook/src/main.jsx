import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'lib-flexible/flexible'
import './index.css'
// import Index from './views/Index/index.jsx'

createRoot(document.getElementById('root')).render(
  <App />,
)
