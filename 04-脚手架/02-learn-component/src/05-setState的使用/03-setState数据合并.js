import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      message: "默认文本",
      name: "Smallstars",
    };
  }

  render() {
    return (
      <div>
        <h2>当前文本: {this.state.message}</h2>
        <h2>{this.state.name}</h2>
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

  changeText() {
    // 这里通过 Object.assign({}, this.state, {message: "你好啊"}) 对后两个对象进行了合并
    this.setState({
      message: "你好啊",
    });
  }
}
