import React, { Component } from "react";
class ClassApp extends Component {
  constructor(props) {
    super();

    this.state = {
      msg: "Hello React",
    };
  }

  render() {
    return (
      <>
        <div>
          <span>Class Component</span>
        </div>
        <span>message: {this.state.msg}</span>
      </>
    );
  }
}

/**
 * 函数组件特点：
 * 1.没有this
 * 2.没有内部状态(使用hooks)
 */
const App = (props) => {
  const msg = "Hello React";
  return (
    <>
      <ClassApp />
      <div>
        <span>Function Component</span>
      </div>
      <span>msg: {msg}</span>
    </>
  );
};

export default App;
