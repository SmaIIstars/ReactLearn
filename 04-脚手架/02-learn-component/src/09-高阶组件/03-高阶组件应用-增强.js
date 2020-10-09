import React, { PureComponent, createContext } from "react";

// 创建
const UserContent = createContext({
  nickname: "默认",
  level: 1,
  区域: "中国",
});

// 增强函数
function withUser(WrappedComponent) {
  // 使用回调函数方式
  return (props) => (
    <UserContent.Consumer>
      {(user) => {
        return <WrappedComponent {...props} {...user} />;
      }}
    </UserContent.Consumer>
  );
}

class Home extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <h2>
        Home:{" "}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.regions}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <h2>
        About:{" "}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.regions}`}
      </h2>
    );
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContent.Provider
          value={{ nickname: "Smallstars", level: 18, regions: "中国" }}
        >
          <UserHome />
          <UserAbout />
        </UserContent.Provider>
      </div>
    );
  }
}

export default App;
