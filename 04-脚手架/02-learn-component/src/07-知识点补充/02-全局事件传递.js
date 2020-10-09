import React, { PureComponent } from "react";

import { EventEmitter } from "events";

// 事件总线: event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  // 添加监听
  componentDidMount() {
    // console.log(1);
    eventBus.addListener("btnClick", this.handleBtnClickListener);
  }

  // 取消监听
  componentWillUnmount() {
    // 取消所有关于 btnClick 的事件监听
    // eventBus.removeListener("btnClick")
    // console.log(1);
    eventBus.removeListener("btnClick", this.handleBtnClickListener);
  }

  // 单独取消某一个就需要单独拿出来
  handleBtnClickListener = (message, num) => {
    console.log(message, num);
  };

  render() {
    return <div>Home</div>;
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button
          onClick={(e) => {
            this.btnClick();
          }}
        >
          点击了profile按钮
        </button>
      </div>
    );
  }

  btnClick() {
    // 发射事件
    eventBus.emit("btnClick", "HelloWorld", 123);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    );
  }
}
