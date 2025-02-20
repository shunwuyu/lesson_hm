# React NoteBook 全栈

- npm i react-router-dom -S 
  --save 的简写  一直依赖  react-router-dom@7 
  --save-dev -D 开发阶段依赖
- 项目阶段
  - 开发阶段 development   vite 
  - 测试阶段 test   其他同事的电脑上 没有环境 npx 
  - 上线阶段 production    打包-》 项目部署？-》 dns -> 上线

- 编程风格
  - react 组件 由函数组件jsx 文件 + 样式文件css 组成
    - 组件目录大写 
    - 组件声明文件小写 名字叫index.jsx 
    引入的时候 直接引入组件目录即可， 组件类的作用， 同时不用去引入 index.jsx 
  - return (JSX)  dom树的对齐， 优雅

- 页面级别组件
  - 首页
    Home.vue 

- es6 module 的语法
  import React, { useState as , useEffect, useMemo } from 'react'
  default  解构的引入
  import React.useState from 'react'
  import * as React from 'react'

  as 起别名

- key 的用法
  循环输出组件，需有给唯一的key 值需要唯一
  update 性能 

- 选择框架
  - zarm 移动端react ui组件库
    指定3.1.2版本 npm i zarm@3.1.2
  - 引入组件 button
  - 引入样式
  - 引入配置ConfigProvider theme  primaryColor
  - 主题定制 theme primaryColor
- npm run build
  - 上线之前先打包
  - dist/ 结果目录
    性能 
    - src/ 开发目录
      代码质量和可读性
    - 不需要注释、换行等，只要浏览器运行就好 
      文件小，压缩， 传输更快
    - 组件打包成js文件， css 打包成一个css文件 
      性能优化 http 并发数 一个js 文件 
      - 依赖关系
        - 不需要模块化
          被依赖的放在上面， 依赖的放在下面
        - 递归依赖关系
        - 打包成一个js文件
    - vite 很快 
    - 截图
      size  gzip 大小 http 主动启动gzip   压缩传输的
      底层是tcp/ip 

- vite
  - 按需加载 vite-plugin-style-import 

- less stylus css 预编译
  - 快 
  - less 
  - 变量、嵌套、混合函数
  - module css 
    - style.module.less
    - 支持 css 模块
      - vite 申明 less -> 解析
      - {s.index} 

- 移动端适配
  rem 10rem = 宽度 
  - lib-flexible  rem 适配 
  - postcss-px2rem 包 自动化px 转 rem  提高开发效率
    - PostCSS 允许开发者通过一系列插件来处理和增强 CSS 文件，使其具备更高的可维护性、兼容性和性能。

- axios  配置
  - baseURL 
    - 前后端分离，前端访问的是后端的接口， 一般都会以/api 开头
    方便， baseURL 统一配置
    - axios + vite proxy
      跨域问题 新解决方案 
  - 请求、响应拦截器
    - 统一的token 设置
    - 统一的错误处理 
      401 404 500  !200 
    - res 丰富的 状态码 config  res ...  库的功能 
    - return res.data 直接返回数据 api一样简单
  - cookie http 1.0 
    - http 协议本身是无状态的 medthod url 返回结果一定一样
    - 小饼干 字符串
    - key=value;key2=value 
    - kb 关键 用户身份等  
    - 请求时都会默认带上， 太大的化会影响http 性能
    - expires 
    - domain 当下域名的cookie 
    - path 限制 cookie /api   /user 
    - httpOnly 请求时带上  js 没有办法获取，更安全 
      XSS 跨站脚本攻击 黑客通过 发文，评论，注入 获取cookie 的代码，并执行
      黑客使用我们cookie 访问某网站， 安全问题
      <script>   <  &lt;
    - secure 安全的cookie  https 协议下才会带上
## 业务开发
- NavBar组件
  - components 公共组件 
  - zarm TabBar TabBar.Item
    activeKey itemKey
  - change setActiveKey 
  - icon 
    - iconfont 定制
- CustomIcon 的组件
  Icon.createFromIconfont
- react-router-dom
  useNavigate  hook 
  navigateTo('/user')
  必须放到router 组件内

- 单页应用 SPA single page application 看过去像一个页面， 移动端 
  - 传统的a 标签 刷新页面 服务器重新渲染， 所有的html, 白屏 慢 体验不好
  - vue/react 优化体验
    - 不能白屏 不要去刷新整个页面 NavBar 
      HashRouter HistoryRouter 支持 hashChange pushState
      不用a 标签， 由router 统一管理
    - Routes router-view  一副牌 看到最上面一张 

- react props 类型约束
  - prop-types
  - 函数组件对象 propTypes 属性 
  - PropTypes.bool

- 
      

    