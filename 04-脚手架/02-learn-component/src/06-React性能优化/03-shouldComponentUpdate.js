import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }

  render() {
    console.log("App被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <h2>当前文本: {this.state.message}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            this.changeText();
          }}
        >
          更改文本
        </button>
      </div>
    );
  }

  // 是否阻断更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextState", nextState);
    if (this.state.counter !== nextState.counter) return true;
    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "Small Stars",
    });
  }
}
