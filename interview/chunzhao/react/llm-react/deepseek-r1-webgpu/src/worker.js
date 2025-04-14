import {
  AutoTokenizer,
  AutoModelForCausalLM
} from '@huggingface/transformers'

// 共情能力
// 面向对象的能力
// 封装 继承 多态
// 设计模式的思想 单例 
// 只会实例化一次 好管理 性能 推迟实例化
// transformers 
class TextGenerationPipeline {
  // 蒸馏 方法用的是Qwen 闭源模型   
  // 让面试官表达 请问他
  static model_id = "onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX";

  static async getInstance(progress_callback = null) {
    // 分词器
    this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
      progress_callback,
    });
    // 模型
    this.model ??= AutoModelForCausalLM.from_pretrained(this.model_id, {
      dtype: "q4f16",
      device: "webgpu",
      progress_callback,
    });

    return Promise.all([this.tokenizer, this.model]);
  }
}

// worker 线程 
// 不是普通的js 线程
// 不可以访问dom
async function check() {
  try {
    // DOM ， BOM 
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error('WebGPU is not supported!')
    }
  } catch(err) {
    self.postMessage({
      status: 'error',
      message: err.toString()
    });
  }
}

const load = async () => {
  self.postMessage({
    status: 'loading',
    data: 'Loading model...'
  })
  const [tokenizer, model] = await TextGenerationPipeline.getInstance((x) => {
    console.log(x);
    self.postMessage(x);
  })
  self.postMessage({
    status: 'loading',
    data: 'Compiling shaders and warming up model...!'
  })
  
  self.postMessage({
    status: 'ready'
  })
  
  
  
  // const inputs = await tokenizer("你好"); // 分词 llm 输入
  // const result = await model.generate({...inputs, max_new_tokens: 1})
  // console.log(result, '------------')
  // try {
  //   await model.generate({...inputs, max_new_tokens: 1000})
  // } catch(err) {
  //   console.log(err);
  // }
}

self.onmessage = function(e) {
  // console.log(e.data);
  const { type, data } = e.data

  switch(type) {
    case 'check':
    check();  
    break;
    case 'load':
      load();
    break;
  }
  // self.postMessage({
  //   message: 'worker 处理完成'
  // });
}