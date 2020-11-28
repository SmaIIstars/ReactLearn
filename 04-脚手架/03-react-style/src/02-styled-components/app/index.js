import React, { memo } from "react";

import Home from "../home";
import Profile from "../profile";

const index = memo(function index(props) {
  return (
    <div id="app">
      App
      <h2>APP Title</h2>
      <Home />
      <Profile />
    </div>
  );
});

export default index;
