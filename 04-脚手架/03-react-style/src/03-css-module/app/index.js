import React, { memo } from "react";

import Home from "../home";
import Profile from "../profile";

// Import in this way will pollution whole situation
// import "./style.css";

// We should import file as a module
// first: style.css --> style.module.css
// second: AppStyle <-- style.module.css
// third: AppStyle.xxx
import appStyle from "./style.module.css";

const index = memo(function index(props) {
  // console.log(appStyle);
  return (
    <div id="app">
      App
      <h2 className={appStyle.title}>APP Title</h2>
      <Home />
      <Profile />
    </div>
  );
});

export default index;
