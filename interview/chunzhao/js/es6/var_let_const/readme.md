- 作用域
  var 不支持块级作用于，let 和const 可以， 这是js 满足大型项目的一个需要。
- 变量提升
  var 存在变量提升并初始值为undefined, let 和 const 会提升但是有暂时性死区(TDZ)
  在申明前访问会报 referenceError 
- 重复声明
  var 可以重复声明，let 和 const 不可以重复声明
- 全局污染
  var 挂在window 上，let 和 const 不会
- 修改性
  var 和 let 可以修改，const 申明的常量不可修改， 但是如果是对象， 可以修改对象的属性