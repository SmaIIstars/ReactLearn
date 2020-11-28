import React, { PureComponent } from "react";

/**
 * 1.内联样式没有冲突
 * 2.可以动态获取state中的状态
 */

export default class App extends PureComponent {
  constructor(porps) {
    super();

    this.state = {
      color: "purple",
    };
  }

  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: "underline",
    };

    return (
      <div>
        <h2 style={{ fontSize: "50px", color: "red" }}>Title</h2>
        <p style={pStyle}>Text</p>
      </div>
    );
  }
}
