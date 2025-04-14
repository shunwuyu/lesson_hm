import {
  init, // 初始化
  classModule,  // 类名模块
  propsModule, // 属性
  styleModule, // 行内样式模块
  eventListenersModule, // 事件模块
  h // 渲染函数 
} from 'snabbdom'
// 快速比对
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

const container = document.getElementById('app');

const vnode = h(
  'div#container.two.classes',
  {on: { click: () => console.log("div clicked")}},
  [
    h("span", { style: { fontWeight: "bold" } }, "This is bold"),
    " and this is just normal text",
    h("a", { props: { href: "/foo" } }, "I'll take you places!")
  ]
)

// console.log(vnode);
patch(container, vnode)

const newVNode = h(
  "div#container.two.classes",
  {
    "on": {
      click: () => {
        console.log("updated div clicked");
      }
    }
  }, 
  [
    h(
      "span",
      { style: { fontWeight: 'normal', fontStyle: 'italic' } },
      "This is now italic type"
    ),
    " and this is still just normal text",
    h("a", { props: { href: '/bar' }}, "i'll take your places!")
  ]
)

setTimeout(() => {
  patch(vnode, newVNode);
}, 3000)