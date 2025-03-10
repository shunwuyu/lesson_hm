span 标签设置 margin、padding 会生效吗?将它设置为 inline-block呢?为什么?
IFC  inline formatting context 
- 内联元素的 width 和 height 属性不会生效
- padding bottom
  padding-left 和 padding-right 以及 margin-left 和 margin-right 可以生效，并且会影响布局。
- 垂直方向（上下）：padding-top 和 padding-bottom 会生效，但不会影响页面布局(div忽略了)；margin-top 和 margin-bottom 对于纯内联元素通常不会产生预期的效果（可能会导致一些意外的布局问题）。


将它设置为 inline-block呢

