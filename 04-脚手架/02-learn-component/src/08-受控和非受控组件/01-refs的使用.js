import React, { PureComponent, createRef } from "react";

// 函数式不能使用ref
// function Counter() {
//   return (
//     <div>
//       <h2>CounterCpn</h2>
//     </div>
//   );
// }

class Counter extends PureComponent {
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
        <h2>CounterCpn: {this.state.counter}</h2>
        {/* <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +
        </button> */}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.props = props;

    this.titleRef = createRef();
    this.counterRef = createRef();
  }

  render() {
    return (
      <div>
        {/* 
          1.字符串
          2.对象
          3.函数
        */}
        <h2 ref="titleRef">Hello React</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello React</h2>

        <button
          onClick={(e) => {
            this.changeText();
          }}
        >
          改变文本
        </button>
        <Counter ref={this.counterRef}></Counter>
        <button
          onClick={(e) => {
            this.counterBtn();
          }}
        >
          按钮
        </button>
      </div>
    );
  }

  changeText() {
    // 1.字符串
    this.refs.titleRef.innerHTML = "Hello Smallstars";

    // 2.对象
    this.titleRef.current.innerHTML = "Hello Smallstars";

    // 3.回调函数
    this.titleEl.innerHTML = "Hello Smallstars";
  }

  counterBtn() {
    // 拿到的是组件，可以调用组件中的函数
    console.log(this.counterRef.current);
    this.counterRef.current.increment();
  }
}
