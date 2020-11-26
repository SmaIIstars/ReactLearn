import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      message: "Default Text",
      name: "Smallstars",
    };
  }

  render() {
    return (
      <div>
        <h2>message: {this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button
          onClick={(e) => {
            this.changeText();
          }}
        >
          execute
        </button>
      </div>
    );
  }

  changeText() {
    // Use Object.assign({}, this.state, {message: "Smallstars"})
    this.setState({
      message: "Smallstars",
    });
  }
}
