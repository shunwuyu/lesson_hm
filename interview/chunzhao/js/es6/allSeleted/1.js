// Promise.allSettled 是 JavaScript 中 Promise API 的一个重要方法，
// 它用于处理多个 Promise 的并行执行，并等待所有 Promise 完成（无论成功或失败）。
Promise.myAllSettled = function (promises) {
  // 参数校验：确保输入是可迭代对象
  if (promises == null || typeof promises[Symbol.iterator] !== 'function') {
      throw new TypeError(
          `TypeError: ${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`
      );
  }

  // 将可迭代对象转换为数组
  const promisesArray = Array.from(promises);

  // 处理空数组情况
  if (promisesArray.length === 0) {
      return Promise.resolve([]);
  }

  // 计数器跟踪完成状态
  let remaining = promisesArray.length;
  const results = new Array(remaining);

  // 返回新的Promise
  return new Promise((resolve) => {
      // 定义处理函数
      const handler = (index, value, isFulfilled) => {
          // 存储结果
          results[index] = isFulfilled
              ? { status: 'fulfilled', value }
              : { status: 'rejected', reason: value };

          // 检查是否全部完成
          if (--remaining === 0) {
              resolve(results);
          }
      };

      // 遍历所有Promise
      promisesArray.forEach((item, index) => {
          // 确保每个项都是Promise
          const promise = Promise.resolve(item);

          // 添加处理程序
          promise.then(
              (value) => handler(index, value, true),   // fulfilled处理
              (reason) => handler(index, reason, false) // rejected处理
          );
      });
  });
};