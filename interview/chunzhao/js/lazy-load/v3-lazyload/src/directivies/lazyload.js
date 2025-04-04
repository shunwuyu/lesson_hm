// vue 生命周期
export default {
  mounted(el,binding){
    console.log(el , binding, '-------------')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('||||')
        if (entry.isIntersecting) {
          console.log('----------')
          // 加载图片
          const img = new Image()
          img.src = binding.value
          img.onload = () => {
            el.src = img.src
          }
          // 停止监听
          observer.unobserve(el)
          
        }
      })
    })
    observer.observe(el);
    el._lazy_observer = observer;
  },
  beforeUnmount(el) {
    if (el._lazy_observer) {
      el._lazy_observer.unobserve(el)
      delete el._lazy_observer;
    }
  }
}