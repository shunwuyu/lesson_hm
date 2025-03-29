// 手写new 
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return (result && typeof result === 'object') ? result : obj;
}