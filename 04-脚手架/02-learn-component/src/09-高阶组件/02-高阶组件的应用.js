import React, { PureComponent } from "react";

//
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} regions="中国" />;
  };
}

class Home extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const { nickname, level } = this.props;
    return (
      <div>
        Home: {`昵称: ${nickname} 等级: ${level} 区域: ${this.props.regions}`}
      </div>
    );
  }
}

const EnhanceHome = enhanceRegionProps(Home);

class About extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const { nickname, level } = this.props;
    return (
      <div>
        About: {`昵称: ${nickname} 等级: ${level} 区域: ${this.props.regions}`}
      </div>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="Stars" level={100} />
        <About nickname="Stars2" level={1000} />
      </div>
    );
  }
}

// 开发一般直接导出增强后的组件
// export default enhanceRegionProps(About);
export default App;
