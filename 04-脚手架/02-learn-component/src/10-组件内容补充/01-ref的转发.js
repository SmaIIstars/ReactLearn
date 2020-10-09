import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

// 函数组件的ref不能像类一样通过this.的方式直接拿
// 高阶组件 forwardRef 对ref进行一次转发
const Profile = forwardRef(function (props, ref) {
  return <h2 ref={ref}>Profile</h2>;
});

export default class App extends PureComponent {
  constructor(props) {
    super();

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef} />

        <Profile ref={this.profileRef} name="Stars " />
        <button
          onClick={(e) => {
            this.printRef();
          }}
        >
          打印Ref
        </button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}
