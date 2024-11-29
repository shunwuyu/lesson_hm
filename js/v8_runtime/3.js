function bar() {
  console.log(myname);
}

function foo() {
  var myname = '肖总'
  bar()
  console.log(myname);
}
var myname = 'lisi'
foo();