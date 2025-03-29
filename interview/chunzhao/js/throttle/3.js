function throttle(func, wait, options={}) {
  // 定义内部变量
  let timeout, context, args, result;
  let previous = 0; // 上次执行的时间戳
  // if (!options) options = {}; // 如果没有传入options，使用默认空对象

  // 延迟执行函数
  const later = function() {
      // 根据leading选项决定previous的值
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null; // 清除定时器
      func.apply(context, args); // 执行目标函数
      // 如果没有定时器，清除上下文和参数引用
      if (!timeout) context = args = null;
  };

  // 返回的截流函数
  var throttled = function() {
      var now = new Date().getTime();
      // 如果是第一次调用且leading为false，设置previous为当前时间
      if (!previous && options.leading === false) previous = now;
      // 计算剩余等待时间
      var remaining = wait - (now - previous);
      // 保存当前上下文和参数
      context = this;
      args = arguments;
      
      // 如果剩余时间小于等于0或系统时间被修改
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now; // 更新上次执行时间
          func.apply(context, args); // 立即执行
          // 如果没有定时器，清除上下文和参数引用
          if (!timeout) context = args = null;
      } 
      // 如果没有定时器且trailing不为false，设置延迟执行  第一次？
      else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  
  // 添加取消方法
  throttled.cancel = function() {
      clearTimeout(timeout); // 清除定时器
      previous = 0; // 重置上次执行时间
      timeout = null; // 清除定时器引用
  }
  
  return throttled; // 返回截流后的函数
}