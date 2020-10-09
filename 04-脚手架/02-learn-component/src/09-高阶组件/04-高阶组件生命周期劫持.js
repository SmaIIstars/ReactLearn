import React, { PureComponent } from "react";

// 增强函数
function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 渲染前
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    // 渲染后
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;

      // 获取当前组件名字
      console.log(`${WrappedComponent.name} 渲染时间: ${interval}`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// 使用增强函数
class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}
class Profile extends PureComponent {
  render() {
    return <h2>Profile</h2>;
  }
}
const HomeTime = withRenderTime(Home);
const ProfileTime = withRenderTime(Profile);

// 不使用增强函数
class About extends PureComponent {
  // 渲染前
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return <h2>About</h2>;
  }

  // 渲染后
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`About 渲染时间: ${interval}`);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeTime />
        <ProfileTime />
        <About />
      </div>
    );
  }
}
