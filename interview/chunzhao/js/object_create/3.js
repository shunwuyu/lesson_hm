// 创建对象 Object.assign
const target = { a: 1, b: 2};
const source = { b: 4, c: 5};
// 合并对象
const result = Object.assign({}, target, source);
console.log(result, result.__proto__, target);