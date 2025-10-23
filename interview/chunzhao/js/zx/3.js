let res = new Array()
// for (var i =0; i < 10;i++) {
//   (function(i) {
//     res.push(function() {
//       return console.log(i)
//     })
//   })(i)
  
// }
for (var i = 0; i < 10; i++) {
  res.push(console.log.bind(null, i))
}
res[0]()
res[1]()
res[2]()