// 字符大写
var toUpperCase = function(x) {
  return x.toUpperCase();
}
// 小写
var toLowerCase = function(x) {
  return x.toLowerCase();
}
// 字符拼接
var hello = function(x) {
  return 'HELLO, ' + x; 
}
// 组合toUpperCase和hello -> greet
// 高阶函数
// var greet = function(x) {
//   return hello(toUpperCase(x));
// }
// 具体
// var greet2 = function(x) {
//   return hello(toLowerCase(x));
// }

// 组合抽象函数 C = A(B(x)) 

// console.log(greet('kevin'))
// 手写compose 组合函数 
// var compose = function(f, g) {
//   // 闭包
//   return function(x) {
//     return f(g(x));
//   }
// }

var compose = function() {
  var args = arguments;
  var start = args.length - 1; // 最右边的函数
  return function(x) {
    var i = start;
    var result = args[start].call(this, x);
    while(i--) {
      result = args[i].call(this, result);
    } 
    return result
  }
}



var greet = compose(hello, toUpperCase);
console.log(greet('kevin'));
