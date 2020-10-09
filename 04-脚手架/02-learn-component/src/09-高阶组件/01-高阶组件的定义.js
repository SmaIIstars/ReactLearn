import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return <div>App: {this.props.name}</div>;
  }
}

// 类高阶组件
function enhanceComponent(WrappedComponent) {
  // return class NewComponent extends PureComponent {
  //   render() {
  //     return <WrappedComponent />;
  //   }
  // };

  // 可以改名字
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  NewComponent.dispalyName = "Stars";

  return NewComponent;
}

// 函数式高阶组件
function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />;
  }

  NewComponent.dispalyName = "Stars";

  return NewComponent;
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;
