# diff 算法

 EABCD(new)  ABCDE(old)  

- 处理新VDOM 第一个节点 E
  在old 找到 E ， 位置为4
  patch 更新
  lantIndex = 4
  
  ABCDE 

- A
  i = 1
  j = 0  
  j < lastIndex 
  虚拟DOM el 指向真实dom 
  E.el->nextSibling
  BCDEA
  

- B 
  j = 1
  A.el.nextSibling 
  CDEAB

- C
  DEABC

- D
  EABCD

移动次数太多 如何解决？