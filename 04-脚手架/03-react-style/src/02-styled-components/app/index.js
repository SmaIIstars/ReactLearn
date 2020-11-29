import React, { memo } from "react";
import { ThemeProvider } from "styled-components";

import Home from "../home";
import Profile from "../profile";

import { Button, PrimaryButton } from "./style";

const index = memo(function index(props) {
  return (
    <ThemeProvider theme={{ color: "yellow", fontSize: "40px" }}>
      App
      <h2>APP Title</h2>
      <Home />
      <Profile />
      <Button>Button</Button>
      <PrimaryButton>PrimaryButton</PrimaryButton>
    </ThemeProvider>
  );
});

export default index;
