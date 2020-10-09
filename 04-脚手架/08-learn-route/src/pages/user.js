import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

export default class User extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isLogin: false,
    };
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h2>用户名: Smallstars</h2>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
