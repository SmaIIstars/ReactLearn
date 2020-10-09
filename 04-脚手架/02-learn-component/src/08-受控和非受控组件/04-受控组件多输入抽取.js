import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      usrname: "",
      password: "",
      email: "",
    };
  }

  render() {
    return (
      <div>
        <form
          action="/#"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div>
            用户名:{" "}
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div>
            密码:{" "}
            <input
              type="text"
              name="password"
              id="password"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div>
            邮箱:{" "}
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    const { username, password, email } = this.state;
    event.preventDefault();
    console.log(username, password, email);
  }

  handleChange(event) {
    // 拿到对应输入框的 name
    // console.log(event.target.name);
    this.setState({
      // ES6语法
      [event.target.name]: event.target.value,
    });
  }
}
