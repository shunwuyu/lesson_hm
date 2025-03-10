// JSON key 字符串， Map 可以是任何类型
// Map key 是数据对象
// WeakMap 弱引用
let obj = {}
const map = new WeakMap();// 箭值对
map.set('a', 1);
map.set(obj, 2); // 弱引用类型 不要来回拉扯
// let obj2 = {
//   obj: 2
// }
// console.log(typeof obj2["obj"]);
// for (let key in obj2) {
//   console.log(key, typeof key);
// }
delete obj; // 手动删除obj 触发垃圾回收 
