import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      message: "默认文本",
    };
  }

  render() {
    return (
      <div>
        <h2>当前文本: {this.state.message}</h2>
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

  // 2.render执行完回调 componentDidUpdate 函数
  componentDidUpdate() {
    console.log(this.state.message);
  }

  changeText() {
    // // setState异步更新
    // this.setState({
    //   message: "你好啊",
    // });
    // console.log(this.state.message); // 默认文本

    // 获取异步更新后的数据
    // 1.回调函数: setState(更新的state, callback)
    this.setState(
      {
        message: "你好啊",
      },
      () => {
        console.log(this.state.message);
      }
    );
  }
}
