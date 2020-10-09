// const { component } = Request{'react'}
// import React, { Component } from "react";
import React from "react";

// 类组件
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "你好啊,Smallstars",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>我是App组件</span>
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }

/**
 * 函数式组件特点
 * 1.没有this对象
 * 2.没有内部状态(使用hooks)
 */
export default function App() {
  return (
    <div>
      <h2>我是函数组件:</h2>
      <span>App组件</span>
    </div>
  );
}
