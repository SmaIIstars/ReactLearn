import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前数字: {this.state.counter}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +
        </button>
      </div>
    );
  }

  increment() {
    // 每次都会合并，后面会覆盖前面
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    // this.setState({
    //   counter: this.state.counter + 2,
    // });

    // this.setState({
    //   counter: this.state.counter + 3,
    // });

    // 合并时进行累加
    // 每次合并的时候使用上一次的 state 进行累加，然后返回新的
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
}
