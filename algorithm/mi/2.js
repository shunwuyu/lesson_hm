// 求x的n次方
// x
// x x
// x x x 
function fun1(x, n) {
  // 退出条件 
  if (n == 0) {
    return 1;
  }
  // 把问题分解为规模更小的子问题 自顶向下
  return x * fun1(x, n - 1);
}