# 工程化之vite and webpack 

- vite 脚手架
  - 自动加载ui组件库
  - alias 配置
  - 反向代理 

- webpack 老牌脚手架
  - 构建项目时 vite 比webpack 快 
  - webpack 配置比较复杂 
  - 项目依赖和代码打包
    vite 基于es module（ie 11+）(懒加载，其他的不用加载和打包 232ms), webpack 基于commonjs （浏览器不支持的，所有的文件都要打包好，慢, 5-10s）

- 复杂且定制性强的项目
- 老项目

- 启动http server 
- index.html 作为首页
- main.js 入口文件 
- jsx, css等 怎么样去编译


## 手写工程化流程
- 项目是SPA,但是项目的编译和基础建设是后端的，基于node 
  甚至使用 go rust 等高效编译
  npm run dev    webpack-dev-server --mode=development
  npm run build  打包 js css   上线后是不需要webpack,vite 的 
  webpack 需要提前打包所有的资源，所以慢
  vite 不需要打包
