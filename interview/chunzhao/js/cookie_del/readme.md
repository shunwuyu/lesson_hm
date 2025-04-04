# 如何删除cookie

- cookie 本地存储 请求传输 4KB
- Domain 域名
  document.cookie = 'token=123;domain=baidu.com;'
- path 路径
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;'
- Expires/Max-Age 
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;max-age=0;'
- Secure 只在https 下传输
- HttpOnly 禁止js 读取 XSS 
- SameSite 限制第三方cookie
  - Strict 不允许第三方携带
  - Lax 允许第三方携带
  - None 允许第三方携带