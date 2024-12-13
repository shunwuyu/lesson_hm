const letterMap = ["", "", "abc", "def", "ghi", 
  "jkl", "mno", "pqrs", "tuv", "wxyz"];

function letterCombinations(digits) {
  // 回溯算法
  const result = [];
  const path = []; // 某一种路径

  if (digits.length === 0) {
    return result;
  }

  function backtracking(index) {
    // backtracking()
    if (index === digits.length) {
      result.push(path.join(''));
      return ;
    }
    const digit = digits[index] - '0';
    // console.log(digit)
    const letters = letterMap[digit];
    // console.log(letters)

    for (let i = 0; i < letters.length; i++) {
      // letters[i] 这一次path 收集的开始？
      path.push(letters[i]); // 开始
      backtracking(index + 1) // 递归子问题
      path.pop(); // 打扫战场 回溯
    }

  }
  backtracking(0)

  return result ;
}

console.log(letterCombinations("23"))