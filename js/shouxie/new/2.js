function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

function objectFactory() {
  console.log(arguments, arguments.length);
  const obj = new Object(); // 空对象创建
  // arguments 类数组，没有shift, 
  // [].shift.call(arguments)
  const Constructor = [].shift.call(arguments)
  console.log(Constructor);
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  console.log(obj);
  return obj;
}

let awei = objectFactory(Person, 'awei', 20)
console.log(awei.name)
awei.sayName()