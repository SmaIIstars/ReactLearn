import React, { Component } from "react";
import Proptypes from "prop-types";

// 函数组件验证
function ChildCpn(props) {
  const { name, age, height } = props;
  const { names } = props;

  return (
    <div>
      <h2>子组件展示数据:{name + " " + age + " " + height}</h2>
      <div>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </div>
    </div>
  );
}

// 类组件验证
class ChildCpn2 extends Component {
  // constructor() {
  //   super();
  //   console.log(this.props);
  // }

  // componentWillMount() {
  //   console.log(this.props);
  // }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const { name, age, height, names } = this.props;

    return (
      <div>
        <h2>Cpn2子组件展示数据:{name + " " + age + " " + height}</h2>
        <div>
          {names.map((item, index) => {
            return <li>{item}</li>;
          })}
        </div>
      </div>
    );
  }
}

// 自定义验证规则
ChildCpn.propTypes = {
  name: Proptypes.string.isRequired,
  age: Proptypes.number,
  height: Proptypes.number,
  names: Proptypes.array,
};

// 默认值
ChildCpn.defaultProps = {
  name: "HelloKitty",
  age: 30,
  height: 1.78,
  names: ["defalut"],
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn
          name="Smallstars"
          age={18}
          height={1.83}
          names={["abc", "de"]}
        />
        <ChildCpn />
        <ChildCpn2
          name="Smallstars"
          age={18}
          height={1.83}
          names={["abc", "de"]}
        />
      </div>
    );
  }
}
