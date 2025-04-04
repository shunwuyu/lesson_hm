// 最基础版本的深拷贝
function clone(target) {
  if (typeof target === 'object') {
      let cloneTarget = {};
      for (const key in target) {
          cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  } else {
      return target;
  }
};
