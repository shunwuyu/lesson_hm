function throttle (func, wait) {
  var context, args;
  var previous = 0; // 上次的执行时间
  return function() {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}