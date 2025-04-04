// 弱引用
function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      const isArray = Array.isArray(target);
      let cloneTarget = isArray ? [] : {};

      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      // 性能优化
      const keys = isArray ? undefined : Object.keys(target);
      // 性能提升
      forEach(keys || target, (value, key) => {
          if (keys) {
              key = value;
          }
          cloneTarget[key] = clone2(target[key], map);
      });

      return cloneTarget;
  } else {
      return target;
  }
}
