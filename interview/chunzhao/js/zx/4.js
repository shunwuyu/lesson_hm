// # 手写bind
// 柯里化
Function.prototype.mybind = function(context, ...args) {
  return (...newArgs) => {
    return this.call(context, ...args, ...newArgs)
  }
}