function spiralOrder(matrix) {
  if (matrix.length === 0) return [];

  let res = [];
  // 边界
  let top = 0, bottom= matrix.length - 1;// 行 丛上到下
  let left = 0, right = matrix[0].length - 1;// 列 从左到右
  while (top <= bottom && left <= right) { // 逆向思维
    // 顺时针
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++; 
    if (top > bottom) break;
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--;
    if (left > right) break;
    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    if (top > bottom) break;

    for(let i = bottom; i >=top; i--) {
      res.push(matrix[i][left])
    }
    left++;
    
  }

  return res;
}
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))