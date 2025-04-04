// for (let i = 0; i < 100; i++) {
//   // 触发重绘
//   el.style.top = el.offsetTop + 1 + 'px';
// }

let top = el.offsetTop; // 先缓存一下
for (let i = 0; i < 100; i++) {
  // 触发重绘
  el.style.top = top + 1 + 'px';
}
