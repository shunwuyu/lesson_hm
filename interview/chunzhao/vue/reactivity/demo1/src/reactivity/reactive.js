// 依赖地图  Map es6 新增的数据结构 HashMap O(1) key 取 value 
// get set has ....  json 区别 key 只能是字符串， map 可以是对象
export const reactiveMap = new WeakMap();

// target 普通对象
export const reactive = (target) => {
  // 返回代理对象
  return createReactiveObject(target, reactiveMap);
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== 'object') {
    console.warn('reactive 必须是一个对象');
    return target;
  }

  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy; // 已经存在， 直接返回
  }

  const proxy = new Proxy(target, proxyHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}