// node 内置的http 模块 
import http from 'http';
import OpenAI from 'openai';
import url from 'url';
import { config } from 'dotenv';

config({
  path: './.env'
});

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.agicto.cn/v1'
});

const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
  // 用户提的问题
  const messages = [{
    role: 'user',
    content: prompt
  }];
  // AIGC chat 接口
  const response = await client.chat.completions.create({
    model: model,
    messages: messages,
    // LLM 生成内容的随机性
    temperature: 0.1
  }) 
  return response.choices[0].message.content
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
  // 请求的 URL 字符串（req.url）解析为一个结构化的对象
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl)
  const queryObj = parsedUrl.query;
  // const {data, prompt} = queryObj;
  console.log(parsedUrl.query);
  const prompt = `
  ${queryObj.data}
  请根据上面的JSON数据，回答${queryObj.question} 这个问题
  `
  const result = await getCompletion(prompt)
  let info = {
    result
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/json')
  res.end(JSON.stringify(info))
})

server.listen(1314)