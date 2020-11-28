import React, { memo } from "react";

import profileStyle from "./style.module.css";

const index = memo(function index(props) {
  return (
    <div>
      Profile
      <h2 className={profileStyle.title}>Profile Title</h2>
    </div>
  );
});

export default index;
