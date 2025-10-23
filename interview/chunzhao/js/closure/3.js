1: function createCounter() {
  2:   let counter = 0
  3:   const myFunction = function() {
  4:     counter = counter + 1
  5:     return counter
  6:   }
  7:   return myFunction
  8: }
  9: const increment = createCounter()
 10: const c1 = increment()
 11: const c2 = increment()
 12: const c3 = increment()
 13: console.log('example increment', c1, c2, c3)
 
