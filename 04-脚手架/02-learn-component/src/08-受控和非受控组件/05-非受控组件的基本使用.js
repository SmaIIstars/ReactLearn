import React, { createRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      username: "",
    };

    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="username">
            用户:{" "}
            <input
              type="text"
              name="username"
              id="username"
              ref={this.usernameRef}
            />
          </label>

          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
