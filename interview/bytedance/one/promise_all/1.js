const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds'})
    // reject('error')
  }, 3000)
})

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I like cake, BBQ is ready now !')
    // reject('BBQ 糊了')
  }, 5000)
})

// 简单 并发
// 多个异步任务，不在乎顺序的时候
// js 单线层， 怎么能并发？
console.time("time")
Promise
  .any([weather, tweets])
  .then(responses => {
    console.log(responses);
  })
  .catch(err => {
    console.log(err)
  })
console.timeEnd("time")