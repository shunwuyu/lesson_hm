请介绍下302， 304 状态码

304 Not Modified 

301永久重定向（一律get） 302 临时跳转 307 临时重定向(保持请求的方法) 308 永久重定向 保持请求的方法

301：Moved Permanently
302：Found
307：Temporary Redirect
308：Permanent Redirect

## 分类
- 1xx Information 信息状态码 
  101 switch protocol 
- 2xx 成功状态码
  200 ok
  201 created
  204 No Content 成功删除内容
- 3XX 重定向状态码
  301 moved permanently 永久重定向
  302 found 临时重定向
  304 not modified 缓存
  307 temporary redirect 临时重定向
  308 permanent redirect 永久重定向
- 4XX 客户端错误状态码
  400 bad request 错误请求
  401 unauthorized 未授权
  403 forbidden 禁止访问
  404 not found 未找到
  405 method not allowed 方法不允许
- 5XX 服务器错误状态码
  