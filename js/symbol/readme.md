# Symbol

- 唯一值
  - 用Symbol 函数来申明
  - 给一个label 可选 
  - 返回值唯一值
  - 常用于对象字面量 不会，不需要担心 会被覆盖 
    key 的用法 这也是Symbol 需要的原因， 
    大厂大型项目， 对象复杂， 难维护 ，多人协作

  - Object.keys() 对象的健名数组，但是不包括Symbol 类型的健名
  - Object.values() 对象的健值数组，但是不包括Symbol 类型的健值
  - Object.entries() 对象的健值对数组，但是不包括Symbol 类型的健值对

- 可迭代对象
  Object.getOwnPropertyDescriptors(classMates) 对象上的属性描述符
  - 虽然 symboles emumberable 属性为true, 但人不可枚举。
    因为Sybmols 独特设计， 就是提供唯一值的，只能通过 
    getOwnPropertySymboles来获取 

- ownProperty?  