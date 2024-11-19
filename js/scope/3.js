var b = 1;
function foo() {
  var a = 1;
  // var a 会被忽略
  var a = 2;
  console.log(a, b);
}

foo();