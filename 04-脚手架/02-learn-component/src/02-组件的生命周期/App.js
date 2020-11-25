import React, { Component } from "react";

class Cpn extends Component {
  render() {
    return (
      <div>
        <h2>我是Cpn组件</h2>
      </div>
    );
  }

  /**
   * 1.取消挂载
   */
  componentWillUnmount() {
    console.log("执行componentWillUnmount函数");
  }
}

export default class App extends Component {
  /**
   * 1.初始化 state 数据
   * 2.给事件绑定实例(this)
   */
  constructor() {
    super();

    this.state = {
      count: 0,
      isShow: false,
    };

    console.log("执行constructor函数");
  }

  render() {
    console.log("执行render函数");
    return (
      <div>
        <span>我是App组件</span>
        <h2>当前计数: {this.state.count}</h2>
        <button onClick={(e) => this.increment()}>+1</button>

        <hr />
        <button onClick={(e) => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn />}
      </div>
    );
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  /**
   * 1.依赖DOM的操作
   * 2.发送网络请求(Vue->created)
   * 3.添加一些订阅(在componentWillUnmount取消订阅)
   */
  componentDidMount() {
    console.log("执行componentDidMount函数");
  }

  /**
   * 1.组件更新回调
   * 2.对props进行对比
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行componentDidUpdate函数");
  }
}
