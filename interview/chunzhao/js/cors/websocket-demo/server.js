const WebSocket = require('ws')
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('WebSocket Server')
})
// web +  socket 
const wss = new WebSocket.Server({
  server,
  path: '/ws'
})

wss.on('connection', (ws) => {
  console.log('Client connected')
  // 双向通信
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`)
    ws.send(`Server received: ${message}`)
  })
  ws.send('Welcome to the WebSocket server')
})

server.listen(8080, () => {
  console.log('WebSocket Server is running on port 8080')
})
// 1. 创建服务器 http
// 2. 创建 WebSocket 服务器
// 3. 简历一次 http 连接