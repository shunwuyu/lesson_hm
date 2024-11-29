function foo() {
  var a = 1;
  let b = 2;
  {
    let b = 3;
    
    let d = 5;
    console.log(a);
    console.log(b)  
  }
  {
    let b = 5;
  }
  console.log(b)
  console.log(c)
  console.log(d)
}

foo();