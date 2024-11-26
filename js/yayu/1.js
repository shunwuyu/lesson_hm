// js 造人
// 对象字面亮
let cao = {
  name: '小超'
}
let fan = {
  name: '范总',
  age: 17
}
// class es6 
class Person {
  constructor(name,age) {
    this.name = name
    this.age = age
  } 
  eat() {
    console.log('吃饭');
  }
  
}

let wei = new Person('啊威', 18)
let guo = new Person('过帅', 18)