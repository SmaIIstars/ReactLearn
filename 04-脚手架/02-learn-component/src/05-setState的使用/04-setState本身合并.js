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
        <h2>Number: {this.state.counter}</h2>
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
    // It is merged each time, and the front is covered by later
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // couter is 1

    //Accumulate when meraging
    // Each time a meraging is made, the later state is used for accumulation, and then a new one is returned
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
    // couter is 3
  }
}
