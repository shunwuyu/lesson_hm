const personProto = { greet() { return "Hello"}}
// 比JSON 方便 指定原型
const person = Object.create(personProto);
person.name = "John";
console.log(person, person.__proto__);

const pureObject = Object.create(null);
console.log(pureObject)