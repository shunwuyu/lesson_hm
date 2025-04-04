function hongbao (total, num) {
  const arr = [];
  let restAmount = total; // 剩余金额的初始化
  let restNum = num;

  for (let i = 0; i < num - 1; i++) {
    let amount = parseFloat(
      Math.random() * (restAmount / restNum *2 - 0)
    ).toFixed(2);
    restAmount -= amount;
    restAmount--;
    arr.push(amount);
  }

  arr.push(restAmount.toFixed(2))

  return arr;
}

console.log(hongbao(25, 6))