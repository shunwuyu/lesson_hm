const users = [
  {
    id: 1,
    name: '张三',
    hometown: '北京'
  },
  {
    id: 2,
    name: '李四',
    hometown: '上海'
  }
];

// console.log(JSON.stringify(users), typeof JSON.stringify(users));
// const data = users;
// data[0]['hometown'] = '南京';
// console.log(data, users);
// 把 users 对象转换成一个 JSON 字符串。
// JavaScript 对象的结构被“拍平”成纯文本，所有嵌套的对象/数组都会被递归地转为字符串形式。
// JSON.parse(str)：反序列化
// 把上一步生成的 JSON 字符串重新解析为一个新的 JavaScript 对象。
// 这个新对象和原对象在内存中完全独立，修改它不会影响原对象。
// JSON.parse(JSON.stringify(obj)) 通过“先转字符串再还原”的方式，
// 创建了一个与原对象结构相同但内存独立的新对象，从而实现了有限条件下的深拷贝。
const data = JSON.parse(JSON.stringify(users));
data[0]['hometown'] = '南京';
console.log(data, users);

