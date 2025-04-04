// then -》 generator * yield -> co -> async await
// async/await 手写
function asyncToGenerator(generatorFunc) {
  return function() {
    
    const gen = generatorFunc.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg);
        } catch(error) {
          return reject(error);
        }
        const { value, done } = generatorResult
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            val => step('next', val),
            err => step('throw', err)
          )
        }
      }
      step('next')
    })
  }
}
// 生成器函数
function* testGenerator() {
  const result1 = yield Promise.resolve('Hello');
  console.log(result1);
  const result2 = yield Promise.resolve('world');
  console.log(result2);
  return 'done';
}
// async function test() {
  
// }
const asyncFunc = asyncToGenerator(testGenerator);
asyncFunc()
  .then(finalResult => {
    console.log('最终结果', finalResult);
  })