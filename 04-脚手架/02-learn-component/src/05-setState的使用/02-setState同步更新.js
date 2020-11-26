import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "default Text",
    };
  }

  componentDidMount() {
    document.getElementById("btn_synchronous").addEventListener("click", () => {
      this.setState({
        message: "Smallstars",
      });

      console.log("document", this.state.message); // Smallstars
    });

    // this.setState({
    //   message: "Smallstars",
    // });
    // console.log("componentDidMount", this.state.message); // default Text
  }

  changeText() {
    setTimeout(() => {
      this.setState({
        message: "Smallstars",
      });
      console.log("setTimeout", this.state.message); // default Text
    }, 0);

    this.setState({
      message: "Smallstars",
    });
    console.log("changeText", this.state.message); // default Text
  }

  render() {
    const { message } = this.state;
    return (
      <>
        <div>message: {message}</div>
        <button id="btn_synchronous">synchronous</button>
        <button
          onClick={() => {
            this.changeText();
          }}
        >
          synchronous
        </button>
      </>
    );
  }
}

export default App;
