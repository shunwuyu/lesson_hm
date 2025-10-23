# tailwindcss 原理是？

原子类css , postcss 一个插件

- 通过扫描HTML, Vue, react 等文件（配置），提取类名并按需生成对应的css 样式  (JIT Just in Time )
- 基于postcss 插件 编译
- 适配， 主题定制....