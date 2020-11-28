import React, { memo } from "react";

import homeStyle from "./style.module.css";

const index = memo(function index(props) {
  return (
    <div>
      Home
      <h2 className={homeStyle.title}>Home Title</h2>
    </div>
  );
});

export default index;
