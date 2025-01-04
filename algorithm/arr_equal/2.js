// 不考虑重复 
const arr1 = ['apple', 'banna', 1];
const arr2 = ['apple', 1, 'banna'];

function arrEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // false 
  return !arr1.some(item => arr2.indexOf(item) === -1)
}

console.log(arrEqual(arr1, arr2))