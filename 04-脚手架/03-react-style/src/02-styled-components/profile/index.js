import React, { PureComponent } from "react";
import styled from "styled-components";
/**
 * 1.props穿透
 * 2.attrs的使用
 * 3.传入state作为props属性
 */

// attrs会返回一个函数
const HYInput = styled.input.attrs({
  // 这里一般写不变的属性
  placeholder: "Smallstars",
  bColor: "red",
})`
  background-color: lightblue;
  /* 通过箭头函数和 props 得到传入的值 */
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.tColor};
`;

export default class Profile extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      tColor: "purple",
    };
  }

  render() {
    return (
      <div>
        <input type="text" />
        {/* 动态传入值 */}
        <HYInput type="text" tColor={this.state.tColor} />
        <h2>Profile</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
          <li>设置列表4</li>
          <li>设置列表5</li>
        </ul>
      </div>
    );
  }
}
