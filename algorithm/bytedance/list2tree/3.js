let list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
      parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
      parentId: '2'
  }
]

function list2Tree(list) {
  const map = {} // 空间换时间 json 
  const root = []; 
  list.forEach(item => {
    // map 初始化， O(1)
    map[item.id] = { ...item, children: [] }
  })

  list.forEach(item => {
    if (item.parentId) {
      map[item.parentId].children.push(map[item.id])
    } else {
      root.push(map[item.id])
    }
  })
  
  return root
}

console.log(list2Tree(list))