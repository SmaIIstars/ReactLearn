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

        <button id="btn">更改文本2</button>
      </div>
    );
  }

  componentDidMount() {
    // 在原生 DOM 事件中
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "你好啊",
      });
      console.log(this.state.message);
    });

    // this.setState({
    //   message: "你好啊",
    // });
    // console.log(this.state.message);
  }

  changeText() {
    // 将 setState 放入定时器中
    setTimeout(() => {
      this.setState({
        message: "你好啊",
      });
      console.log(this.state.message);
    }, 0);
  }
}
