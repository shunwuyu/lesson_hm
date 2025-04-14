function isValid(s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const mapping = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  // for (let char of s) {
  //     if (mapping[char]) {
  //         // 左括号入栈
  //         stack.push(char);
  //     } else {
  //         // 右括号匹配
  //         if (stack.length === 0 || mapping[stack.pop()] !== char) {
  //             return false; // 不匹配
  //         }
  //     }
  // }
  for (const char of s) {
    if (char in mapping) {
      stack.push(mapping[char]); // 右括号
    } else {
      if (stack.pop() !== char) return false
    }
  }

  return stack.length === 0; // 栈为空则有效
}