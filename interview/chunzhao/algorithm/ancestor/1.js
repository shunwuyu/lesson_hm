function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }
  // 树 想想递归
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // 左右都有值 说明当前节点就是最近公共祖先
  if (let !== null && right !== null) {
    return root
  }

  return left !== null? left: right;
}