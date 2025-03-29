# next 
- react *全栈*框架
  - SSR 服务器端渲染
    - 首屏加载快
    - SEO 
    Next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效。
  - vercel 
  01.dev AI 代码生成工具
  - 企业站

- notebook 笔记本
  - 后端 note CRUD 
    - next.js 全栈框架
    - redis（内存） mongodb NOSQL 
  - 前端
    - noteList
    - search
    - new
    - edit
    - delete

- 设计组件？
  layout
  page 
    component

- 约定俗成的next
  - alias jsconfig.json
  - layout.js 布局
    children  vue slot 
    - page.js 页面
  
- npm 包
  - dayjs
  - uuid 并发

- 组件的设计
  - 组件的拆分粒度
    - 复用
    - 管理
    - 下线方便
  - 复杂组件
    SidebarNoteItem
    - 可展开收起
    - skeleton 骨架屏
      用户体验优化方案
      loading(菊花)好在哪？基本的格局
    - 动态样式 展开/激活
    - 新增/修改后的动画  flash 
      触发onAnimationEnd 时间 移除flash

- react hook
  - useRef
  - useTransition 方便？transition  isPending true  

- next.js 服务器端组件和客户端组件
  - SidebarNoteItemHeader 粒度细化，拆分后成为了服务器端组件
  - SidebarNoteItemContent 事件交互... use client 申明

- Suspense
  Suspense 用于处理异步加载，实现优雅过渡
  fallback 
  组件的 promise 

- 详情页
  - promise 之前 loading.js 会显示 
  - skeleton
  - marked markdown 转 html
  - sanitizeHtml 过滤 html 标签 XSS 攻击
  - dangerouslySetInnerHTML 渲染 html
    ```js
    var a = 1;
    ```
    <pre><code class="language-js">var a = 1;
    </code></pre>
