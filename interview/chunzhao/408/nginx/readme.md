# nginx
一个高性能的HTTP和反向代理服务器 
配置文件 80 -> 8080 
www.baidu.com  80 (默认) 
localhost:8080

server {
    listen 80;  # 监听80端口的HTTP请求

    server_name your_domain_or_ip;  # 你的域名或服务器IP地址，请替换为实际值

    location / {
        proxy_pass http://127.0.0.1:5173;  # 将请求转发到本机的5173端口
        proxy_set_header Host $host;       # 确保原始请求的Host头部被正确转发
        proxy_set_header X-Real-IP $remote_addr; # 获取客户端真实IP
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 添加转发链信息
        proxy_set_header X-Forwarded-Proto $scheme; # 前端使用的协议(http或https)
    }
}

- 反向代理
  代表客户请求后端服务器，并将响应发送给客户端， 代理隐藏了后端服务器的真实地址，和正向代理相反
- 正向代理
  用户通过代理服务器访问互联网， 代理隐藏了用户的IP地址（用户知道 正向）

  反向代理是位于客户端和服务器间的中介，它接收请求并转发给后端服务器，同时将响应返回给客户端，隐藏了真实服务器信息（负载均衡 nginx 端口 proxy ）。