import { track, trigger } from './effect'
import { reactive } from './reactive';
import { isObject } from '../shared';
// 代理对象的拦截操作
// get obj, key  effect -> track  依赖地图中
// 浅
function createGetter(shallow = false) {
  // 可读性
  // {a:1,b:2,c: {d: 2}}
  return function get(target, key, receiver) {
    // console.log(target, key, receiver, '-------------');
    // 收集依赖
    track(target, "get", key);
    let res = target[key];
    if (isObject(res)) {
      return shallow ? res : reactive(res); // 深层次的代理
    }
    return res;
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    console.log('--------------', target, key);
    // Reflect.set  == target[key] = value
    const result = Reflect.set(target, key, value, receiver);
    trigger(target, "set", key);
    return result
  }
}

function has(target, key) {
  const res = Reflect.has(target, key)
  track(target, 'has', key)
  return res
}

const get = createGetter();
const set = createSetter();
const shallowReactiveGet = createGetter(true);

export const mutableHandlers = {
  // 拦截那些行为
  get,
  set,
  // has,
}

export const shallowReactiveHandlers = {
  get: shallowReactiveGet,
  set,
}