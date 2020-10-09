import React, { PureComponent } from "react";

import classNames from "classnames";

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      isActive: true,
      isBar: false,
      errClass: "error",
      warnClass: 0,
    };
  }

  render() {
    const { isActive, isBar, errClass, warnClass } = this.state;
    return (
      <div>
        {/* 原生添加class方法 */}
        <h2 className={"foo bar active title"}>我是标题1</h2>
        <h2 className={"title " + (isActive ? "active" : "")}>我是标题2</h2>
        <h2 className={["title", isActive ? "active" : ""].join(" ")}>
          我是标题3
        </h2>
        <hr />
        {/* classNames库添加class */}
        <h2 className={classNames("foo", " bar", " active ", "title")}>
          我是标题5
        </h2>
        <h2 className={classNames({ active: isActive, bar: isBar }, "title")}>
          我是标题6
        </h2>
        <h2 className={classNames("foo", errClass, warnClass)}>我是标题7</h2>
        <h2 className={classNames({ active: isActive }, (null, undefined))}>
          我是标题8
        </h2>
        <h2 className={classNames(["foo", "title", { bar: true }])}>
          我是标题9
        </h2>
      </div>
    );
  }
}
