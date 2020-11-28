import React, { PureComponent } from "react";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "DefaultText",
      counter: 5,
    };
  }

  changeHandle(e) {
    // console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }

  submitHandle(e) {
    e.preventDefault();
    console.log(this.state.message);
  }

  render() {
    const { message } = this.state;
    return (
      <>
        <div>message:{message}</div>
        <form
          onSubmit={(e) => {
            this.submitHandle(e);
          }}
        >
          <label htmlFor="message">
            <input
              type="text"
              onChange={(e) => {
                this.changeHandle(e);
              }}
              value={message}
            />
          </label>
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default App;
