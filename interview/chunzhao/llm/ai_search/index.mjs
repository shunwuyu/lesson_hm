import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
})
// 文本的嵌入向量
async function getEmbedding(text) {
  const response = await openai.embeddings.create({
    // 文本嵌入
    model: 'text-embedding-ada-002',
    input: text
  })
  return response.data[0].embedding;
}

function calculateSimilarity(a, b) {
  if (a.length !== b.length) {
      throw new Error('向量长度不匹配');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}


async function main() {
  const embedding1 = await getEmbedding('今晚吃什么？');
  const embedding2 = await getEmbedding('晚饭有什么菜啊？');
  const embedding3 = await getEmbedding('你怎么又在摸鱼？');

  const similarity1 = await calculateSimilarity(embedding1, embedding2);
  const similarity2 = await calculateSimilarity(embedding1, embedding3);
  console.log(similarity1, similarity2, '///////');
  // console.log(embedding, embedding.length);
}
main();