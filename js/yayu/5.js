const cy = {
  name: '陈炎',
  playBasketball: function() {
    console.log('东里科比来了');
  } 
}

function Person(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}
Person.prototype = cy;
// 原型？ cy

const wu = new Person('武', 19);
wu.playBasketball();
console.log(wu.__proto__ === cy)