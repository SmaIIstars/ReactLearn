import React, { Component } from "react";

import TabControl from "./TabControl";

import "./style.css";

export default class App extends Component {
  constructor(props) {
    super();

    // 固定不发生改变的数据
    this.titles = ["新款", "流行", "精选"];
    this.props = props;

    // 可能会发生改变的数据
    this.state = {
      currentTitle: "新款",
    };
  }

  render() {
    const { currentTitle } = this.state;
    return (
      <div>
        <TabControl
          itemClick={(index) => {
            this.itemClick(index);
          }}
          titles={this.titles}
        />
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }
}
