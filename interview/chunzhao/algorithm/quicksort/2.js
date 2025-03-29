function bubbleSort(arr) {
  const len = arr.length;
  // swap 倒数第二个和倒数第一个
  for (let i = 0; i < len - 1; i++) {
    // len - 1 - i; 最后的i 个已经排好序了
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        // es6 解构赋值
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}

// 提前终止 最快O(n) 已是有序
function optimizedBubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let swapped = false; // 标记是否发生交换
    for (let j = 0; j < len - 1 -i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // 如果没有发生交换，提前终止循环
  }
  return arr
}