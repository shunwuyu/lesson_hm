// 编写二叉树的前序遍历
// function preOrder(root) {
//   if (!root) return 
//   console.log(root.val);
//   preOrder(root.left);
//   preOrder(root.right);
// }
// 递归变迭代 
function preOrderTraversal(root) {
  // 栈  右节点入栈， 左节点后入栈 
  const result = [];

  if (!root) {
    return result;
  }
  // 栈模拟递归 
  const stack = [root]; // 根节点入栈， 栈顶
  
  while(stack.length) {
    const node = stack.pop();
    result.push(node.val);
    
    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
}