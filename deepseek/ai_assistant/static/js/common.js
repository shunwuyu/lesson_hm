/** DOM 树ready 之后 onLoad 晚了， DOMContentLoaded html节点
 *  事件监听
 *  请求....
 * 不出问题， 最快的时机（onLoad 早）
 */
document.addEventListener('DOMContentLoaded', function() {
  // console.log('DOMContentLoaded')
  const backToTopButton = document.getElementById('back-to-top');
  const chatLogElement = document.getElementById('chat-log');
  const messageInput = document.getElementById('message');
  const loadingIndicator = document.querySelector('.loading-indicator');

  // scrollTop 
  chatLogElement.addEventListener('scroll', () => {
    if (chatLogElement.scrollTop > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  })

  backToTopButton.addEventListener('click', () => {
    chatLogElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
  // 添加消息 chat-log
  const appendMessage = (role, content) => {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message', role); 

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', `${role}-bubble`);
    
    if (role === 'assistant') {

    } else {
      bubble.textContent = content;
      messageWrapper.appendChild(bubble);
      chatLogElement.scrollTop = chatLogElement.scrollHeight;
    }
    messageWrapper.appendChild(bubble);
    chatLogElement.appendChild(messageWrapper);
    
  }
  // 显示加载中
  const showLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }
  // 隐藏加载中
  const hideLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }

  // 发送消息
  document.querySelector('.send-icon').addEventListener('click', async () => {
    const messageText = messageInput.value.trim();

    if (messageText) {
      appendMessage('user', messageText); // 封装 
      messageInput.value = '';
      try {
        showLoadingIndicator();

      } catch(error) {

      }
    }

  })

})
/* 所有的资源加载完了 */
// window.addEventListener('load', function(event) {
//   // 当所有资源（包括样式表、图片等）加载完毕后执行的代码
//   // console.log('All resources finished loading');
// });