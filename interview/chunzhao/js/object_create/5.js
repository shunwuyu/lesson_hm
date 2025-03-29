// 创建一个空对象
let myObject = {};

// 使用 Object.defineProperties 方法来添加/修改属性
Object.defineProperties(myObject, {
    // 定义一个名为 'property1' 的数据属性
    'property1': {
        value: "Hello World",
        writable: true, // 如果为 false，则属性不能被修改
        enumerable: true, // 如果为 true，则可以通过 for...in 循环显示出来
        configurable: true // 如果为 true，则可以删除属性或修改其描述符
    },
    // 定义一个名为 'property2' 的访问器属性（getter 和 setter）
    'property2': {
        get: function() {
            return this._property2; // 注意：这里假设 _property2 已经存在
        },
        set: function(value) {
            this._property2 = value * 2; // 假设我们将传入的值翻倍后存储
        },
        enumerable: true,
        configurable: true
    }
});

// 测试
console.log(myObject.property1); // 输出: Hello World

myObject.property2 = 10;
console.log(myObject._property2); // 输出: 20，因为设置的值翻倍了

for (let key in myObject) {
    console.log(key); // 输出: property1 和 property2，因为它们都是可枚举的
}