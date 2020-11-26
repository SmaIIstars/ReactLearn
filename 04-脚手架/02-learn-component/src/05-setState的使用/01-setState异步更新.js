import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "default Text",
    };
  }

  // Call back after the render function is executed
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.message); // Smallstars
  }

  changeText() {
    this.setState(
      {
        message: "Smallstars",
      },
      () => {
        // Call back after the datas are updated
        console.log("changeText", this.state.message); // Smallstars
      }
    );

    console.log("changeText", this.state.message); // default Text
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <div>{message}</div>
        <button
          onClick={() => {
            this.changeText();
          }}
        >
          synchronous
        </button>
      </div>
    );
  }
}

export default App;
