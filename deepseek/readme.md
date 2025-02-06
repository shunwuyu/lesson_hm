## 春招执行方案

- 时间
  3月-5月 
- 大厂最容易
  - 语言能力
  - 面试能力
  - 算法 
- 3月份-4月份 面试新手期 4月份远程实习（AI远程实习） 
  - 拿下一个offer 150一天
    - 年前的vue 项目模版 旅行 80% 20% 修改  
    - transform + react  
    - node + 全栈 + vue/react    10天
    - leetcode 100+ 3题+

  - 第二个目标点，找到远程实习，面大厂之前有一份实习经验 （通过简历）
  - 4-5月份边实习边提升面试能力 （凯闻 ）
  - 百度/字节 大厂 + 未来AI大厂
  - 5.1 润出去  -  9月份  4月+ 

## deepseek
- 性价比高
  aigc 
  百万 tokens  1元 
  tokens 提问以及返回 按token计费 
  token 分词  

  参照物 gpt4 o1  每百万 280人民币  99.6% 省了
- 为什么省
  - OpenAI 堆算力 GPU 
  - 新的算法 甚至可以绕开 英伟达 cuda 编程 
  - DeepSeek V3 2048 块 H800  557.6万美元 ，meta llama3 是deepseek 的11倍
    openai No.1 闭源的 
    llama3  开源LLM No.1的
  - 英伟达股价大跌 
  - 用户  -》 赚钱 -》AI 

## DeepSeek AI 全栈APP
  前端 + 后端 + LLM = AI fullstuck 

- ai应用集合项目
  coze 工作流 + ai 应用
  deepseek  openai 的替代品 prompt 
  langchain  rag 应用开发 

- react(chatbot)  
- node koa 
  前端提供api 调用 
- LLM 请求（deepseek + ollama ）  302.ai
  离线大模型调用？

  react <-> koa <-> LLM 
- 大前端 （前后端分离）
  - 前端包着后端
    
    - 前端
    domain：5173
      - react 组件
    - 后端
    domain：3000 请求
      - koa 框架
      - http 服务 3000 伺服状态
      - 路由 /chatai  message ?
        - npm i koa-router (周边生态)
        - 实例化路由对象 new Router()
        - router.Method('/path', async (ctx) => {

        } ) 注册路由
        - ctx 上下文对象 request +  response
        - ctx.body 设置响应体 
    - 跨域 同源策略

- ollama
  - 302.ai ai 转发 online 大模型
  - 本地访问大模型的可能 
    某大厂， 开源的deepseek 
    ollama pull deepseek-r1:1.5b 拉取到本地 offline 调用 
    模型的微调 自己的业务或需求， 重新的练一下deepseek 
  - ollama pull llama3.2:latest  拉取到本地 
  -  const add  = (x, y) => x + y 编程 
     LLM(巨大的参数) nlp + 全球的知识（机器学习） + transfomer机制 => AIGC 回答  大模型函数
  - ollama run deepseek-r1:1.5b 运行 
    command line chatbot 
    全栈应用的方式来通信 
    - 11434 端口伺服 
    - /api/chat 聊天的方式LLM 响应
      /api/generate 生成的方式LLM 响应
    - http 请求支持 
  - 参数（处理问题的规模）尺寸
    内存（8G） 显卡 等硬件相关  
  - 集成deepseek 能力 可以实现了 

- koa 
  路由定义好，函数的方式来处理丛这个路由的用户，参数校验，逻辑功能, LLM axios 请求
  返回资源 ，结束请求。
  - 基于koa，koa-router 通过axios 向ollama 11434/api/chat 发送请求,获得LLM 响应
  - 封装AI LLM 接口 

- react 去axios 向koa AI LLM接口发送请求

- jsonp 
  js ajax/fetch cors 
  jsonp <script src=""></script> 
  callback({a:1})
  callback 

  同源策略会限制其读取响应内容以防信息泄露。而CORS（跨源资源共享）机制允许服务器通过特定的HTTP响应头告知浏览器该请求是被允许的，从而解除这种限制。因此，虽然同源策略会限制JavaScript读取跨域请求的响应，但不会直接“block”请求本身；相反，它控制的是能否访问请求的结果。

  cors 后端方案？允许你跨域 

  服务器端设置响应头，告诉浏览器允许跨域访问。
  ctx.set 上下文 响应头 
  Access-Control-Allow-Origin
  Access-Control-Allow-Methods
  Access-Control-Allow-Headers

  - options 预检请求 method之一
    温柔 
    跨域请求，会先发送一个options请求，询问服务器是否允许跨域访问。
    被允许，继续发送实际的请求 post 

- koa 服务， 烤面筋
  - 中间件函数 洋葱模型
  - 有顺序
  - 丛上到下去执行

- vue 和react 区别
  - vue  v-model 双向绑定
  - react 单向数据流 认为双向性能特别不好 
    单向 + 事件onChange
  - vue 支持事件修饰符 api 友好 
  - react 手写 