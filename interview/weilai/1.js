const arr = [3, 1, 4, 1, 5, 9];
// sort 数组的排序api 
// 函数来约定 a - b 升序 b - a 降序
// 冒泡来理解 
// 改变原来的数组
const sortedArr = arr.sort((a, b) => {
  return a - b;
})

console.log(sortedArr); // [1,1,3,4,5,9]
console.log(arr); // [1,1,3,4,5,9] 