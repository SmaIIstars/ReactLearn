import React, { Component } from "react";

function ChildCpn(props) {
  const { name, age, height } = props;

  return (
    <div>
      <h2>子组件展示数据:{name + " " + age + " " + height}</h2>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="Smallstars" age="18" height="1.83" />
      </div>
    );
  }
}
