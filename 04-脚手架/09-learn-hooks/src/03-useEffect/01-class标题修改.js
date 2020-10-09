import React, { PureComponent } from "react";

export default class ClassTitlteChange extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.addNum()}>+10</button>
      </div>
    );
  }
  addNum() {
    this.setState({
      counter: this.state.counter + 10,
    });
  }
}
