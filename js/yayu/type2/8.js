console.log(1 + '1');
console.log(+ "1")
console.log(+[]);
console.log(+['1']); // 1
console.log(+['1,2,3']);

console.log(+{}); // {} => {} => [Object object] => NaN

console.log([] + {})
console.log({} + {})

console.log(42 == ['42'])

console.log(true == '2')

console.log(1 == "2")