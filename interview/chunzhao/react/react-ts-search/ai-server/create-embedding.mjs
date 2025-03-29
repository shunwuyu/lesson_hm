import fs from 'fs/promises';
// 模块化 
import { client } from './app.service.mjs'

const inputFilePath = "./data/posts.json";
const outputFilePath = "./data/posts_with_embedding.json";
// node promisify 
const data  = await fs.readFile(inputFilePath, 'utf-8');
const posts = JSON.parse(data);
console.log(posts);
const postsWithEmbedding = [];

for (const {title, category} of posts) {
  const response = await client.embeddings.create({
    model: "text-embedding-ada-002",
    input: `标题：${title}; 分类：${category}`,
  });
  postsWithEmbedding.push({
    title,
    category,
    embedding: response.data[0].embedding,
  });
}

await fs.writeFile(outputFilePath, JSON.stringify(postsWithEmbedding));