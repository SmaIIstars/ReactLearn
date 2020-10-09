import React, { Component } from "react";

// 如果在 state 中的引用数据如果自己变了，浅层比较会不知道，容易出问题
// 所以推荐 state 值不可变

export default class App extends Component {
  constructor(props) {
    super();

    this.props = props;
    this.state = {
      friends: [
        { name: "friend1", age: 21 },
        { name: "friend2", age: 22 },
        { name: "friend3", age: 23 },
      ],
    };
  }

  shouldComponentUpdate(newProps, newState) {
    // 如果这里是第一种，由于引用地址还是相同，所以不会刷新
    if (newState.friends !== this.state.friends) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                姓名: {item.name}
                年龄: {item.age}
                <button
                  onClick={(e) => {
                    this.incrementAge(index);
                  }}
                >
                  age+1
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={(e) => {
            this.insertData();
          }}
        >
          添加数据
        </button>
      </div>
    );
  }

  insertData() {
    // const newFirend = { name: "friend4", age: 24 };
    // this.state.friends.push(newFirend);
    // this.setState({
    //   friends: this.state.friends,
    // });

    const newFriends = [...this.state.friends];
    newFriends.push({ name: "friend4", age: 24 });
    this.setState({
      friends: newFriends,
    });
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    // console.log(newFriends !== this.state.friends);
    this.setState({
      friends: newFriends,
    });
  }
}
