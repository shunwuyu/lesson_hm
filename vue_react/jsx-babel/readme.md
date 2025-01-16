# react JSX 

- es6 代码， 很老的浏览器 不支持 2015 年发布 
  const  => var 
  转换一种形式 
  babel 技术
  es6 => es5 
- stylus 
  .styl  => css 
- JSX => 原生js 执行的代码 

- babel
  - 任何的js 新特性， 立即投入代码生产 
    当前环境， 当下需要 
    async await es8 
  - es6+能够快速到来的， 得益于babel 工程化转译工具 
  - 前端工程化的 成熟 vite/babel/stylus/webpack 
  - vite 工程总负责， babel 其中的代码转译的一项
  - 家族 
    @babel/core 核心转译逻辑 const => var 
    @babel/cli 命令行工具 npx babel src -d lib  
    @babel/preset-env 配置转译规则
    presets 预处理  一个规则    "@babel/preset-env"
  - npx babel demo.js -o es5.js
    npx  不用安装， 直接执行某个包, 
    场景 项目可能要在其他机器上运行 
    @babel/cli 先工作  npx babel .... 
    已经安装 npx 找到 node_modules/.bin/babel 命令执行 
    x 执行 
  - @babel/core  核心的转译工作
  - .babelrc 配置文件
    presets 预处理  @babel/preset-env   es6 => es5 
    加了一个 @babel/preset-react   支持jsx 语法转译

- jsx ?
  - 并不是js 新特性
  - react UI 组件语法 ， react 组件编写更简单，可读性更好， 
    js 写html
  - jsx 不可以直接运行， 由babel 按 @babel/preset-react 转译
  - React.createElement(tag, props, children)
  - 虚拟DOM
  
- JSX 的理解  
  - 原生dom 性能差，直接用，胆战心惊， 
  - vue/react 封装了 dom 操作， 性能好， VDOM 
    React.createElement
    聚焦于业务， 而非dom 操作
  - babel 在， 设计JSX UI 组件语法 js 里写html一样
    babel 转译 jsx 语法 React.createElement 
  - html  UI 开发 简单
  - 进入到react 函数式组件中 



