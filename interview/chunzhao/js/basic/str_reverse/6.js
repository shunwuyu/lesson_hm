function reverseStr(str) {
  // 正则表达式 . 任意字符
  return (str.replace(/./g, (char) => char)).split('').reverse().join('')
}

console.log(reverseStr("abc"))