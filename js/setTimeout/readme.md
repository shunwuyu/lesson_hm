# 定时器

- JS 是单线程的， 只有一个主线程
- setTimeout 是异步执行的计时器，会在主线程执行完后才执行
  callback 函数 放入 event loop  ， 时间（ms）
- 一定会在 指定时间后执行吗？
- 找回？
  执行的是回调函数
- 定时器ID 

- 如何用 setTimeout 实现 setInterval? 
  - 场景编程题
  - 手写题  fn 
    - customInterval
    - callback , t 参数
    - 可以用setTimeout 实现 
    - 递归 
    - 关闭？

- call
  - 函数对象上的方法