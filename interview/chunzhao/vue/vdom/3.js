let j = 0
let find = false
// 遍历旧的 children
for (j; j < oldChildren.length; j++) {
    const oldVNode = oldChildren[j]
    // 如果找到了具有相同 key 值的两个节点，则调用 patch 函数更新之
    if (newVNode.key === oldVNode.key) {
        find = true
        patch(oldVNode, newVNode, container)

        if (j < lastIndex) { // 旧的 vnode 数组的下标在上一个 index 之前，需要移动
          const prevVNode = newChildren[i - 1]
          if (prevVNode) {
            const anchor = prevVNode.el.nextSibling
            insert(newVNode.el, container, anchor)
          } else {
            insert(newVNode.el, container, container.firstChild)
          }
        } else {// 不需要移动
          // 更新 lastIndex
          lastIndex = j
        }
        break
    }
}
