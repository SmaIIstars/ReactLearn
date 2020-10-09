import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    );
  }
}

// 渲染内容独立于父组件或者当前挂载的DOM中 (一般是 root 下)
class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
