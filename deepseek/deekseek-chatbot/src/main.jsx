// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// react strictMode 执行一遍， 检验一遍
createRoot(document.getElementById('root')).render(
    <App />
)
