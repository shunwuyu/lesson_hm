import dotenv from 'dotenv';
import OpenAI  from "openai";
dotenv.config();
// console.log(, '////');

// 示例化openai 客户端 
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.302.ai/v1' // 转发 
})

// 良好的编程风格
// 主函数 执行的入口， 单点
// 函数申明
// function main() {
//   console.log('ai 全栈开始了 ')
// }
// es6 箭头函数 传统函数更简洁 
// 赋值语句
// 函数也是对象
// 函数表达式
// async 是函数修饰符，+  await  一对
const main = async () => {
  // openai 的调用是异步的 
  // await 等会儿
  // chat 聊天的方式调用
  // completions 完成问答
  // create 创建
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      // 对话列表
      messages: [
        {
          role: 'user', // 角色
          content:[
            {
              type: 'text',
              'text': '请描述以下图片的内容'
            },
            {
              type: 'image_url',
              "image_url": {
                "url": "https://img.huxiucdn.com/img/minitopic/202406/25/084826659075.jpg?imageView2/1/w/512/h/512/|imageMogr2/strip/interlace/1/quality/85"
              }
            }
          ]
        }
      ],
      max_tokens:300
    })
    console.log(response.choices[0].message.content)
  } catch(err) {
    console.log(err)
  }
  
}

main()