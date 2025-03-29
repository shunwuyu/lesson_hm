// 模拟大文件切片上传
async function uploadFileChunks(chunks, url, onProgress, onPause) {
  let isPaused = false;
  let uploadedChunks = 0;
  let abortController;

  // 暂停上传的函数
  const pauseUpload = () => {
      isPaused = true;
      if (abortController) {
          abortController.abort(); // 取消当前正在进行的请求
      }
      onPause();
  };

  // 上传每个切片
  for (let i = 0; i < chunks.length; i++) {
      if (isPaused) break;

      abortController = new AbortController();
      const signal = abortController.signal;

      const chunk = chunks[i];
      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('index', i);

      try {
          const response = await fetch(url, {
              method: 'POST',
              body: formData,
              signal
          });

          if (response.ok) {
              uploadedChunks++;
              onProgress(uploadedChunks / chunks.length);
          }
      } catch (error) {
          if (error.name === 'AbortError') {
              console.log('上传已暂停');
          } else {
              console.error('上传切片时出错:', error);
          }
      }
  }

  return { isPaused, uploadedChunks };
}

// 使用示例
const file = document.getElementById('fileInput').files[0];
const chunkSize = 1024 * 1024; // 1MB
const chunks = [];

for (let i = 0; i < file.size; i += chunkSize) {
  chunks.push(file.slice(i, i + chunkSize));
}

const uploadUrl = '/upload';

const { pauseUpload } = uploadFileChunks(chunks, uploadUrl, (progress) => {
  console.log(`上传进度: ${progress * 100}%`);
}, () => {
  console.log('上传已暂停');
});

// 模拟暂停按钮点击
document.getElementById('pauseButton').addEventListener('click', () => {
  pauseUpload();
});