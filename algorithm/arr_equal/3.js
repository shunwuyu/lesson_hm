// 不考虑重复 
const arr1 = ['apple', 'banna', NaN];
const arr2 = ['apple', NaN, 'banna'];

function arrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // false 
  return !arr1.some(item => arr2.includes(item) === -1)
}

console.log(arrEqual(arr1, arr2))
