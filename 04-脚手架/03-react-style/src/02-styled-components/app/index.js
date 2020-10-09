import React, { PureComponent } from "react";

import Home from "../home/index";
import Profile from "../profile/index";
import styled, { ThemeProvider } from "styled-components";

const HYButton = styled.button`
  border-color: blue;
  padding: 10px 20px;
  color: red;
`;

// const HYPrimaryButton = styled.button`
//   border-color: blue;
//   padding: 10px 20px;
//   color: #fff;
//   background-color: green;
// `;

// 如果有相同属性可以使用继承
const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color: green;
`;

export default class App extends PureComponent {
  render() {
    return (
      // 可以共享
      <ThemeProvider theme={{ themeColor: "yellow", fontSize: "30px" }}>
        <Home />
        <hr />
        <Profile />
        <HYButton>按钮</HYButton>
        <HYPrimaryButton>主要按钮</HYPrimaryButton>
      </ThemeProvider>
    );
  }
}
