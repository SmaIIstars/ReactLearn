import React, { Component } from "react";

// 创建Context对象
const UserContext = React.createContext({
  nickname: "aaa",
  level: -1,
});

// // 函数式组件不能使用 Context
// class ProfileHeader extends Component {
//   render() {
//     console.log(this.context);
//     return (
//       <div>
//         <h2>用户昵称: {this.context.nickname}</h2>
//         <h2>用户等级: {this.context.level}</h2>
//       </div>
//     );
//   }
// }
// // 赋值
// ProfileHeader.contextType = UserContext;

// 函数式类似 Flutter 写法
const ThemeContext = React.createContext({
  color: "black",
});

function ProfileHeader(props) {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2>用户昵称: {value.nickname}</h2>
                  <h2 style={{ color: theme.color }}>
                    用户等级: {value.level}
                  </h2>
                  <h2>颜色: {theme.color}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <div>
        <ProfileHeader></ProfileHeader>
      </div>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super();

    this.props = props;

    this.state = {
      nickname: "Smallstars",
      level: 10,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile></Profile>
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* 如果在外部，会向上找值，如果没有找到就会使用默认值 */}
        <Profile></Profile>
      </div>
    );
  }
}
