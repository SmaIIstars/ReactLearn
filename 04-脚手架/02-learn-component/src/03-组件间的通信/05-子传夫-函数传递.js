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
