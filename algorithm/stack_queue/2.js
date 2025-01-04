
function typeOf(obj) {
  // typeof 除了null 之外的基本数据类型
  // function 可以之外都是 object
  // let res = Object.prototype.toString.call(obj).split(' ')[1]
  // 不包含] 
  // res = res.substring(0, res.length -1).toLowerCase();
  // return res;
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// [Object Array]
console.log(typeOf([]))