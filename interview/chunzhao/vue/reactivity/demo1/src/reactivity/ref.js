import { reactive } from './reactive';
import { track, trigger } from './effect'
import { isObject } from '../shared';
export function ref(val) {
  if (isRef(val)) {
    return val;
  }
  return new RefImpl(val);
}

export function isRef(val) {
  return !!(val && val.__isRef);
}
// 最轻量化的拦截器 class 的get set
class RefImpl {
  constructor(val) {
    // 私有
   this.__isRef = true;
   this._val  = convert(val);
  }
  get value() {
    track(this, 'get', 'value')
    return this._val;
  }
  set value(val) {
    if (this._val !== val) {
      this._val = convert(val);
      trigger(this, 'set', 'value')
    }
  }
}

function convert(val) {
  return isObject(val)? reactive(val): val;
}