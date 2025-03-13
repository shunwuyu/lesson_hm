let activeEffect = null; // 当前effect 
const targetMap = new WeakMap(); // 弱引用 依赖收集 ？ 当前对象的依赖 
// 闭包
export function effect(fn) {
  // 返回一个函数
  // 立即执行一次
  // console.log(fn, '/////');
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn() // 依赖得以收集
    } finally {
      activeEffect = null;
    }
  }
  effectFn() // 立即执行
  return effectFn
}

export function track(target, type, key) {
  console.log('触发 track -> target type(get|{{}}| onMounted) ')
  // console.log(activeEffect);
  // 一个对象只有一次依赖对象作为key 
  let depsMap = targetMap.get(target);
  console.log(depsMap, '????')
  if (!depsMap) {
    depsMap = new Map(); // hashmap 键值对
    targetMap.set(target, depsMap);
    // targetMap.set(target, (depsMap = new Map()))
  }
  // console.log(depsMap, '------')
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set(); // 不要重复添加  fn 加入依赖
  }
  if(!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}

export function trigger(target, type, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }
  deps.forEach((effectFn) => {
    effectFn()
  })
}