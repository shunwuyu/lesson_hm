const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue, index, arr) => { 
    console.log(accumulator, currentValue, index, arr, '-----------------')
    return accumulator + currentValue 
  }, 0
);
console.log(sum); 