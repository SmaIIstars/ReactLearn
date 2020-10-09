import React, { Component } from "react";

/**
 * 1.返回React元素
 *    jsx
 *    <div></div>、<MyComponent></MyComponent>
 * 2.数组或 fragments: 可返回多个元素
 * 3.Portals: 可以渲染子节点到不同的 DOM 子树种
 * 4.字符串或数值: 渲染为文本节点
 * 5.布尔型或null: 不渲染
 */

export default class App extends Component {
  render() {
    return [<div>Hello World</div>, <div>Hello React</div>];
  }
}
