function advancedBubbleSort(arr) {
  const len = arr.length;
  // 记录最后一次交换的位置 
  let lastSwapPos = len - 1;
  // 记录本轮需要比较到的位置
  let swapBorder = len - 1;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;
    lastSwapPos = 0;
    for (let j = 0; j < swapBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
        lastSwapPos = j;
      }
    }
    swapBorder = lastSwapPos
    if (!swapped) {
      break;
    }
  }
  return arr;
}