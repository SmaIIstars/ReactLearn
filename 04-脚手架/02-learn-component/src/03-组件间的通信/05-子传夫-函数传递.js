// import React, { Component } from "react";

// class CounterButton extends Component {
//   render() {
//     const { increment } = this.props;

//     return (
//       <div>
//         <button onClick={increment}>+</button>
//       </div>
//     );
//   }
// }

// export default class App extends Component {
//   constructor(props) {
//     super();

//     this.props = props;

//     this.state = {
//       counter: 0,
//     };
//   }

//   render() {
//     const { counter } = this.state;

//     return (
//       <div>
//         <h2>当前技术: {counter}</h2>
//         <button
//           onClick={(e) => {
//             this.increment();
//           }}
//         >
//           +
//         </button>

//         {/*
//           更改 state 需要注意 this 指向问题
//           1.使用 bind 绑定 this
//           2.函数定义时使用箭头定义
//           3.传值的时候使用箭头函数
//         */}
//         <CounterButton increment={this.increment.bind(this)} />
//         <CounterButton increment={this.increment1} />
//         <CounterButton
//           increment={(e) => {
//             this.increment();
//           }}
//         />
//       </div>
//     );
//   }
//   increment() {
//     // console.log("+1");
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   increment1 = () => {
//     // console.log("+1");
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
// }

import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { increment } = this.props;

    return <button onClick={increment}>+</button>;
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <h2>当前计数: {counter}</h2>
        <div>ES5 Function</div>
        {/* We must change this pointer manually */}
        <CounterButton increment={this.increment1.bind(this)} />

        <div>Defined the Arrow Function</div>
        <CounterButton increment={this.increment2} />

        <div>Pass in the Arrow Function</div>
        <CounterButton
          increment={() => {
            this.increment2();
          }}
        />
      </>
    );
  }
  increment1() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  increment2 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
}
