// 只要不是数字， + 连接符
// 二元运算符
console.log([] + [])
// 一元运算符 隐式类型转换 
console.log(+ [1, 2, 3])
console.log([]==[])

let x = 42
let y = {
  valueOf: function() {
    return 42
  }
}

console.log(x == y)