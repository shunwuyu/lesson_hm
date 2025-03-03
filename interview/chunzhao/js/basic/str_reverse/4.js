// 高阶函数
// 函数的参数或返回值是一个函数， 高阶函数
function reverseStr(str) {
  // return [...str].reverse().join('');
  // reduce es6 api 
  // 
  return [...str].reduce((reversed, char) => char + reversed, '')
}